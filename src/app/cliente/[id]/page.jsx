import styles from "./cliente.module.css";

import List from "../../../component/List/list.jsx";

export default function User( { params } ){

	const json = {
		id: 1,
		cnpj: "123",
		name: "Ian Lucas",
		typeof: "",
		phone: "123",
		email: "i@i.i",
		address: {
			cep: "123",
			street: "123",
			number: "123",
			neighborhood: "123",
			city: "123",
			state: "123",
		},
		related: [
			{
				id: "1",
				cpf: "246",
				name: "Zay",
				email: "zay@gmail.com",
			},
			{
				id: "2",
				cpf: "135",
				name: "Ton",
				email: "tom@gmail.com",
			}
		]
	};

	return (
		<>
			<br></br>
			<h1>Todas as pessoas relacionada</h1>
			<p>Edit</p>

			<List 
				name={"relation"} 
				json={json.related} 
				rote={"/relacionada/"} 
			/>
		</>
	);
}