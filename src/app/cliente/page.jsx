import styles from "./cliente.module.css";

import List from "../../component/List/list.jsx";

export default function User(){

	const json =[
		{
			"id": "9aae416a-aacc-4901-a419-9bc41d864a97",
			"cnpj": "098",
			"nome": "Lucas",
			"email": "aa@aa.aa"
		},
		{
			"id": "728bca3c-ee46-4108-888f-20b871679f00",
			"cnpj": "aaaaa",
			"nome": "empresa A",
			"email": "q@qa.q"
		}
	];

	return (
		<>
			<br></br>
			<h1>Todos os clientes</h1>
			<p>Edit</p>

			<List 
				nome={"clientes"} 
				json={json} 
				rote={"/cliente/"} 
			/>
		</>
	);
}