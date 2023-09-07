import axios from "axios";

require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = process.env.API_URL;

const CLIENTE_URL = `${API_URL}/cliente`;
  
export async function getCliente() {
	try {
		const response = await axios.get(
			"http://localhost:3000/cliente",
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
		console.error("Erro ao buscar dados da cliente:", error);
		throw error;
	  }
	
}

export async function postCliente(postClienteData){
	try {
		const response = await axios.post(
		  "http://localhost:3000/cliente",
		  postClienteData, 
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

export async function getClienteId(getClienteId){
	try {
		const response =  axios.get(
			`http://localhost:3000/cliente/${getClienteId}`,
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

		return response;
	} catch (error) {
		  console.error("Erro:", error.message);
		  throw error;
	}
}

export async function patchCliente(patchClienteId, patchClienteData){
	try {
		const response = await axios.patch(
			`http://localhost:3000/cliente/${patchClienteId}`, 
			patchClienteData, 
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

export async function deleteCliente(deliteClienteId){

	try {
		const response = await axios.delete(
			`http://localhost:3000/cliente/${deliteClienteId}`,
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

