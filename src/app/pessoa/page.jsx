"use client";

import React, { useState, useEffect } from "react";
import { BiEditAlt, BiPlus, BiSave, BiTrash } from "react-icons/bi";


import styles from "./pessoa.module.css";

import { getPessoa, postPessoa, getPessoaId, patchPessoa, deletePessoa } from "../../services/pessoa_api";
import { getCliente, getClienteId } from "../../services/cliente_api";
import List from "../../component/List/list.jsx";

function formPessoa(setFormData,formData) {
	return (
		<>
			<h2>Formulário</h2>
			<label>
                Nome:
				<input
					type="text"
					value={formData.nome}
					onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
				/>
			</label>
			<label>
                Telefone:
				<input
					type="text"
					value={formData.telefone}
					onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
				/>
			</label>
			<label>
                Cpf:
				<input
					type="text"
					value={formData.cpf}
					onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
				/>
			</label>
			<label>
                Data de Nascimento:
				<input
					type="date"
					value={formData.data_de_nascimento}
					onChange={(e) => { setFormData({ ...formData, data_de_nascimento: e.target.value });}}
				/>

			</label>
			<label>
                Email:
				<input
					type="email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
			</label>
			<h3>Selecionar Clientes:</h3>
		</>
	);
}

export default function Pessoa(){

	// Pessoa API
	async function GetById(id){
		try {
			let json = await getPessoaId(id);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}
	
	async function Patch(id, patch){
		try {
			let json = await patchPessoa(id, patch);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}
	
	async function GetAll(){
		try {
			let json = await getPessoa();
			// console.log("Dados da pessoa como JSON:", json);
			setJsonArry(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function Delete(id){
		try {
			let json = await deletePessoa(id);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function Create(post){
		try {
			let json = await postPessoa(post);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error.status);
			throw error;
		}
	}

	// CLiente API
	
	async function GetAllClientes(){
		try {
			let json = await getCliente();
			// console.log("Dados da pessoa como JSON:", json);
			setClients(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function GetClienteById(id){
		try {
			let json = await getClienteId(id);
			// console.log("Dados da pessoa como JSON:", json);
			return json.data;
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	//use Effect

	useEffect(() => {
		GetAll();
		GetAllClientes();
	}, []); 
	

	// UseState;
	
	//para editar
	const [edit, setEdit] = useState(false);
	const [DU,setDU] = useState(0);

	//para deletar
	const [json, setJson] = useState({});
	const [jsonArry, setJsonArry] = useState([]);
	const [delite, setDelite] = useState(false);

	//para criar
	const [formstatus, setFormStatus] = useState(false);
	const [selectedClients, setSelectedClients] = useState([]);
	const [clients, setClients] = useState([]);
	const [formData, setFormData] = useState({
		nome: "",
		telefone: "",
		cpf: "",
		data_de_nascimento: "",
		email: "",
	});

	// Editar
	function EditAndSave() {
		if (edit === false) {
			setDU(1);
			setEdit(true);
			setDelite(false);
			console.log("Edit");
		}else{
			setDU(0);
			setEdit(false);
			setDelite(false);
			console.log("Save");
		}
	}

	const U = (id) => {

		GetById(id);

		const data = new Date(json.data_de_nascimento).toISOString().slice(0, 10);

		const formDataJson = {
			id: json.id,
			nome: json.nome,
			telefone: json.telefone,
			cpf: json.cpf,
			data_de_nascimento: data,
			email: json.email,
			cliente: json.cliente
		}; 
		setFormData(formDataJson);

		setFormStatus(true);
	};

	async function patchSubmit (){

		try {
			const allClientsPromises = selectedClients.map(async (cliente) => {
				return await GetClienteById(cliente);
			});

			// Use await diretamente em Promise.all para esperar a resolução das promessas
			const allClientsSelected = await Promise.all(allClientsPromises);

			const formDataJson = {
				id: json.id,
				nome: formData.nome,
				telefone: formData.telefone,
				cpf: formData.cpf,
				data_de_nascimento: formData.data_de_nascimento+"T00:00:00.000Z",
				email: formData.email,
				cliente: allClientsSelected,
			};

			console.log(formDataJson);
			await Patch(formDataJson.id,formDataJson);
		
			setFormData({
				nome: "",
				telefone: "",
				cpf: "",
				data_de_nascimento: "",
				email: "",
			});
			setSelectedClients([]);
			
			setFormStatus(false);
		} catch (error) {
		  	console.error("Erro ao lidar com o envio do formulário:", error);
		}	
	};
	  
	// Deleta;
	
	function Delet() {
		if(delite === false){
			console.log("Delet");
			setDU(-1);
			setEdit(false);
			setDelite(true);
		}else{
			console.log("Deletdo");
			setDU(0);
			setEdit(false);
			setDelite(false);
		}
		setDelite(!delite);
	}
	
	const D = (id, index) => {
		Delete(id);
		let newArray = [...jsonArry];
    
		newArray.splice(index, 1);    
		setJsonArry(newArray);
		setDelite(!delite);
		setDU(0);
	};

	// Cria;

	function Creat() {
		setFormStatus(!formstatus);
		setFormData({
			nome: "",
			telefone: "",
			cpf: "",
			data_de_nascimento: "",
			email: "",
		});
		setSelectedClients([]);
	}

	const handleClientSelect = (clientId) => {
		if (selectedClients.includes(clientId)) {
			setSelectedClients(selectedClients.filter((id) => id !== clientId));
		} else {
			setSelectedClients([...selectedClients, clientId]);
		}
	};

	async function handleSubmit () {
		
		try {
			const allClientsPromises = selectedClients.map(async (cliente) => {
				return await GetClienteById(cliente);
			});

			// Use await diretamente em Promise.all para esperar a resolução das promessas
			const allClientsSelected = await Promise.all(allClientsPromises);

			const formDataJson = {
				id: json.id,
				nome: formData.nome,
				telefone: formData.telefone,
				cpf: formData.cpf,
				data_de_nascimento: formData.data_de_nascimento+"T00:00:00.000Z",
				email: formData.email,
				cliente: allClientsSelected,
			};

			console.log(formDataJson);
			await Create(formDataJson);
		
			setFormData({
				nome: "",
				telefone: "",
				cpf: "",
				data_de_nascimento: "",
				email: "",
			});
			setSelectedClients([]);
			
			setFormStatus(false);
		} catch (error) {
		  	console.error("Erro ao lidar com o envio do formulário:", error);
		}
	};

	return (
		<>
			<br></br>
			<h1>Todas as pessoas</h1>
			<div>
				<div className={styles.editbutton}>
					<button type="button" onClick={() => Creat()}>
						<BiPlus/>
					</button>
					<button type="button" onClick={() => EditAndSave()}>
						{edit ? <BiSave/> : <BiEditAlt/>}
					</button>
					<button type="button" onClick={() => Delet()}>
						{delite ? <BiSave/> : <BiTrash/>}
					</button>
				</div>
				<br></br>			
				<div className={formstatus ? styles.popup : styles.popupclose}>
					<div className={styles.popupcontent}>
						{
							formPessoa(setFormData,formData)
						}
						<ul>
							{clients.map((client) => (
								<li key={client.id}>
									<label>
										<input
											type="checkbox"
											value={client.id}
											checked={selectedClients.includes(client.id)}
											onChange={() => handleClientSelect(client.id)}
										/>
										{client.nome}
									</label>
								</li>
							))}
						</ul>
						<button onClick={!edit ? handleSubmit : patchSubmit}>{!edit ? "Criar" : "Atualizar"}</button>
						<button onClick={Creat}>Fechar</button>
					</div>
				</div>
			</div>


			

			<List 
				name={"pessoa"} 
				json={jsonArry} 
				active={edit | delite}
				deleteouupdate={DU}
				delete={D}
				update={U}
				rote={"/pessoa/"} 
			/>
		</>
	);
}