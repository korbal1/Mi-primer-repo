import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<section>
					<Componente msg="Componenete funcional expresado desde prop ;)" />
					<hr />
					<Propiedades
						cadena="CristalD10s"
						numero={19}
						booleano={true}
						arreglo={[1, 2, 3]}
						objeto={{ nombre: "Dani", correo: "danicorbalan@gmail.com" }}
						funcion={(num) => num * num}
						elementoReact={<i>Esto es un elementoReact</i>}
						componenteReact={
							<Componente msg="Soy un componente pasado como Prop" />
						}
					/>
					<hr />
					<Estado />
					<hr />
					<RenderizadoCondicional />
					<hr />
					<RenderizadoElementos />
					<hr />
					<EventosES6 />
					<hr />
					<EventosES7 />
					<hr />
					<MasSobreEventos />
					<hr />
					<Padre />
					<hr />
					<CicloVida />
					<hr />
					<AjaxApis />
					<hr />
					<ContadorHooks titulo="Seguidores" />
					<hr />
					<ScrollHooks />
					<hr />
					<RelojHooks />
					<hr />
					<AjaxHooks />
					<hr />
					<HooksPersonalizados />
				</section>
			</header>
		</div>
	);
}

export default App;
