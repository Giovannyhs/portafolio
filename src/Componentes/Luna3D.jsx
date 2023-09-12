import { useEffect } from "react";
import * as THREE from "three";
import "../Style/Luna3D.css";

const Luna3D = () => {
  const imgPath = "./Imagenes/luna.svg"; // Ruta de la imagen de la luna

  useEffect(() => {
    let scene, camera, renderer, sphere;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(1500, 800);

      const lunaContainer = document.getElementById("luna-container");
      lunaContainer.appendChild(renderer.domElement);

      // Carga la textura de la luna
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(imgPath);

      // Crea la esfera con la textura
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true, // Hacer el material transparente
        opacity: 1, // Establecer la opacidad en 1 (no transparente)
      });
      sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      camera.position.z = 3;

      sphere.position.x = 4; // Deja la esfera en el centro horizontal
      sphere.position.y = 0.4; // Mueve la esfera hacia abajo
    };

    const animate = () => {
      if (sphere) {
        // Verificar si la esfera está inicializada antes de acceder a sus propiedades
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
      }

      requestAnimationFrame(animate);
    };

    // Iniciar la escena y la animación
    init();
    animate();

    return () => {
      // Limpiar recursos cuando el componente se desmonta
      if (renderer) {
        renderer.dispose();
      }
      scene = null;
      camera = null;
      sphere = null;
    };
  }, []);
  return (
    <div id="luna-container">
      <canvas></canvas>
    </div>
  );
};

export default Luna3D;
