import React from 'react';

export class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header header-filter" style={{"background-image": "url(assets/images/photo-1423655156442-ccc11daa4e99.jpg)"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">Semillero de Programación</h1>
                <h4>Entrenamiento en estrategias de programación, con el propósito de aumentar el nivel en Algoritmia de los equipos que representan a la Universidad de la Amazonia en las Maratones Regionales, Nacionales y Mundiales de Programación.</h4>
                <br/>
                <a href="https://www.youtube.com/watch?v=uvFojBYflTk" className="btn btn-danger btn-raised btn-lg">
                  <i className="fa fa-play"></i>
                  Ver video
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="main main-raised">
          <div className="container">
            <div className="section section-landing">


            </div>
          </div>
        </div>
      </div>

    );
  }

}
