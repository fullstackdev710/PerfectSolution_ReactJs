import { Component } from "react";
import Slider from "react-slick";

import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';
import imgSeven from '../../assets/imgs/home/7.webp';

class HomeProjects extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const overlayDivStyle = {
            width: "90%",
            maxWidth: "420px",
            margin: "auto"
        }
        const imgStyle = {
            width: "90%",
            height: "auto",
            maxWidth: "420px",
            margin: "auto"
        }

        return (
            <section id="home-projects" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white">
                            PROJECTS WE LOVE
                        </h2>
                    </div>
                    <div className="row pt-5 pb-5 text-white text-center">
                        <Slider {...settings}>
                            <div className="hover-overlay">
                                <img src={imgOne} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <img src={imgTwo} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <img src={imgThree} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <img src={imgFour} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <img src={imgFive} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <img src={imgSix} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <img src={imgSeven} style={imgStyle} alt="" />
                                <div className="overlay" style={overlayDivStyle}>
                                    <div className="text">Hello World</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </section>

        );
    }
}

export default HomeProjects;