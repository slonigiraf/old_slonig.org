import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'

const TestimonialData = [
        {
            photo: '/assets/images/agency/testimonial/araslanova.png',
            name: 'Karina Araslanova',
            role: 'History teacher, Lyceum No. 9, Slobodskoy city',
            details: 'Students like that during such lessons they can talk with absolutely any classmate, move around the classroom. The technique is convenient not only for children, but also for teachers.'
        },
        {
            photo: '/assets/images/agency/testimonial/skobelev.png',
            name: 'Nikolay Skobelev',
            role: 'Chemistry teacher, Compas, Budva',
            details: 'The approach used in Slonig helps to enhance student motivation, communication, and interaction within the group. The students were interested in the new format. I think Slonig could be a convenient tool for education.'
        },
        {
            photo: '/assets/images/agency/testimonial/lebedincev.png',
            name: 'Vladimir Lebedintsev',
            role: 'PhD, Associate Professor, Krasnoyarsk regional institute for educators training',
            details: 'It\'s interesting to observe how the project team manages to focus on the importance of personal freedom, self-determination of students and live communication in the learning process.'
        },
        {
            photo: '/assets/images/agency/testimonial/shirokova.png',
            name: 'Elena Shirokova',
            role: 'English teacher, Family education center, Saratov city',
            details: 'I was pleased with the results. The kids enjoyed it. Those children who were mentors felt more confident. Most of the child mentors really tried to teach others, they felt responsible.'
        },
    ];

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [ 
        { 
            breakpoint: 575, 
            settings: { 
                slidesToShow: 1,
                arrows: false
             } 
        }, 
        { 
            breakpoint: 992, 
            settings: { 
                slidesToShow: 2,
                arrows: false
            } 
        }
    ]
};

const Testimonial = () => (
    <section className="agency testimonial format testimonial-bg">
        <Container>
            <Row>
                <Col md="5">
                    <div className="format-container m-b-50">
                        <br/>
                        <div className="format-head-text">
                            <h2 className=" text-white">Slonig <span className="block-span">eases teaching</span></h2>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme testimonial-slider" {...settings}>
                        {TestimonialData.length > 0 ?
                            TestimonialData.map((item, index) =>
                                <div className="item" key={`testimonial-${index}`}>
                                    <div className="testimonial-container testimonial-container2 m-0">
                                        <div className="d-flex align-items-center">
                                            <img alt="" className="img-fluid m-r-25" src={item.photo} />
                                            <div className="center-content">
                                                <h6 className="name">{item.name}</h6>
                                                <h6 className="post font-primary">{item.role}</h6>
                                            </div>
                                        </div>
                                        <div className="testimonial-info">
                                            <p className="m-b-20 para2">
                                                {item.details}
                                            </p>
                                            <div className="primary-border"></div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            'No Testimonial Found'}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Testimonial;