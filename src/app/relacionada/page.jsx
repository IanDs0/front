import styles from "./cliente.module.css";

import List from "../../component/List/list.jsx";

export default function User(){

	const json = [
		{
			id: 1,
			cpf: "123",
			name: "Ian Lucas",
			email: "i@i.i",
		},
		{
			id: 2,
			cpf: "321",
			name: "Lopes Honorio",
			email: "a@a.a",
		}
	];

	return (
		<>
			<br></br>
			<h1>Todas as pessoas</h1>
			<p>Edit</p>

			<List 
				name={"relacionada"} 
				json={json} 
				rote={"/relacionada/"} 
			/>
		</>
	);
}