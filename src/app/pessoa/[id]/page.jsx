import styles from "./cliente.module.css";

import List from "../../../component/List/list.jsx";

export default function User( { params } ){

	const json = {
		id: "4cc8372b-531e-4e5b-8d65-07979550055b",
		nome: "q",
		cpf: "q",
		email: "q@yahoo.com",
		telefone: "q",
		cliente: [
			{
				id: "3f4159bd-0a04-4488-948c-1708ecf7a6ec",
				cnpj: "123",
				nome: "Ian interpise",
				email: "interpise@yahoo.com"
			},
			{
				id: "f2c852db-f97b-4126-833e-972ec6668abc",
				cnpj: "haaasaddfvdaaaaaa",
				nome: "empresaa A",
				email: "aaaaaasdaasdaa@agamil.com"
			}
		]
	};

	return (
		<>
			<br></br>
			<h1>Todos os clientes que o usuario e relacionado</h1>
			<p>Edit</p>

			<List 
				name={"pessoa"} 
				json={json.cliente} 
				rote={"/pessoa/"} 
			/>
		</>
	);
}