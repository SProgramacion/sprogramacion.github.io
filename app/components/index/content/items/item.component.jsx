import React from 'react';

export class Item extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" ng-repeat="p in publicaciones.entradas | filter: busqueda_princ">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="title">
            {this.props.titulo}
          </h2>
          <small>
            Publicado por &nbsp;
            {this.props.nick}
            <br />
            {this.props.fecha}
          </small>
          <h5 className="description">
            {this.props.resumen}
          </h5>
          <span className="label label-danger">
            {this.props.categoria}
          </span>
          &nbsp;
          <a href={this.props.href} target="_blank" className="label label-default">
            Continuar leyendo...
          </a>
          <hr />
        </div>
      </div>
    );
  }

}

Item.propTypes = {
  titulo: React.PropTypes.node.isRequired,
  nick: React.PropTypes.node.isRequired,
  fecha: React.PropTypes.node.isRequired,
  resumen: React.PropTypes.node.isRequired,
  categoria: React.PropTypes.node.isRequired,
  href: React.PropTypes.node.isRequired
};
