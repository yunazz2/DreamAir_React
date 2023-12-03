import React, { useEffect, useState } from 'react'
import * as board from '../../apis/board'
import BoardList from '../../components/board/BoardList';

const BoardListContainer = () => {

    // state 설정
    const [boardList, setBoardList] = useState([])

    // ✔ 게시글 목록 데이터
    // const getBoardList = async () => {
    //     const response = await board.list();  // 모듈을 가지고 와서 boardList라는 함수를 실행한다.
    //     const data = await response.data;
    //     console.log(data);
    //     setBoardList(data);
    // };

    // useEffect(() => {
    //     getBoardList();
    // }, [])  // 의존성 배열을 빈 배열로 지정

    return (
    <>
        <BoardList boardList={boardList}></BoardList> {/** props로 내려준다 .*/}
    </>
    )
}

export default BoardListContainer