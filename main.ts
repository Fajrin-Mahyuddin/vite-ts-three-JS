import { AmbientLight, BoxGeometry, DirectionalLight, PerspectiveCamera, Mesh, MeshPhongMaterial, Scene, WebGLRenderer } from 'three'
import MyCamera from './src/cameras/Camera'
import Light from './src/lights/Lights'
import './style.css'

interface ILight {
  ambientLight: AmbientLight
  directionalLight: DirectionalLight
}

class Main {
  scene: Scene
  canvas: HTMLCanvasElement
  cameraClass: PerspectiveCamera
  renderer: WebGLRenderer
  light: ILight
  boxGeometry: BoxGeometry
  material: MeshPhongMaterial
  box: Mesh
  constructor() {
    this.scene = new Scene()
    // this._scene.background = new Color("red")
    this.canvas = document.querySelector(".webgl") as HTMLCanvasElement
    this.cameraClass = new MyCamera({ canvas: this.canvas })
    this.renderer = new WebGLRenderer({ canvas: this.canvas })
    this.light = new Light("white")
    this._Init()
    this._Update()
  }

  _Init() {
    console.log("your app running...");
    this.boxGeometry = new BoxGeometry(10, 10, 10)
    this.material = new MeshPhongMaterial({ color: "red" })
    this.box = new Mesh(this.boxGeometry, this.material)

    this.scene.add(this.box)
    this.scene.add(this.light.ambientLight, this.light.directionalLight)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.render(this.scene, this.cameraClass.camera)
  }

  _Update() {
    console.log("animate running...");
    requestAnimationFrame((t) => {
      this.cameraClass.controls.update(t)
      this.renderer.render(this.scene, this.cameraClass.camera)
      this._Update()
    })
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new Main()
})
