import React, {Component} from 'react';

const HeaderHome = (props) => (

    <header className="masthead" style={{backgroundImage: `url(${'./images/header-bg.jpg'})`}}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">{props.title}</div>
                <div className="intro-heading text-uppercase">{props.description}</div>
                <center>
                    <a id='sendMessageButton'
                       className="btn btn-info btn-group-lg text-uppercase js-scroll-trigger home-btn"
                       href="#services">Tell Me More</a>
                </center>
            </div>
        </div>
    </header>

);

HeaderHome.defaultProps = {
    'title': 'Welcome To Our Studio!',
    'description' : 'It\'s Nice To Meet You'
};

export default HeaderHome;
