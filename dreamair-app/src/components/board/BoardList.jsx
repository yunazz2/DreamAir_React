import React from 'react'
import { Link } from 'react-router-dom'

const BoardList = ( { boardList }) => {
  return (
    <div>
        <h1>게시글 목록</h1>
        <Link to="/board/insert">글쓰기</Link>
        <table border={1}>
            <thead>
                <tr>
                    <th align='100'> 번호</th>
                    <th align='100'> 이미지</th>
                    <th align='100'> 제목</th>
                    <th align='100'> 작성자</th>
                    <th align='100'> 등록일자</th>
                    <th align='100'> 수정일자</th>
                    <th align='100'> 조회수</th>
                </tr>
            </thead>

            <tbody>
                {boardList.map((board) => (
                    <tr key={board.boardNo}>
                        <td align='center'>{board.boardNo}</td>
                        <td align='center'>{board.thumbnail && (<img src={`/file/img/${board.thumbnail.fileNo}`} alt="게시글 이미지" className="card-img-top w-70 p-4" />)}</td>
                        <td align='left'>
                            <Link to={`/board/${board.boardNo}`}>{board.title}</Link>
                        </td>
                        <td align='center'>{board.writer}</td>
                        <td align='center'>{board.regDate}</td>
                        <td align='center'>{board.updDate}</td>
                        <td align='center'>{board.views}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default BoardList