import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as boards from '../../apis/board'
import * as files from '../../apis/files';
import BoardRead from '../../components/board/BoardRead'
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import CommentInsertContainer from './CommentInsertContainer';
import CommentListContainer from './CommentListContainer';

// ⛄ 게시글 조회
const BoardReadContainer = () => {

  const {boardNo} = useParams()

  const [board, setBoard] = useState({});
  const [fileList, setFileList] = useState([]);

  const getBoard = async () => {
    try {
      const response = await boards.select(boardNo);
      const data = response.data
      console.log(data);
      setBoard(data)

      const board = data.board;
      const fileList = data.fileList;
      setBoard(board);
      setFileList(fileList);
    }
    catch(e) {
      console.log(e);
    }
  }

  const onDownload = async (fileNo, fileName) => {
        
    const response = await files.download(fileNo);
    console.log(response);

    // 서버에서 반환된 파일 데이터를 Blob으로 변환
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  useEffect(() => {
    getBoard()
  }, [])  // 의존성 배열을 빈 배열로 지정

  return (
    <>
      <Header/>
      <div className='container'>
      <BoardRead boardNo={boardNo}
                 board={board}
                 fileList={fileList}
                 onDownload={(fileNo, fileName) => onDownload(fileNo, fileName)}
                 />
      <CommentInsertContainer/>
      <CommentListContainer/>
      </div>
      <Footer/>
    </>
  )
}

export default BoardReadContainer