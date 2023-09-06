"use client";

import React, { useState, useEffect } from "react";
import { BiEditAlt, BiPlus, BiSave, BiTrash } from "react-icons/bi";


import styles from "./cliente.module.css";

import { getPessoa, postPessoa, getPessoaId, patchPessoa, deletePessoa } from "../../services/pessoa_api";
import { getCliente } from "../../services/cliente_api";
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

export default function User(){

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
			console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function Create(post){
		try {
			let json = await postPessoa(post);
			console.log("Dados da pessoa como JSON:", json);
			// setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error.status);
			throw error;
		}
	}

	// CLiente API
	
	async function GetAllClientes(){
		try {
			let json = await getCliente();
			console.log("Dados da pessoa como JSON:", json);
			setClients(json);
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

	const patchSubmit = () => {
		const formDataJson = {
			id: json.id,
			nome: formData.nome,
			telefone: formData.telefone,
			cpf: formData.cpf,
			data_de_nascimento: formData.data_de_nascimento+"T00:00:00.000Z",
			email: formData.email,
			cliente: selectedClients.map(cliente => ({cnpj: cliente})),
		};
		
		Patch(formDataJson.id,formDataJson);
		
		setFormData({
			nome: "",
			telefone: "",
			cpf: "",
			data_de_nascimento: "",
			email: "",
		});
		setSelectedClients([]);
		
		setFormStatus(false);
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

	const handleSubmit = () => {
		// Crie um objeto JSON com os dados do formulário
		const formDataJson = {
			nome: formData.nome,
			telefone: formData.telefone,
			cpf: formData.cpf,
			data_de_nascimento: formData.data_de_nascimento+"T00:00:00.000Z",
			email: formData.email,
			cliente: selectedClients.map(cliente => ({cnpj: cliente})),
		};
		
		// Você pode fazer o que quiser com formDataJson, como enviá-lo para um servidor
		console.log(formDataJson);
		Create(formDataJson);
		
		// Limpar o formulário e fechar o pop-up
		setFormData({
			nome: "",
			telefone: "",
			cpf: "",
			data_de_nascimento: "",
			email: "",
		});
		setSelectedClients([]);
		
		  // Fechar o pop-up (você pode chamar a função onClose aqui se necessário)
		setFormStatus(!formstatus);
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
								<li key={client.cnpj}>
									<label>
										<input
											type="checkbox"
											value={client.cnpj}
											checked={selectedClients.includes(client.cnpj)}
											onChange={() => handleClientSelect(client.cnpj)}
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
				rote={"/cliente/"} 
			/>
		</>
	);
}