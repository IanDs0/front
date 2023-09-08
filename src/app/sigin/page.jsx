"use client";
import styles from "./sigin.module.css";

import Button from "../../component/Button/button.jsx";

import { sigIn } from "../../services/auth_api.js";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const sigin = "sigin";

export default function Sigin(){

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const siginForm = async (e) => {
		e.preventDefault();

		const sigin = {
			"username": username,
			"password": password
		};

		const response = await sigIn(sigin);

		if (response.status === 200) {

			Cookies.set("access_token", response.data.access_token, { expires: 1, path: "/" });

			router.replace("/cliente");

		}
		
	};

	return (
		<div className={styles.siginpage}>
			<div className={styles.form}>
				<form 
					className={styles.siginform}
					onSubmit={siginForm}
				>
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