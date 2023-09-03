import styles from "./cliente.module.css";

import List from "../../component/List/list.jsx";

export default function User(){

	const json = [
		{
			id: 1,
			cnpj: "123",
			name: "Ian Lucas",
			email: "i@i.i",
		},
		{
			id: 2,
			cnpj: "321",
			name: "Lopes Honorio",
			email: "a@a.a",
		}
	];

	return (
		<>
			<br></br>
			<h1>Todos os clientes</h1>
			<p>Edit</p>

			<List 
				name={"clientes"} 
				json={json} 
				rote={"/cliente/"} 
			/>
		</>
	);
}