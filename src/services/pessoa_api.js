import axios from "axios";

require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = "http://localhost:3000";//process.env.API_URL;

const PESSOA_URL = API_URL+"/pessoa";
  

export async function getPessoa(token) {
	try {
		const response = await axios.get(
			PESSOA_URL,
			{
				headers: {
		  			"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
	  		}
		)
			.then(response => {
				// console.log("Resposta da API:", response.data);
				return response;
			})
			.catch(error => {
				console.error("Erro: " + error.message);
				throw error;
			});

		return response.data;
	  } catch (error) {
		console.error("Erro ao buscar dados da pessoa:", error);
		throw error;
	  }
	
}

export async function postPessoa(postPessoData, token) {
	try {
	  	const response = await axios.post(
			PESSOA_URL,
			postPessoData, 
			{
				headers: {
		  			"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
	  		}
		)
			.then(response => {
				// console.log("Resposta da API:", response.data);
				return response;
			})
			.catch(error => {
				console.error("Erro: " + error.message);
				throw error;
			});

		return response.data;
	} catch (error) {
	  console.error("Erro: " + error.message);
	}
}
  

export async function getPessoaId(getPessoaId, token) {
	try {
		const response = await axios.get(
			`${PESSOA_URL}/${getPessoaId}`,
			{
				headers: {
		  			"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
	  		}
		)
			.then(response => {
				// console.log("Resposta da API:", response.data);
				return response;
			})
			.catch(error => {
				console.error("Erro: " + error.message);
				throw error;
			});

		return response.data;
	} catch (error) {
		  console.error("Erro:", error.message);
		  throw error;
	}
}
  

export async function patchPessoa(patchPessoaId, patchPessoData, token) {
	try {
	  	const response = await axios.patch(
			`${PESSOA_URL}/${patchPessoaId}`, 
	  		patchPessoData, 
			{
				headers: {
		  			"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
	  		}
	  	)
	  		.then(response => {
				// console.log("Resposta da API:", response.data);
				return response;
			})
			.catch(error => {
				console.error("Erro: " + error.message);
				throw error;
			});
  
	  return response.data;
	} catch (error) {
	  console.error("Erro:", error.message);
	  throw error;
	}
}

export async function deletePessoa(deletePessoaId, token) {
	try {
	  const response = await axios.delete(
			`${PESSOA_URL}/${deletePessoaId}`,
			{
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`,
				},
		  }
		)
			.then(response => {
				// console.log("Resposta da API:", response.data);
				return response;
			})
			.catch(error => {
				console.error("Erro: " + error.message);
				throw error;
			});

		return response.data;
	} catch (error) {
	  	console.error("Erro:", error.message);
	  	throw error;
	}
}
  

