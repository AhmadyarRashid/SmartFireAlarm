import React, {Component} from 'react';

export default class HeaderHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="masthead" style={{backgroundImage: `url(${'./images/header-bg.jpg'})`}}>
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Welcome To Our Studio!</div>
                        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                        <center>
                            <a id='sendMessageButton'
                               className="btn btn-info btn-group-lg text-uppercase js-scroll-trigger home-btn"
                               href="#services">Tell
                                Me
                                More</a>
                        </center>
                    </div>
                </div>
            </header>

        );
    }

}