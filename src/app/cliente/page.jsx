"use client";

import React, { useState, useEffect } from "react";
import { BiEditAlt, BiPlus, BiSave, BiTrash } from "react-icons/bi";

import styles from "./cliente.module.css";

import { getPessoa, getPessoaId } from "../../services/pessoa_api";
import { getCliente, postCliente, getClienteId, patchCliente, deleteCliente } from "../../services/cliente_api";
import List from "../../component/List/list.jsx";
import Cookies from "js-cookie";

function formPessoa(setFormData,formData,setOpcaoSelecionada,opcaoSelecionada) {

	const handleOpcaoSelecionada = (e) => {
		if(e.target.value === "regular") {
			setFormData({ ...formData, tipo: true });
		}else{
			setFormData({ ...formData, tipo: false });
		}
		setOpcaoSelecionada(e.target.value);
	};

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
                Cnpj:
				<input
					type="text"
					value={formData.cnpj}
					onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
				/>
			</label>
			<label>
                Data de Fundacao:
				<input
					type="date"
					value={formData.data_de_fundacao}
					onChange={(e) => { setFormData({ ...formData, data_de_fundacao: e.target.value });}}
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
			<label>
        		Tipo:
				<select 
					value={opcaoSelecionada} 
					onChange={handleOpcaoSelecionada}>
					<option  
						value="regular">
						Regular
					</option>
					<option 
						value="avulso">
						Avulso
					</option>
				</select>
			</label>

			<h3>Endereco:</h3>

			<label>
        			CEP:
				<input
					type="text"
					value={formData.endereco.cep}
					onChange={(e) => setFormData({ ...formData, endereco:{ ...formData.endereco, cep: e.target.value}})}
				/>
			</label>
			<label>
        			Logradouro:
				<input
					type="text"
					value={formData.endereco.logradouro}
					onChange={(e) => setFormData({ ...formData, endereco:{ ...formData.endereco, logradouro: e.target.value}})}
				/>
			</label>
			<label>
        			Número:
				<input
					type="text"
					value={formData.endereco.numero}
					onChange={(e) => setFormData({ ...formData, endereco:{ ...formData.endereco, numero: e.target.value}})}
				/>
			</label>
			<label>
        			Bairro:
				<input
					type="text"
					value={formData.endereco.bairro}
					onChange={(e) => setFormData({ ...formData, endereco:{ ...formData.endereco, bairro: e.target.value}})}
				/>
			</label>
			<label>
        			Cidade:
				<input
					type="text"
					value={formData.endereco.cidade}
					onChange={(e) => setFormData({ ...formData, endereco:{ ...formData.endereco, cidade: e.target.value}})}
				/>
			</label>
			<label>
        			Estado:
				<input
					type="text"
					value={formData.endereco.estado}
					onChange={(e) => setFormData({ ...formData, endereco:{ ...formData.endereco, estado: e.target.value}})}
				/>
			</label>
			
			<h3>Selecionar Pessoas:</h3>
		</>
	);
}

