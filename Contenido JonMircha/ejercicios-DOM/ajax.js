const d = document;

//Objeto XMLHttpRequest
(() => {
	const xhr = new XMLHttpRequest();
	$xhr = d.getElementById("xhr");
	$fragment = d.createDocumentFragment();

	xhr.addEventListener("readystatechange", (e) => {
		if (xhr.readyState !== 4) return;

		// console.log(xhr);

		if (xhr.status >= 200 && xhr.status < 300) {
			// console.log("éxito");
			// console.log(xhr.responseText);
			// $xhr.innerHTML = xhr.responseText;
			let json = JSON.parse(xhr.responseText);
			//console.log(json);

			json.forEach((el) => {
				const $li = d.createElement("li");
				$li.innerHTML = `${el.name} - ${el.email} - ${el.username}`;
				$fragment.appendChild($li);
			});

			$xhr.appendChild($fragment);
		} else {
			//console.log("error");
		}
	});

	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

	xhr.send();
})();

//API Fetch
(() => {
	const $fetch = d.getElementById("fetch");
	$fragment = d.createDocumentFragment();

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((json) => {
			// console.log(json);
			//$fetch.innerHTML = json;
			json.forEach((el) => {
				const $li = d.createElement("li");
				$li.innerHTML = `${el.name} - ${el.email} - ${el.username}`;
				$fragment.appendChild($li);
			});

			$fetch.appendChild($fragment);
		})
		.catch((err) => {
			// console.log("Estamos en el catch", err);
		});
	// .finally(() =>
	// 	console.log(
	// 		"Esto se ejecutará independientemente del resultado de la promesa fetch"
	// 	)
	// );
})();

//API Fetch + Async & Await
(() => {
	const $fetchAsync = d.getElementById("fetch-async");
	$fragment = d.createDocumentFragment();

	async function getData() {
		try {
			let res = await fetch("https://jsonplaceholder.typicode.com/users"),
				json = await res.json();

			// console.log(res, json);

			if (!res.ok) throw { status: res.status, statusText: res.statusText };

			json.forEach((el) => {
				const $li = d.createElement("li");
				$li.innerHTML = `${el.name} - ${el.email} - ${el.username}`;
				$fragment.appendChild($li);
			});

			$fetchAsync.appendChild($fragment);
		} catch (err) {
			console.log(err);
			let message =
				err.statusText || "Ocurrió un error inesperado. Bardiaste wachín";
			$fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
		} finally {
			// console.log(
			// 	"Esto se ejecutará de frente mantecol porque está en un bloque finally"
			// );
		}
	}

	getData();
})();

//Librería Externa: Axios
(() => {
	const $axios = d.getElementById("axios");
	$fragment = d.createDocumentFragment();

	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then((res) => {
			// console.log(res);
			let json = res.data;
			json.forEach((el) => {
				const $li = d.createElement("li");
				$li.innerHTML = `${el.name} - ${el.email} - ${el.username}`;
				$fragment.appendChild($li);
			});

			$axios.appendChild($fragment);
		})
		.catch((err) => {
			// console.log("Estamos en el catch, cachai?", err.response);
			let message =
				err.response.statusText ||
				"Ocurrió un error inesperado. La cagaste de nuevo, pa";
			$axios.innerHTML = `Error ${err.response.status}: ${message}`;
		})
		.finally(() => {
			// console.log("Esto va como loco papu, bloque finally");
		});
})();

//Axios + Async & Await
(() => {
	const $axiosAsync = d.getElementById("axios-async");
	$fragment = d.createDocumentFragment();

	async function getData() {
		try {
			let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
				json = await res.data;

			// console.log(res, json);

			json.forEach((el) => {
				const $li = d.createElement("li");
				$li.innerHTML = `${el.name} - ${el.email}`;
				$fragment.appendChild($li);
			});

			$axiosAsync.appendChild($fragment);
		} catch (err) {
			// console.log("Estamos en el catch, cachai?", err.response);
			let message = err.response.statusText || "La cagaste de nuevo, pa";
			$axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
		} finally {
			// console.log("Se ejecutará...");
		}
	}
	getData();
})();
