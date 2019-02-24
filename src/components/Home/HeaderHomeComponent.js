import React, {Component} from 'react';

const HeaderHome = (props) => (

    <header className="masthead" style={{backgroundImage: `url(${'./images/hub.jpg'})`}}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in">{props.title}</div>
                <div className="intro-heading text-uppercase">{props.description}</div>
            </div>
        </div>
    </header>

);

HeaderHome.defaultProps = {
    'title': '',
    'description' : 'It\'s Nice To Meet You'
};

export default HeaderHome;
