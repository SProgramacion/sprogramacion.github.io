import React from 'react';

export class Items extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="publicaciones">
        <div className="col-md-8">

            <div className="row">
              <div className="col-md-8 col-md-offset-2" ng-show="publicaciones.entradas.length == 0">
                No hay publicaciones
              </div>
              <div className="col-md-8 col-md-offset-2" ng-show="publicaciones.entradas.length == 1">
                Hay 1 publicación
              </div>
              <div className="col-md-8 col-md-offset-2" ng-show="publicaciones.entradas.length > 1">
                Hay
                13
                publicaciónes
              </div>
            </div>

          </div>

        <div className="col-md-4">



        </div>
      </div>

    );
  }

}
