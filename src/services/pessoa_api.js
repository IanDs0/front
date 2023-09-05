require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = process.env.API_URL;

const PESSOA_URL = API_URL+"/pessoa";
  
export function getPessoa(){

	return fetch(PESSOA_URL)
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

export function postPessoa(postPessoData){

	const requestOptionsPostPessoa = {
		method: "POST",
		headers: {
			"Content-Type": "application/json", 
		},
		body: JSON.stringify(postPessoData),
	};

	return fetch(PESSOA_URL, requestOptionsPostPessoa)
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

export function getPessoaId(getPessoaId){

	return fetch(`${PESSOA_URL}/${getPessoaId}`)
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

export function patchPessoa(patchPessoaId, patchPessoData){

	const requestOptionsPatchPessoa = {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json", 
		},
		body: JSON.stringify(patchPessoData),
	};

	return fetch(`${PESSOA_URL}/${patchPessoaId}`, requestOptionsPatchPessoa)
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

export function delitePessoa(delitePessoaId){

	const requestOptionsDeletePessoa = {
		method: "DELETE",
	};

	return fetch(`${PESSOA_URL}/${delitePessoaId}`, requestOptionsDeletePessoa)
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

