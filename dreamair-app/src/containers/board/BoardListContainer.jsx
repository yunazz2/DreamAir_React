import React, { useEffect, useState } from 'react'
import * as boards from '../../apis/board'
import BoardList from '../../components/board/BoardList';
import Header from '../../components/fragment/Header'
import Footer from '../../components/fragment/Footer'
import Pagination from 'react-js-pagination';
import '../../styles/Paging.css'

const BoardListContainer = () => {

    // state 설정
    const [boardList, setBoardList] = useState([])

    const [isLoading, setLoading] = useState(true)

    const [currentPost, setCurrentPost] = useState([]);
    const [page, setPage] = useState(1);
    const postPerPage = 3; // 페이지 당 게시글 개수

    const handlePageChange = (page) => {
        setPage(page);
    };

    useEffect(() => {
        const indexOfLastPost = page * postPerPage;
        const indexOfFirstPost = indexOfLastPost - postPerPage;
        setCurrentPost(boardList.slice(indexOfFirstPost, indexOfLastPost));
    }, [boardList, page]);


    // ✔ 게시글 목록 데이터
    const getBoardList = async () => {
        const response = await boards.list();  // 모듈을 가지고 와서 boardList라는 함수를 실행한다.
        const data = await response.data;
        console.log(data);
        setBoardList(data);
    };

    useEffect(() => {
        setLoading(true)
        getBoardList();
        setLoading(false)
    }, [])

    return (
    <>
        <Header/>
        <div className='container'>
        <BoardList isLoading = {isLoading} boardList={currentPost}></BoardList>
        <Pagination
          activePage={page}
          itemsCountPerPage={postPerPage}
          totalItemsCount={boardList.length}
          pageRangeDisplayed={10}
          prevPageText={'‹'}
          nextPageText={'›'}
          onChange={handlePageChange}
          containerClassName={"pagination-ul"}
          activeClassName={"currentPage"}
          previousClassName={"pageLabel-btn"}
          nextClassName={"pageLabel-btn"}
        />
        </div>
        <Footer/>
    </>
    )
}

export default BoardListContainer