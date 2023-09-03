"use client";
import styles from "./sigin.module.css";


import Button from "../../component/Button/button.jsx";


const sigin = "sigin";
function siginForm () {
	console.log("siginForm");
};

export default function Sigin(){

	return (
		<div className={styles.siginpage}>
			<div className={styles.form}>
				<form 
					className={styles.siginform}
					onSubmit={siginForm}
				>
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password"/>
					<Button
						style="secondary"
						click={siginForm}
						body={sigin}
					/>
					<p className="message">
						Not registered? 
						<a href="/sigup">
							Create an account
						</a>
					</p>
				</form>
			</div>
		</div>
    
	);
}