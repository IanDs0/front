import styles from "./cliente.module.css";

import List from "../../component/List/list.jsx";

export default function User(){

	const json = [
		{
			id: "c19339cc-dcf9-48c6-ae66-8e6953476cab",
			nome: "asdsadaaasd",
			cpf: "asdasdsasaraaadasdasd",
			email: "ianladasadasfdopsdseas@yahoo.com"
		},
		{
			id: "4cc8372b-531e-4e5b-8d65-07979550055b",
			nome: "q",
			cpf: "q",
			email: "q@yahoo.com"
		},
		{
			id: "84965613-fe4d-447a-b391-9bd3bc53afce",
			nome: "asdsaadaaasd",
			cpf: "asdasdsaasaraaadasdasd",
			email: "ianladasadaasfdopsdseas@yahoo.com"
		}
	];

	return (
		<>
			<br></br>
			<h1>Todas as pessoas</h1>
			<p>Edit</p>

			<List 
				name={"pessoa"} 
				json={json} 
				rote={"/cliente/"} 
			/>
		</>
	);
}