export default function Cliente(){

	const access_token = Cookies.get("access_token");

	// Cliente API
	async function GetById(id){
		try {
			let json = await getClienteId(id, access_token);
			// console.log("Dados da pessoa como JSON:", json.data);
			setJson(json.data);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}
	
	async function Patch(id, patch){
		try {
			let json = await patchCliente(id, patch, access_token);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}
	
	async function GetAll(){
		try {
			let json = await getCliente(access_token);
			// console.log("Dados da pessoa como JSON:", json);
			setJsonArry(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function Delete(id){
		try {
			let json = await deleteCliente(id, access_token);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function Create(post){
		try {
			let json = await postCliente(post, access_token);
			// console.log("Dados da pessoa como JSON:", json);
			setJson(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error.status);
			throw error;
		}
	}

	// Pessoa API
	
	async function GetAllPessoas(){
		try {
			let json = await getPessoa(access_token);
			// console.log("Dados da pessoa como JSON:", json);
			setClients(json);
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	async function GetPessoaById(id){
		try {
			let json = await getPessoaId(id, access_token);
			// console.log("Dados da pessoa como JSON:", json);
			return json;
		} catch (error) {
			console.error("Erro ao buscar dados da pessoa:", error);
			throw error;
		}
	}

	//use Effect

	useEffect(() => {
		GetAll();
		GetAllPessoas();
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
	const [selectedPessoas, setSelectedPessoas] = useState([]);
	const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
	const [clients, setClients] = useState([]);
	const [formData, setFormData] = useState({
		cnpj: "",
		nome: "",
		data_de_fundacao: "",
		tipo: true,
		telefone: "",
		email: "",
		endereco: {},
		pessoa: []
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

		
		const data = new Date(json.data_de_fundacao).toISOString().slice(0, 10);
		
		const formDataJson = {
			id: json.id,
			nome: json.nome,
			telefone: json.telefone,
			cnpj: json.cnpj,
			data_de_fundacao: data,
			email: json.email,
			tipo: json.tipo,
			endereco: json.endereco,
			pessoa: json.pessoa
		}; 
		setFormData(formDataJson);

		setFormStatus(true);
	};

	async function patchSubmit ()  {
		try {
			const allPessoasPromises = selectedPessoas.map(async (pessoa) => {
				return await GetPessoaById(pessoa);
			});

			// Use await diretamente em Promise.all para esperar a resolução das promessas
			const allPessoasSelected = await Promise.all(allPessoasPromises);

			const formDataJson = {
				id: json.id,
				nome: formData.nome,
				telefone: formData.telefone,
				cnpj: formData.cnpj,
				tipo: formData.tipo,
				data_de_fundacao: formData.data_de_fundacao + "T00:00:00.000Z",
				email: formData.email,
				endereco: formData.endereco,
				pessoa: allPessoasSelected,
			};

			await Patch(formDataJson.id, formDataJson);

			setFormData({
				cnpj: "",
				nome: "",
				data_de_fundacao: "",
				tipo: true,
				telefone: "",
				email: "",
				endereco: {},
				pessoa: [],
			});
			setSelectedPessoas([]);

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
			cnpj: "",
			nome: "",
			data_de_fundacao: "",
			tipo: true,
			telefone: "",
			email: "",
			endereco: {},
			pessoa: []
		});
		setSelectedPessoas([]);
	}

	const handlePessoaSelect = (pessoaId) => {
		console.log(pessoaId);
		if (selectedPessoas.includes(pessoaId)) {
			setSelectedPessoas(selectedPessoas.filter((id) => id !== pessoaId));
		} else {
			setSelectedPessoas([...selectedPessoas, pessoaId]);
		}
	};

	async function handleSubmit () {
		try {
		  const allPessoasPromises = selectedPessoas.map(async (pessoaId) => {
				return await GetPessoaById(pessoaId);
		  });
	  
		  const allPessoasSelected = await Promise.all(allPessoasPromises);
	  
		  const formDataJson = {
				nome: formData.nome,
				telefone: formData.telefone,
				cnpj: formData.cnpj,
				tipo: formData.tipo,
				data_de_fundacao: formData.data_de_fundacao + "T00:00:00.000Z",
				email: formData.email,
				endereco: formData.endereco,
				pessoa: allPessoasSelected,
		  };

		  console.log(formDataJson);
	  
		  await Create(formDataJson);
	  
		  setFormData({
				cnpj: "",
				nome: "",
				data_de_fundacao: "",
				tipo: true,
				telefone: "",
				email: "",
				endereco: {},
				pessoa: [],
		  });
		  setSelectedPessoas([]);
	  
		  setFormStatus(!formstatus);
		} catch (error) {
		  console.error("Erro ao lidar com o envio do formulário:", error);
		}
		await GetAll();
	  };

	return (
		<>
			<br></br>
			<h1>Todas os clientes</h1>
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
							formPessoa(setFormData,formData,setOpcaoSelecionada,opcaoSelecionada)
						}
						<ul>
							{clients.map((client) => (
								<li key={client.id}>
									<label>
										<input
											type="checkbox"
											value={client.id}
											checked={selectedPessoas.includes(client.id)}
											onChange={() => handlePessoaSelect(client.id)}
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
				name={"cliente"} 
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