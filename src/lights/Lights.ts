import { AmbientLight, DirectionalLight } from "three";



export default class Light {
	ambientLight: AmbientLight
	directionalLight: DirectionalLight
	constructor(color = "white") {
		this.ambientLight = new AmbientLight(color, 1)
		this.directionalLight = new DirectionalLight(color, 1)
		this._Init()
	}

	_Init() {
		console.log("light runningg...");
		this.directionalLight.position.set(5, 9, 10)
	}
}