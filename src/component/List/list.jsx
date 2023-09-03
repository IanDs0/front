import Link from "next/link";

import styles from "./list.module.css";

function item (item, rote) {
    
	return (
		<Link  
			id={item.id}
			href={rote + item.id}
			className={styles.selectbox}
		>
			<label>
				{item.cnpj} {item.name} {item.email}
			</label>
		</Link>
	);

}

export default function List(props) {

	
	return (
		<div className={styles.list}>
			<h2 className={styles.heading}>{props.name}</h2>
			{
				props.json.map(
					items => item(items, props.rote)
				)
			}
		</div>
	);
}