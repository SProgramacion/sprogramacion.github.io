import React from 'react';

export class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '@anlijudavid',
      subtitle: 'Backend & Frontend',
      nav: [{
        href: '#banner',
        class: 'page-scroll active',
        title: 'Home'
      }, {
        href: '#features',
        class: 'page-scroll',
        title: 'Features'
      }, {
        href: '#about',
        class: 'page-scroll',
        title: 'About'
      }, {
        href: '#contact',
        class: 'page-scroll',
        title: 'Contact'
      }]
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid banner text-center" id="banner">
          <div className="row">
            <div className="col-md-12 line">
              <div className="tablebox">
                <div className="banner-text" id="bannertext">
                  <h1 className="hostyle" id="heads">
                    {this.state.title}
                  </h1>
                  <p className="pstyle">
                    {this.state.subtitle}
                  </p>
                  <a href="#features" className="page-scroll arrow">
                    <i className="fa fa-angle-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar menubar" id="menu">
          <div className="container">
            <div className="navbar-header">
            	<button type="button" className="navbar-toggle menu-button" data-toggle="collapse" data-target="#myNavbar">
        			<span className="glyphicon glyphicon-align-justify"></span>
        		 </button>
            <a className="navbar-brand logo" href="#">Code</a>
            </div>
            <div>
            	<nav className="collapse navbar-collapse" id="myNavbar" role="navigation">
                <ul className="nav navbar-nav navbar-right navstyle">
                  {
                    this.state.nav.map((item, i) =>
                      <li key={i}><a href={item.href} className={item.class}>{item.title}</a></li>
                    )
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>

    );
  }

}
