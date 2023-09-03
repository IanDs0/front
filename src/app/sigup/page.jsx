"use client";
import styles from "./sigin.module.css";


import Button from "../../component/Button/button.jsx";


const sigup = "sigup";
function sigupForm () {
	console.log("sigupForm");
};

export default function Sigin(){

	return (
		<div className={styles.siguppage}>
			<div className={styles.form}>
				<form className={styles.registerform}>
					<input type="text" placeholder="name"/>
					<input type="password" placeholder="password"/>
					<input type="text" placeholder="email address"/>
					<Button
						style="primary"
						click={sigupForm}
						body={sigup}
					/>
					<p className="message">
						Already registered? 
						<a href="/sigin">
							Sign In
						</a>
					</p>
				</form>
			</div>
		</div>
    
	);
}