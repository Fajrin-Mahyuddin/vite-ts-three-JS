import { PerspectiveCamera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class MyCamera {
	_canvas: HTMLCanvasElement
	camera: PerspectiveCamera
	controls: OrbitControls
	constructor(params: any) {
		// this._renderer = params._renderer
		this._canvas = params.canvas
		this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight)
		this.controls = new OrbitControls(this.camera, this._canvas)
		this._Update()
	}
	_Update(z = 25) {
		// this._renderer()
		console.log("update position of camera---");
		this.controls.enableDamping = true
		this.camera.position.z = z
	}
}