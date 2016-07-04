import React from 'react';

export class Categorias extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="well">
        <h4>12 Categorias</h4>
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled">
              <li>
                <a href="" ng-click="getEntradas()">Todos</a>
              </li>
              <li ng-repeat="c in categoriasentradas">
                <a href="" ng-click="xcategoria(c.id)">{{c.nombre_categoria}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
