/**
 * Items = Publicaciones
 */
import React from 'react';

import { Item } from './item.component.jsx';

export class Items extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dir: "http://45.55.50.95:1337/entrada",
      items: []
    }
  }

  //Antes de montar el componente
  componentWillMount(){
    console.log('Before mount...');
  }

  //Despues de montar el componente
  componentDidMount(){
    console.log('Mount');

    this.serverRequest = $.get(this.state.dir, function (result) {
      console.log(result);

      this.setState({
        items: result.entradas
      });
    }.bind(this));
  }

  //Se invocará antes del render, justo antes que tu componente se haya actualizado (recibiendo nuevas props o state).
  componentWillUpdate(){
    console.log('Update MyComponent');
  }

  //Se invoca inmediatamente después del render, justo cuando tu componente a cambiado.
  componentDidUpdate(prevProps,prevState) {
    console.log('prevPros or prevState');
  }

  render() {
    return (
      <div id="publicaciones">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              Hay {this.state.items.length} publicaciónes
            </div>
          </div>
          {
            this.state.items.map((item, i) =>
              <Item key={i} titulo={item.titulo} nick={item.entrada_usuario.nick} fecha={moment(item.createdAt).fromNow()} resumen={item.resumen} categoria={item.categoria_entrada_ref.nombre_categoria} href={"http://45.55.50.95:1337/showOne/" + item.id} />
            )
          }
        </div>

        <div className="col-md-4">

        </div>
      </div>
    );
  }

}
