import * as Three from 'three'
// ConeGeometry,
// EdgesGeometry,
// LineBasicMaterial,
// LineSegments,
// LinearToneMapping,
// OBJLoader,
// OrbitControls,
// PerspectiveCamera,
// Scene,
// WebGLRenderer

import COLORS from './colors'

var camera, scene, renderer
var geometry, material, mesh
var composer

/*var bloomStrength = 2;
var bloomRadius = 5;
var bloomThreshold = 0.4;*/
var bloomStrength = 2
var bloomRadius = 0
var bloomThreshold = 0.1

init()
animate()

function init() {
  camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  camera.position.z = 1000

  scene = new Three.Scene()

  //geometry = new CubeGeometry(200,200,200);
  geometry = new Three.ConeGeometry(200, 400, 8)
  var geo = new Three.EdgesGeometry(geometry)
  var mat = new Three.LineBasicMaterial({ color: 0xff0000, linewidth: 0 })

  mesh = new Three.LineSegments(geo, mat)
  scene.add(mesh)

  renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = Three.LinearToneMapping
  renderer.setClearColor(0x000000, 0.0)

  document.body.appendChild(renderer.domElement)

  renderScene = new Three.RenderPass(scene, camera)

  var effectFXAA = new Three.ShaderPass(FXAAShader)
  effectFXAA.uniforms['resolution'].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  )

  var copyShader = new Three.ShaderPass(CopyShader)
  copyShader.renderToScreen = true

  var bloomPass = new Three.UnrealBloomPass(
    new Vector2(window.innerWidth, window.innerHeight),
    bloomStrength,
    bloomRadius,
    bloomThreshold
  )

  composer = new Three.EffectComposer(renderer)

  composer.setSize(window.innerWidth, window.innerHeight)
  composer.addPass(renderScene)
  composer.addPass(effectFXAA)
  composer.addPass(effectFXAA)

  composer.addPass(bloomPass)
  composer.addPass(copyShader)
}

function animate() {
  // note: js includes requestAnimationFrame shim
  requestAnimationFrame(animate)

  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.02

  //renderer.render(scene, camera);
  composer.render()
}
