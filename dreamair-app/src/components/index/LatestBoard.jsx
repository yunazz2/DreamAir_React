import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LatestBoard = ({ mainList }) => {
  return (
    <>
    <hr></hr>
    <section id="board">
      <Container>
        <h1 className="board_title">최근 게시글</h1>

        <Row className="board_container">
          {mainList.map((board) => (
            <Col key={board.boardNo} md={4}>
              <Card className="px-1">
                <div className="img_container" style={{ height: '250px', overflow: 'hidden' }}>
                  {board.thumbnail && (
                    <Card.Img
                      src={`/file/img/${board.thumbnail.fileNo}`}
                      alt="게시글 이미지"
                      className="card-img-top w-100 p-4"
                    />
                  )}
                </div>
                <Card.Body>
                  <Card.Title>{board.title}</Card.Title>
                  <p className="card-text">
                    작성자: <span>{board.writer}</span>
                    <br />
                    등록일자: <span>{new Date(board.regDate).toLocaleString()}</span>
                    <br />
                    수정일자: <span>{new Date(board.updDate).toLocaleString()}</span>
                    <br />
                    조회수: <span>{board.views}</span>
                  </p>
                  <a href={`/board/read?boardNo=${board.boardNo}`} className="btn btn-primary">
                    게시글 조회
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr></hr>
    </section>
    </>
  );
};

export default LatestBoard;
