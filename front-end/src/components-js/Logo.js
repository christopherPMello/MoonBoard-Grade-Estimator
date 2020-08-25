import React, { useEffect } from "react"
import * as THREE from "three"
import moon from "../helpers/moon.jpg"

const Logo = () => {
  useEffect(() => {
    let camera, scene, renderer, mesh

    function init() {
      renderer = new THREE.WebGLRenderer()
      camera = new THREE.PerspectiveCamera(70, 1, 1, 100)
      camera.position.z = 25
      scene = new THREE.Scene()
      renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(renderer.domElement)

      var geometry = new THREE.SphereGeometry(1.5, 15, 15)
      var material = new THREE.MeshPhongMaterial()

      THREE.ImageUtils.crossOrigin = ""
      material.map = THREE.ImageUtils.loadTexture(moon)

      mesh = new THREE.Mesh(geometry, material)
      mesh.rotation.x -= 0.5
      scene.add(mesh)

      var light1 = new THREE.AmbientLight(0xffffff)
      light1.position.set(100, 50, 100)
      scene.add(light1)
    }

    function resize() {
      var width = renderer.domElement.clientWidth
      var height = renderer.domElement.clientHeight
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    function animate() {
      resize()
      mesh.rotation.y -= 0.005
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    init()
    animate()
  }, [])

  return <div />
}

export default Logo
