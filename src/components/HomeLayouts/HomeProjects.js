import { Component } from "react";
import Slider from "react-slick";

import imgOne from '../../assets/imgs/home/1.webp';
import imgTwo from '../../assets/imgs/home/2.webp';
import imgThree from '../../assets/imgs/home/3.webp';
import imgFour from '../../assets/imgs/home/4.webp';
import imgFive from '../../assets/imgs/home/5.webp';
import imgSix from '../../assets/imgs/home/6.webp';
import imgSeven from '../../assets/imgs/home/7.webp';

const projects = [
    {
        title: 'Kwash',
        featured_img: imgOne,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    },
    {
        title: 'T-SCAN',
        featured_img: imgTwo,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    },
    {
        title: 'Grind Fitness',
        featured_img: imgThree,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    },
    {
        title: 'Braaap Motocycles',
        featured_img: imgFour,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    },
    {
        title: 'Premier Corex',
        featured_img: imgFive,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    },
    {
        title: 'Holistic Horizons',
        featured_img: imgSix,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    },
    {
        title: 'Gizber Donation',
        featured_img: imgSeven,
        framework: 'WordPress / Divi Theme builder',
        description: 'Custom theme development without any builders',
        link: '#'
    }
];
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
            margin: "auto",
            padding: '10px'
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
                            {
                                projects.map( project => (
                                    <div className="hover-overlay">
                                        <img src={project.featured_img} style={imgStyle} alt="" />
                                        <div className="overlay" style={overlayDivStyle}>
                                            <h3>{project.title}</h3>
                                            <p className="text-start"><strong>Framework: </strong>{project.framework}</p>
                                            <p className="text-start"><strong>Short Description: </strong>{project.description}</p>
                                            <a href={project.link} class="ps-btn">View More</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>

            </section>

        );
    }
}

export default HomeProjects;