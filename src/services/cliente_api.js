import axios from "axios";

require("dotenv").config();

// Agora você pode acessar as variáveis de ambiente definidas no .env
const API_URL = "http://localhost:3000";//process.env.API_URL;

const CLIENTE_URL = `${API_URL}/cliente`;
  
export async function getCliente(token) {
	try {
		const response = await axios.get(
			CLIENTE_URL,
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
		console.error("Erro ao buscar dados da cliente:", error);
		throw error;
	  }
	
}

export async function postCliente(postClienteData, token){
	try {
		const response = await axios.post(
			CLIENTE_URL,
		  postClienteData, 
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

export async function getClienteId(getClienteId, token){
	try {
		const response =  axios.get(
			`${CLIENTE_URL}/${getClienteId}`,
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

		return response;
	} catch (error) {
		  console.error("Erro:", error.message);
		  throw error;
	}
}

export async function patchCliente(patchClienteId, patchClienteData, token){
	try {
		const response = await axios.patch(
			`${CLIENTE_URL}/${patchClienteId}`, 
			patchClienteData, 
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

export async function deleteCliente(deliteClienteId, token){

	try {
		const response = await axios.delete(
			`${CLIENTE_URL}/${deliteClienteId}`,
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

