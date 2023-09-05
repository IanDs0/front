require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = process.env.API_URL;

const CLIENTE_URL = API_URL+"/cliente";
  
export function getCliente(){

	return fetch(CLIENTE_URL)
		.then(response => {
			if (!response.ok) {
				throw new Error("Erro na requisição: " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log("Resposta da API:", data);
		})
		.catch(error => {
			console.error("Erro: " + error.message);
		});
}

export function postCliente(postPessoData){

	const requestOptionsPostCliente = {
		method: "POST",
		headers: {
			"Content-Type": "application/json", 
		},
		body: JSON.stringify(postPessoData),
	};

	return fetch(CLIENTE_URL, requestOptionsPostCliente)
		.then(response => {
			if (!response.ok) {
				throw new Error("Erro na requisição: " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log("Resposta da API:", data);
		})
		.catch(error => {
			console.error("Erro: " + error.message);
		});
}

export function getClienteId(getClienteId){

	return fetch(`${CLIENTE_URL}/${getClienteId}`)
		.then(response => {
			if (!response.ok) {
				throw new Error("Erro na requisição: " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log("Resposta da API:", data);
		})
		.catch(error => {
			console.error("Erro: " + error.message);
		});
}

export function patchCliente(patchClienteId, patchPessoData){

	const requestOptionsPatchCliente = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json", 
		},
		body: JSON.stringify(patchPessoData),
	};

	return fetch(`${CLIENTE_URL}/${patchClienteId}`, requestOptionsPatchCliente)
		.then(response => {
			if (!response.ok) {
				throw new Error("Erro na requisição: " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log("Resposta da API:", data);
		})
		.catch(error => {
			console.error("Erro: " + error.message);
		});
}

export function deliteCliente(deliteClienteId){

	const requestOptionsDeleteCliente = {
		method: "DELETE",
	};

	return fetch(`${CLIENTE_URL}/${deliteClienteId}`, requestOptionsDeleteCliente)
		.then(response => {
			if (!response.ok) {
				throw new Error("Erro na requisição: " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			console.log("Resposta da API:", data);
		})
		.catch(error => {
			console.error("Erro: " + error.message);
		});
}

