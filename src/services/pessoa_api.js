import axios from "axios";

require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = process.env.API_URL;

const PESSOA_URL = API_URL+"/pessoa";
  

export async function getPessoa() {
	try {
		const response = await axios.get(
			"http://localhost:3000/pessoa",
			{
				headers: {
		  		"Content-Type": "application/json",
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

export async function postPessoa(postPessoData) {
	try {
	  	const response = await axios.post(
			"http://localhost:3000/pessoa",
			postPessoData, 
			{
				headers: {
		  			"Content-Type": "application/json",
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
  

export async function getPessoaId(getPessoaId) {
	try {
		const response = await axios.get(
			`http://localhost:3000/pessoa/${getPessoaId}`,
			{
				headers: {
		  		"Content-Type": "application/json",
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
  

export async function patchPessoa(patchPessoaId, patchPessoData) {
	try {
	  	const response = await axios.patch(
			`http://localhost:3000/pessoa/${patchPessoaId}`, 
	  		patchPessoData, 
			{
				headers: {
		  		"Content-Type": "application/json",
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

export async function deletePessoa(deletePessoaId) {
	try {
	  const response = await axios.delete(
			`http://localhost:3000/pessoa/${deletePessoaId}`,
			{
				headers: {
					"Content-Type": "application/json",
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
  

