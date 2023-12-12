import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const RecommendedSpots = () => {
  return (
    <>
    <hr className='section_bar'/>
    <section id="spot">
      <Container>
        <h1 className='spot_title'>추천 여행지</h1>

        <Row className="spot_container">
          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Jeju.jpg" alt="제주" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>제주</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Ulsan.jpg" alt="울산" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>울산</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Yeosu.jpg" alt="여수" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>여수</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Busan.jpg" alt="부산" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>부산</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Paris.jpg" alt="파리" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>파리</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Japan.jpg" alt="일본" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>일본</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          
          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/Swiss.jpg" alt="스위스" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>스위스</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="text-white">
              <Card.Img src="/img/London.jpg" alt="런던" className="card-img" />
              <Card.ImgOverlay>
                <Card.Title className='rec_title'>런던</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

    </section>
    </>
  );
};

export default RecommendedSpots;
