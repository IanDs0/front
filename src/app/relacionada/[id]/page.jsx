import styles from "./cliente.module.css";

import List from "../../../component/List/list.jsx";

export default function User( { params } ){

	const json = {
		id: "1",
		cpf: "123",
		name: "Zay",
		phone: "123",
		email: "zay@gmail.com",
		related: [
			{
				id: "1",
				cnpj: "246",
				name: "Zay",
				email: "zay@gmail.com",
			},
			{
				id: "2",
				cnpj: "135",
				name: "Ton",
				email: "tom@gmail.com",
			}
		]
	};

	return (
		<>
			<br></br>
			<h1>Todos os clientes que o usuario e relacionado</h1>
			<p>Edit</p>

			<List 
				name={"relation"} 
				json={json.related} 
				rote={"/relacionada/"} 
			/>
		</>
	);
}