import styles from "./cliente.module.css";

import List from "../../../component/List/list.jsx";

export default function User( { params } ){

	const json = {
		id: "728bca3c-ee46-4108-888f-20b871679f00",
		cnpj: "aaaaa",
		nome: "empresa A",
		email: "q@qa.q",
		endereco: {
			cep: "13256313612",
			logradouro: "111",
			numero: "111",
			bairro: "111",
			cidade: "111",
			estado: "111"
		},
		pessoa: [
			{
				id: "bd7aa978-af7f-4ea9-912b-39f8f34bbfcd",
				nome: "Ian",
				cpf: "12zz3",
				email: "ianlaopes@yahoo.com"
			},
			{
				id: "e7b11aa1-173a-446f-98b3-df7955414443",
				nome: "Ian LL Honorio",
				cpf: "13256313612",
				email: "ianlaopes12@yahoo.com"
			}
		]
	};

	return (
		<>
			<br></br>
			<h1>Todas as pessoas relacionada</h1>
			<p>Edit</p>

			<List 
				nome={"relation"} 
				json={json.pessoa} 
				rote={"/relacionada/"} 
			/>
		</>
	);
}