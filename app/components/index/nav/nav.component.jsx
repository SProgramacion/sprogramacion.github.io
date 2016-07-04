import React from 'react';

export class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'SProgramacion',
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
      <nav className="navbar navbar-transparent navbar-absolute" role="navigation">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              {this.state.titulo}
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navigation-example">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/acercade#acercade" className="btn">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/#publicaciones" className="btn">
                  Publicaciones
                </a>
              </li>
              <li>
                <a href="/usuario/signin" className="btn">
                  Login
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CreativeTim" target="_blank" className="btn btn-simple">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/CreativeTim" target="_blank" className="btn btn-simple">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/CreativeTimOfficial" target="_blank" className="btn btn-simple">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}
