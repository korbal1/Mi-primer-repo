import React, { useState, useEffect } from "react";

//Componente funcional "Pokemon" que debiera estar en otro archivo, pero a fines didacticos va a aquí.
function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default function AjaxHooks() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url),
				json = await res.json();
			//console.log(json);

			json.results.forEach(async (el) => {
				let res = await fetch(el.url),
					json = await res.json();
				//console.log(json);

				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				};

				setPokemons((pokemons) => [...pokemons, pokemon]);
			});
		};

		getPokemons("https://pokeapi.co/api/v2/pokemon/");
	}, []);

	return (
		<>
			<h2>Peticiones Asíncronas con Hooks</h2>
			{pokemons.map((el) => (
				<Pokemon key={el.id} name={el.name} avatar={el.avatar} />
			))}
		</>
	);
}
