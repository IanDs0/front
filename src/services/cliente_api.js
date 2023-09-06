import axios from "axios";

require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = process.env.API_URL;

const CLIENTE_URL = `${API_URL}/cliente`;
  
export async function getCliente() {
	try {
		const response = await axios.get("http://localhost:3000"+"/cliente");
		return response.data; // Retorna os dados da pessoa como JSON
	  } catch (error) {
		console.error("Erro ao buscar dados da pessoa:", error);
		throw error;
	  }
	
}

export function postCliente(postClienteData){

	const requestOptionsPostCliente = {
		method: "POST",
		headers: {
			"Content-Type": "application/json", 
		},
		body: JSON.stringify(postClienteData),
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

