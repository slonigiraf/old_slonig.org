import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
const ExpertData = [
        {
            photo: '/assets/images/agency/team/reshetov.png',
            title: 'Denis Reshetov',
            details: 'Team Leader. Has experience in managing large projects in the field of education, as well as scientific work in the field of studying the human brain.'
        },
        {
            photo: '/assets/images/agency/team/andreeva2.png',
            title: 'Natalie Andreeva',
            details: 'Chief Business Development Officer. Natali has many years of experience in financial management in fintech and educational projects.'
        },
        {
            photo: '/assets/images/agency/team/moskvin.png',
            title: 'Ilya Moskvin',
            details: 'Software Engineer. Ilya works with a wide range of technologies, from Javascript to distributed computing and blockchain.'
        },
    ];

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 369,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 479,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 767,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        }
    ]
};

const Expert = () => (
    <section className="agency format speaker expert-bg">
        <Container>
            <Row>
                <Col lg="3" md="4">
                    <div className="format-container">
                        <h6 className="borders-before">
                            <span>Slonig developers</span>
                        </h6>
                        <div className="format-head-text">
                            <h2>We just want to support teachers</h2>
                        </div>
                        <div className="format-sub-text">
                            <p className="about-para">
                                We’ve spent years in the classroom, and we feel your pain. That’s why everything we do is about making your life easier.
                            </p>
                        </div>
                        {/* <a className=" btn btn-default btn-gradient" href="#">view more</a> */}
                    </div>
                </Col>
                <Col lg="9" md="8">
                    <Slider {...settings}>
                        {ExpertData.length > 0 ?
                            ExpertData.map((item, index) =>
                                <div className="item speker-container" key={`our-expert-team-${index}`}>
                                    <div className="text-center">
                                        <div className="team-img">
                                            <img alt="" className="img-fluid" src={item.photo} />
                                            {/* <div className="overlay"></div>
                                        <div className="social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/">
                                                        <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/">
                                                        <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://accounts.google.com/">
                                                        <i aria-hidden="true" className="fa fa-google center-content"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.globe.gov/">
                                                        <i aria-hidden="true" className="fa fa-globe center-content"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                                        </div>
                                        <div className="employee">
                                            <h5 className="e-name">{item.title}</h5>
                                            <h6 className="post font-secondary">{item.details}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                            : 'Expert Details Not Found'}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Expert;