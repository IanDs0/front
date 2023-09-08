"use client";
import styles from "./sigin.module.css";

import Button from "../../component/Button/button.jsx";

import { sigUp, sigIn } from "../../services/auth_api.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

const sigup = "sigup";

export default function Sigin(){

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const router = useRouter(); 

	const sigupForm = async (e) => {
		e.preventDefault();

		const sigup = {
			"username": username,
			"email": email,
			"password": password
		};

		const responseSigUp = await sigUp(sigup);

		if (responseSigUp.status === 201) {

			Cookies.set("access_token", responseSigUp.data.access_token, { expires: 1, path: "/" });

			const sigin= {
				"username": username,
				"password": password
			};

			const responseSigIn = await sigIn(sigin);
			
			if (responseSigIn.status === 200) {

				Cookies.set("access_token", response.data.access_token, { expires: 1, path: "/" });
	
				router.route("/cliente");

			}
		}
	};

	return (
		<div className={styles.siguppage}>
			<div className={styles.form}>
				<form className={styles.registerform}>
					<input
						type="text"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="email"
						placeholder="email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
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