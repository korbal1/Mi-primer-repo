import React, { Component } from "react";

function Pokemon(props) {
	return (
		<figure>
			<img src={props.avatar} alt={props.name} />
			<figcaption>{props.name}</figcaption>
		</figure>
	);
}

export default class AjaxApis extends Component {
	state = {
		pokemons: [],
	};

	componentDidMount() {
		let url = "https://pokeapi.co/api/v2/pokemon/";
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
				json.results.forEach((el) => {
					fetch(el.url)
						.then((res) => res.json())
						.then((json) => {
							// console.log(json);
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default,
							};

							//*** Usar Spread Operator no es la mejor solución, no renderiza toda la información que uno desea ****
							let pokemons = [...this.state.pokemons, pokemon];

							this.setState({ pokemons });
						});
				});
			});
	}

	render() {
		return (
			<>
				<h2>Peticiones Asíncronas en Componentes de Clase</h2>
				{this.state.pokemons.map((el) => (
					<Pokemon key={el.id} name={el.name} avatar={el.avatar} />
				))}
			</>
		);
	}
}
