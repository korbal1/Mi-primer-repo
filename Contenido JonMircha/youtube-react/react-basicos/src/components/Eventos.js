import React, { Component } from "react";

export class EventosES6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0,
		};

		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}

	sumar() {
		console.log("Sumando");
		console.log(this);
		this.setState({
			contador: this.state.contador + 1,
		});
	}

	restar() {
		console.log("Restando");
		this.setState({
			contador: this.state.contador - 1,
		});
	}

	render() {
		return (
			<div>
				<h2>Eventos de Componentes de Clase ES6</h2>
				<h3>{this.state.contador}</h3>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
			</div>
		);
	}
}

//ES7 + Properties Initializer
export class EventosES7 extends Component {
	state = {
		contador: 0,
	};

	//Arrow functions
	sumar = (e) => {
		console.log("Sumando");
		console.log(this);
		this.setState({
			contador: this.state.contador + 1,
		});
	};

	restar = (e) => {
		console.log("Restando");
		this.setState({
			contador: this.state.contador - 1,
		});
	};

	render() {
		return (
			<div>
				<h2>Eventos de Componentes de Clase ES7</h2>
				<h3>{this.state.contador}</h3>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
			</div>
		);
	}
}

//Evento Personalizado. Creamos un componente "Boton" para explicarlo.
function Boton(props) {
	return <button onClick={props.myOnClick}>Botón hecho componente</button>;
}

//Eventos Nativos, Sintéticos & Personalizados
export class MasSobreEventos extends Component {
	handleClick = (e, mensaje) => {
		console.log(e);
		console.log(e.nativeEvent);
		console.log(mensaje);
	};

	render() {
		return (
			<div>
				<h2>Más sobre Eventos</h2>
				<button
					onClick={(e) =>
						this.handleClick(e, "Hola, pasando parámetro adicional")
					}
				>
					Saludar
				</button>
				{/* Uno de los típicos errores de novato: eventos de linea/etiqueta JSX no funcionan en componentes. */}
				{/* <Boton
					onClick={(e) =>
						this.handleClick(e, "Hola, pasando parámetro adicional")
					}
				/> */}
				<Boton
					myOnClick={(e) =>
						this.handleClick(e, "Hola, desde evento personalizado")
					}
				/>
			</div>
		);
	}
}
