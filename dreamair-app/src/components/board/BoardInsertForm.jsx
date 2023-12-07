import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as filesApi from '../../apis/files';
// ckeditor5
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const BoardInsertForm = ({ onInsert }) => {

  // ⭐ state 설정 => value에 설정할 값들
  const [title, setTitle] = useState([]);
  const [writer, setWriter] = useState([]);
  const [content, setContent] = useState([]);
  const [files, setFiles] = useState(null);     // ✅ files state 추가

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  // const handleChangeContent = (e) => {
  //   setContent(e.target.value);
  // };

  // ✅ 파일 핸들러 추가
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('writer', writer);
        formData.append('content', content);

        const headers = {
            headers: {
                'Content-Type' : 'multipart/form-data',
            },
        };
        
        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append(`files[${i}]`, files[i]);
            }
        }

        onInsert(formData, headers)                             // formData 사용 ⭕
        
    }

    const customUploadAdapter = (loader) => {
        return {
          upload() {
            return new Promise( (resolve, reject) => {
              const formData = new FormData();
              loader.file.then( async (file) => {
                    console.log(file);
                    formData.append("parentTable", 'editor');
                    formData.append("file", file);

                    const headers = {
                        headers: {
                            'Content-Type' : 'multipart/form-data',
                        },
                    };
    
                    let response = await filesApi.upload(formData, headers);
                    let data = await response.data;
                    console.log(`data : ${data}`);
                    
                    let newFileNo = data;

                    await resolve({
                        default: `/file/img/${newFileNo}`
                    })
              });
            });
          },
        };
    };

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        };
    }

  return (
    <div>
      <h1 className='my-4 text-center'>게시글 등록</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">제목</label>
          <input type="text" className="form-control" id="title" value={title} onChange={handleChangeTitle}/>
        </div>

        <div className="mb-3">
          <label htmlFor="writer" className="form-label">작성자</label>
          <input type="text" className="form-control" id="writer" value={writer} onChange={handleChangeWriter}/>
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">내용</label>
          {/* <textarea className="form-control" id="content" rows="5" value={content} onChange={handleChangeContent}></textarea> */}
          <CKEditor
                                editor={ ClassicEditor }
                                config={{
                                    placeholder: "내용을 입력하세요.",
                                    toolbar: {
                                        items: [
                                            'undo', 'redo',
                                            '|', 'heading',
                                            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                                            '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                                            '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                                            '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                                            '|', 'mediaEmbed',
                                        ],
                                        shouldNotGroupWhenFull: false
                                    },
                                    editorConfig: {
                                        height: 500,
                                    },
                                    alignment: {
                                        options: ['left', 'center', 'right', 'justify'],
                                    },
                                    
                                    extraPlugins: [uploadPlugin]            // 업로드 플러그인
                                }}
                                data=""
                                onReady={ editor => {
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                    setContent(data);
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">파일</label>
          <input type="file" className="form-control" onChange={handleFileChange} multiple/>
        </div>

        <div className="mb-3">
          <button className="btn btn-secondary me-2"><Link to="/board">목록</Link></button>
          <button type="button" className="btn btn-primary" onClick={onSubmit}>등록</button>
        </div>
    </div>
  );
};

export default BoardInsertForm;