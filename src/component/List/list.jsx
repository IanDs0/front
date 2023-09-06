import Link from "next/link";

import styles from "./list.module.css";

export default function List(props) {

	const item = (item, rote, habilitado, delet, update, deleteouupdate, index) => {
    
		return (
			
			habilitado ? 
				<div   
					key={item.id}
					onClick={()=> {
						if (deleteouupdate == -1) {
							delet(item.id, index);
						}else if (deleteouupdate == 1){
							update(item.id);
						}
					}}
					className={styles.selectbox}
				>
					<label>
						{item.cnpj}{item.cpf}
					</label>
					<label>
						{item.nome} 
					</label>
					<label>
						{item.email}
					</label>
				</div>
				:
				<Link  
					key={item.id}
					href={rote + item.id}
					className={styles.selectbox}
				>
					<label>
						{item.cnpj}{item.cpf}
					</label>
					<label>
						{item.nome} 
					</label>
					<label>
						{item.email}
					</label>
				</Link>	
		);
	};

	return (
		<div className={styles.list}>
			<h2 className={styles.heading}>{props.nome}</h2>
			{
				props.json.map(
					(items,index) => item(
						items, 
						props.rote, 
						props.active, 
						props.delete,
						props.update, 
						props.deleteouupdate,
						index)
				)
			}
		</div>
	);
}