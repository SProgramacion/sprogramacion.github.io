import React from 'react';

export class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/acercade#acercade">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            &copy; 2016, made with
            <i className="fa fa-heart heart"></i>
            by <a href="http://www.twitter.com/anlijudavid">@anlijudavid</a>
          </div>
        </div>
      </footer>

    );
  }

}
