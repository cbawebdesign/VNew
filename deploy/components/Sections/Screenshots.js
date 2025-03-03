import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { SRLWrapper } from 'simple-react-lightbox';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Screenshots = (props) => {
    return (
        <section id="screenshots" className={props.className}>
            
            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>App Screenshots</h3>
							<p>Check out some screenshots of the Vestly mobile app!</p>
						</div>
						
					</Col>
				</Row>         

                <Row>

                    <Col className="col-12">

                        {/* <!-- Carousel --> */}
                        <SRLWrapper>
                            <Swiper
                                className="screenshot-slider zoom-screenshot"
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    320: {
                                        spaceBetween: 15,
                                        slidesPerView: 1
                                    },
                                    768: {
                                        spaceBetween: 20,
                                        slidesPerView: 2
                                    },
                                    1024: {
                                        spaceBetween: 30,
                                        slidesPerView: 4
                                    }
                                }}
                                modules={[Autoplay, Pagination]}
                            >
                                 <SwiperSlide className="item">
                                    <a href="/images/screenshots/login.PNG">
                                        <img src="/images/screenshots/login.PNG" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/nvda/png">
                                        <img src="/images/screenshots/nvda.png" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/leaderboard.png">
                                        <img src="/images/screenshots/leaderboard.png" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/news.PNG">
                                        <img src="/images/screenshots/news.PNG" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/inspiration.PNG">
                                        <img src="/images/screenshots/inspiration.PNG" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/rocket.PNG">
                                        <img src="/images/screenshots/rocket.PNG" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/prize.png">
                                        <img src="/images/screenshots/prize.png" alt="" />
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="item">
                                    <a href="/images/screenshots/prize3.png">
                                        <img src="/images/screenshots/prize3.png" alt="" />
                                    </a>
                                </SwiperSlide>
                            </Swiper>
                        </SRLWrapper>

                    </Col>

                </Row>
                    
            </Container>

        </section>
    );
}

export default Screenshots;