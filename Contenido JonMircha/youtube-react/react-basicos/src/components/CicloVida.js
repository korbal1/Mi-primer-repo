import React, { Component } from "react";

//Componente creado al final para explicar el desmontaje. El constructor era innecesario.
class Reloj extends Component {
	componentWillUnmount() {
		// console.log(3, "El componente ha sido eliminado del DOM");
	}

	render() {
		return <h3>{this.props.hora}</h3>;
	}
}

//Componente Padre
export default class CicloVida extends Component {
	constructor(props) {
		super(props);
		// console.log(0, "El Componente se inicializa aún NO está en el DOM");

		this.state = {
			hora: new Date().toLocaleTimeString(),
			visible: false,
		};

		this.tempo = null;
	}

	componentDidMount() {
		// console.log(1, "El Componente ya se encuentra en el DOM");
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log(2, "El Estado o las Props del Componente han cambiado");
		// console.log(prevProps);
		// console.log(prevState);
	}

	tictac = () => {
		this.tempo = setInterval(() => {
			this.setState({
				hora: new Date().toLocaleTimeString(),
			});
		}, 1000);
	};

	iniciar = () => {
		this.tictac();
		this.setState({
			visible: true,
		});
	};

	detener = () => {
		clearInterval(this.tempo);
		this.setState({
			visible: false,
		});
	};

	render() {
		// console.log(
		// 	4,
		// 	"El Componente se dibuja (o re-dibuja por algún cambio) en el DOM"
		// );
		return (
			<>
				<h2>Ciclo de Vida de los Componentes de Clase</h2>
				{this.state.visible && <Reloj hora={this.state.hora} />}
				<button onClick={this.iniciar}>Inciar</button>
				<button onClick={this.detener}>Detener</button>
			</>
		);
	}
}
