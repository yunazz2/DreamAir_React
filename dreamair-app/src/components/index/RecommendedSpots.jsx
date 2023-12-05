import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RecommendedSpots = () => {
  return (
    <section id="spot">
      <Container>
        <h1 className="mt-5 ms-5">추천 여행지</h1>

        <Row className="spot_container">
          <Col md={4}>
            <Card className="text-white">
              <Card.Img src="/img/Paris.jpg" alt="파리" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title>파리</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-white">
              <Card.Img src="/img/Japan.jpg" alt="일본" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title>일본</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-white">
              <Card.Img src="/img/Jeju.jpg" alt="제주" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title>제주</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-white">
              <Card.Img src="/img/Ulsan.jpg" alt="울산" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title>울산</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-white">
              <Card.Img src="/img/Yesu.jpg" alt="여수" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title>여수</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RecommendedSpots;
