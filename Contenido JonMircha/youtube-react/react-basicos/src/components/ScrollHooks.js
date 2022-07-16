import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		// console.log("Fase de Montaje");

		const detectarScrollY = () => {
			setScrollY(window.scrollY);
		};
	});

	return (
		<>
			<h2>Hooks - useEffect y el Ciclo de Vida</h2>
			<h4>ScrollY del Navegador {scrollY}px</h4>
		</>
	);
}
