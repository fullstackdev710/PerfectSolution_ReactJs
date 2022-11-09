import { Component } from "react";
import { Row, Col } from "antd";
// import axios from "axios";
// import { response } from "express";
import { send } from 'emailjs-com';
import { ContactForm } from '../Contact/ContactForm';

class HomeSubscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    }

    state = {
        subscribeRes: ''
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMsgChange(event) {
        this.setState({ message: event.target.value })
    }

    submitEmail(e) {
        e.preventDefault();

        // axios({
        //     method: "POST",
        //     // url: "http://localhost:3001/send",
        //     url: "https://www.react.peace-marketing.com:3001/send",
        //     data: { name: this.state.name, to: this.state.email }
        // }).then((response) => {
        //     console.log(response);
        //     if (response.data.status === 'success') {
        //         this.setState({ subscribeRes: 'Email sent successfully!' });
        //         this.resetForm();
        //     } else if (response.data.status === 'fail') {
        //         this.setState({ subscribeRes: 'FAILED...' });
        //     }
        // });

        send(
            'service_n003ad7',
            'template_0snm518',
            this.state,
            'user_g3IILZ4agZB3VqkwvuOlC'
        )
            .then((response) => {
                this.setState({ subscribeRes: 'Email sent successfully!' });
            })
            .catch((err) => {
                this.setState({ subscribeRes: 'FAILED...' + err });
            });
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    render() {
        let facebookUrl = "https://www.facebook.com/dragon.soft.star.forest/";
        let skypeUrl = "skype:live:silverstar710rich?chat";
        let linkedinUrl = "https://www.linkedin.com/in/jacob-davidson-73a7a7223/";
        let span = {
            lg: 12,
            md: 12,
            sm: 24
        }

        return (
            <section id="home-subscribe" className="pb-5 pt-5 bg-secondary">
                <div className="background-overlay"></div>
                <div className="container z-1">
                    <div className="row d-none">
                        <h2 className="text-white">GET IN TOUCH</h2>
                    </div>

                    <Row>
                        <Col span={24} className="container">
                            <Row>
                                <div className="container z-1" style={{ position: 'inherit' }}>
                                    <Col>
                                        <Row>
                                            <Col {...span}>
                                                <h3 className="text-white">What happens next?</h3>
                                                <ul className="ps-contact__text-list">
                                                    <li>
                                                        We’ll contact you within three business days of receiving your submission and schedule a free video call to get to know each other and learn your requirements.
                                                    </li>
                                                    <li>
                                                        When required by you, we’re happy to sign an NDA to ensure total comfort.
                                                    </li>
                                                    <li>We’ll meet as necessary to understand all your needs and one of our business analysts will submit to you a comprehensive project proposal.
                                                    </li>
                                                    <li>We’ll assemble the team for your project and can start delivering within seven business days!
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col {...span}>
                                                <ContactForm />
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <div className="row d-none">
                        <form id="subscribe-form" className="pt-5 pb-5" onSubmit={this.submitEmail.bind(this)} method="POST">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-8">
                                        <input placeholder="Email" id="email" type="email" className="form-control" aria-describedby="emailHelp" required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </div>
                                    <div className="col-md-4">
                                        <button type="submit" className="primary-btn submit main-btn">Subscribe Now!</button>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="mt-3 text-white text-center">{this.state.subscribeRes}</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="row social-icons">
                        <a href={facebookUrl} target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={skypeUrl} target="_blank" rel="noreferrer">
                            <i className="fab fa-skype"></i>
                        </a>
                        <a href={linkedinUrl} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeSubscribe;