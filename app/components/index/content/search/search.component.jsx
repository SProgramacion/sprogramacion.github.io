import React from 'react';

export class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="well">
        <h4 data-toggle="tooltip" data-placement="top" title="Buscar en todos las publicaciones hasta ahora.">
          Buscar
        </h4>
        <div className="form-group label-floating">
          <label className="control-label">
            Busqueda
          </label>
          <input type="text" className="form-control" ng-change="buscar()" ng-model="buscar_frase" />
        </div>
        <span ng-show="resultados_publicaciones.entradas.length > 0">{{resultados_publicaciones.entradas.length}}
          encontrados</span>
        <ul className="list-group" ng-show="resultados_publicaciones.entradas.length > 0">
          <li className="list-group-item" ng-repeat="encontrado in resultados_publicaciones.entradas">
            <span className="badge">
              {{moment(encontrado.updatedAt).fromNow()}}
            </span>
            {{encontrado.titulo}}
            <a href="/entrada/showOne/{{encontrado.id}}">Ver</a>
          </li>
        </ul>
      </div>
    );
  }

}
