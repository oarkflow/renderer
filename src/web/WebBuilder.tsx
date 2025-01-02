import {componentConfig} from "./config/components";
import {Render} from "@measured/puck";
import "@measured/puck/dist/index.css";
import {useEffect, useState} from "react";

export default function WebBuilder() {
	const [data, setData] = useState()
	useEffect(() => {
		const possibleData = localStorage.getItem("json_data")
		if (possibleData) {
			setData(JSON.parse(possibleData))
		}
	}, []);
	if (!data) {
		return <div>Loading...</div>
	}
	return (
        <Render config={componentConfig} data={data}/>
	);
}
