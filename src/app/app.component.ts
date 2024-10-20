import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Categoria, Database, Frameworks, Job, OperationSystem, ProgLanguages, Project, Redes, Software } from './interfaces/interfaces.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Portafolio-LNAG';
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private container!: HTMLElement;

  //OBJECTS
  redes: Redes[] = [
    { name: 'Instagram', icon: "bi bi-instagram", link: "https://www.instagram.com/lucas.0xc/" },
    { name: 'Linkedin', icon: "bi bi-linkedin", link: "https://www.linkedin.com/in/lnag/" }
  ];

  progLanguagesList: ProgLanguages[] = [
    { name: 'Python', icon: "devicon-python-plain" },
    { name: 'Java', icon: "devicon-java-plain" },
    { name: 'JavaScript', icon: "devicon-javascript-plain" },
    { name: 'TypeScript', icon: "devicon-typescript-plain" },
    { name: 'C#', icon: "devicon-csharp-plain" },
    { name: 'PL/SQL', icon: "devicon-sqldeveloper-plain" }
  ];

  frameworksList: Frameworks[] = [
    { name: 'Angular', icon: "devicon-angularjs-plain" },
    { name: 'Django', icon: "devicon-django-plain" },
    { name: 'Ionic', icon: "devicon-ionic-original" },
    { name: 'NodeJs', icon: "devicon-nodejs-plain" },
    { name: '.Net', icon: "devicon-dotnetcore-plain" },
    { name: 'Spring', icon: "devicon-spring-plain" },
    { name: 'Bootstrap', icon: "devicon-bootstrap-plain" },
    { name: 'Bulma', icon: "devicon-bulma-plain" }
  ];

  softwaresList: Software[] = [
    { name: 'FileZilla', icon: "devicon-filezilla-plain" },
    { name: 'Visual Studio', icon: "devicon-visualstudio-plain" },
    { name: 'VS Code', icon: "devicon-vscode-plain" },
    { name: 'PuTTy', icon: "devicon-putty-plain" },
    { name: 'GitHub Desktop', icon: "devicon-github-original" },
    { name: 'Heroku', icon: "devicon-heroku-original" },
    { name: 'Postman', icon: "devicon-postman-plain" }
  ];

  operationSystemsList: OperationSystem[] = [
    { name: 'Windows', icon: "devicon-windows8-original" },
    { name: 'Ubuntu', icon: "devicon-ubuntu-plain" },
    { name: 'Android', icon: "devicon-android-plain" }
  ];

  databasesList: Database[] = [
    { name: 'Oracle', icon: "devicon-oracle-original" },
    { name: 'MySQL', icon: "devicon-mysql-plain" },
    { name: 'SQLite', icon: "devicon-sqlite-plain" },
    { name: 'SQL Server', icon: "devicon-microsoftsqlserver-plain" },
    { name: 'FireBase', icon: "devicon-firebase-plain" }
  ];

  categorias: Categoria[] = [
    { title: 'Lenguajes de Programación', items: this.progLanguagesList },
    { title: 'Frameworks', items: this.frameworksList },
    { title: 'Bases de datos', items: this.databasesList }
  ];

  jobsList: Job[] = [
    {
      alias: "DMF",
      position: "Analista Programador",
      company: "Demafront",
      dateStart: new Date(2023, 7, 1),
      dateEnd: new Date(),
      description: "Desempeño del cargo Analista Programador en el área de Desarrollo e Implementación"
    },
    {
      alias: "AGSC",
      position: "Analista Programador",
      company: "Asociación de Guías y Scouts Chile",
      dateStart: new Date(2023, 0, 1),
      dateEnd: new Date(2023, 1, 1),
      description: "En la Asociación Guías y Scouts Chile, durante mi práctica profesional como Analista Programador, contribuí al proyecto LadyO, enfocado en la gestión de información de los miembros mediante contenedores, garantizando el uso seguro y confidencialidad de los usuarios. Mi labor se centró en el desarrollo Backend con C#, Framework .NET 6 MVC, el desarrollo FrontEnd con CSHTML, CSS y C#, así como el diseño y estructura de APIs para un proyecto escalable."
    }
  ];

  projectsList: Project[] = [
    {
      name: "Portafolio",
      description: "Portafolio Web enfocado en la presentación de mis habilidades y proyectos realizados. Adopté una temática retro (vaporwave) inspirada en los sistemas operativos de los años 90. La aplicación se desarrolló con Angular y ThreeJS para la animación del modelo 3D, sumando el uso de Blender.",
      status: "Terminado",
      skills: [],
      tech: ["Angular", " TypeScript", " HTML", " CSS", " Bootstrap", " ThreeJS"],
      techIcon: [
        { name: 'Angular', icon: "devicon-angularjs-plain" },
        { name: 'TypeScript', icon: "devicon-typescript-original" },
        { name: 'HTML', icon: "devicon-html5-plain" },
        { name: 'CSS', icon: "devicon-css3-plain" },
        { name: 'BootStrap', icon: "devicon-bootstrap-plain" },
        { name: 'ThreeJS', icon: "devicon-threejs-original" }
      ],
      screenshots: ["../assets/img/portafolio.png"],
      link: ""
    },
    {
      name: "PetCuy",
      description: "'PetCuy' es una aplicación móvil que permite a los usuarios encontrar y adoptar mascotas. Se utilizaron tecnologías como la geolocalización, notificaciones push y una interacción en tiempo real para mejorar la experiencia del usuario. El proyecto se divide en una aplicación móvil desarrollada en Ionic y una API REST desarrollada en Django.",
      status: "Terminado",
      skills: [],
      tech: ["Angular", " Ionic", " TypeScript", " Python", " Django", " SQLite"],
      techIcon: [
        { name: 'Angular', icon: "devicon-angularjs-plain" },
        { name: 'Ionic', icon: "devicon-ionic-original" },
        { name: 'TypeScript', icon: "devicon-typescript-original" },
        { name: 'Python', icon: "devicon-python-plain" },
        { name: 'Django', icon: "devicon-django-plain" },
        { name: 'SQLite', icon: "devicon-sqlite-plain" }
      ],
      screenshots: ["../assets/img/petcuy-1.jpg"],
      link: "https://github.com/Luyinq/PetCuyApp"
    },
    {
      name: "Plankton",
      description: "'Plankton' es una solución web enfocada en la venta de plantas y productos relacionados con la jardinería. La aplicación permite a los usuarios registrarse, buscar productos, agregarlos al carrito de compras y realizar pedidos.",
      status: "Terminado",
      skills: [],
      tech: ["Django", " Python", " JavaScript", " HTML", " CSS", " Bootstrap", " SQLite"],
      techIcon: [
        { name: 'Django', icon: "devicon-django-plain" },
        { name: 'Python', icon: "devicon-python-plain" },
        { name: 'JavaScript', icon: "devicon-javascript-plain" },
        { name: 'HTML', icon: "devicon-html5-plain" },
        { name: 'CSS', icon: "devicon-css3-plain" },
        { name: 'BootStrap', icon: "devicon-bootstrap-plain" },
        { name: 'SQLite', icon: "devicon-sqlite-plain" }
      ],
      screenshots: ["../assets/img/plankton.png"],
      link: 'https://github.com/Luyinq/Plankton'
    },
    {
      name: "TecCuy",
      description: "'TecCuy' es una solución web enfocada al e-commerce tecno, la aplicación permite a los usuarios registrarse, buscar productos, agregarlos al carrito de compras y realizar pedidos. En este proyecto se implementará el uso de tecnologías como C# .Net y AWS.",
      status: "En progreso",
      skills: [],
      tech: [" C#", " .Net", " AWS"],
      techIcon: [
        { name: 'C#', icon: "devicon-csharp-plain" },
        { name: '.Net', icon: "devicon-dotnetcore-plain" },
        { name: 'AWS', icon: "devicon-amazonwebservices-plain-wordmark" }
      ],
      screenshots: [],
      link: ""
    },
  ];

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.showLoader();
      this.initThreeJS();
      this.resizeRendererToDisplaySize();
      this.setupIntersectionObserver();
    }
  }

  showLoader() {
    let loaderPercentage = document.getElementById("loader-percentage");
    let loaderProgress = document.getElementById("loader-progress");
    let loader = document.getElementById("loader");

    let percentage = 0;
    let interval = setInterval(function () {
      percentage += 1;
      loaderPercentage!.textContent = percentage + "%";
      loaderProgress!.style.width = percentage + "%";

      if (percentage >= 100) {
        clearInterval(interval);
      }
    }, 30); // Ajusta la velocidad de la animación según tus necesidades

    window.addEventListener("load", function () {
      clearInterval(interval);
      loaderPercentage!.textContent = "100%";
      loaderProgress!.style.width = "100%";
      setTimeout(function () {
        loader!.style.display = "none";
      }, 500); // Espera medio segundo antes de ocultar el loader
    });
  }


  initThreeJS() {
    this.container = document.getElementById('model-pc') as HTMLElement;
    if (this.container) {
      const scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilitar transparencia
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setClearColor(0x000000, 0); // Establecer el color de fondo como transparente
      this.container.appendChild(this.renderer.domElement);

      // Añadir luz a la escena
      const light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(0, 200, 0);
      scene.add(light);


      // Cargar el modelo GLB
      const loader = new GLTFLoader();
      loader.load('../assets/gbl/computer.glb', (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Ajustar la posición y escala del modelo si es necesario
        model.position.set(0, 0, 0);
        model.scale.set(7, 7, 7);

        // Centrar la cámara en el modelo
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Ajustar la posición de la cámara para que el modelo esté completamente visible
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = this.camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));

        cameraZ *= 3.300; // Ajustar este factor según sea necesario
        this.camera.position.z = cameraZ;

        this.camera.position.y = center.y + size.y / 1.5; // Ajusta este valor según sea necesario

        const minZ = box.min.z;
        const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;

        this.camera.far = cameraToFarEdge * 3;
        this.camera.updateProjectionMatrix();

        this.camera.lookAt(center);

        // Variable para controlar la dirección de la rotación
        let rotationDirection = 0.0006;

        // Variables para animar la escala
        let targetScale = new THREE.Vector3(7, 7, 7);
        let currentScale = new THREE.Vector3(7, 7, 7);

        // Cargar el sonido
        const listener = new THREE.AudioListener();
        this.camera.add(listener);
        const sound = new THREE.Audio(listener);
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load('../assets/sound/w95.wav', (buffer) => {
          sound.setBuffer(buffer);
          sound.setVolume(0.5);
        });

        // Animar la escena
        const animate = () => {
          requestAnimationFrame(animate);

          // Oscilar la rotación del modelo
          model.rotation.y += rotationDirection;
          if (model.rotation.y > 0.4 || model.rotation.y < -0.4) {
            rotationDirection = -rotationDirection; // Cambiar la dirección de la rotación
          }

          // Interpolar la escala del modelo
          currentScale.lerp(targetScale, 0.1);
          model.scale.copy(currentScale);

          this.renderer.render(scene, this.camera);
        };

        animate();

        // Evento de clic para reproducir el sonido y aumentar la escala
        this.container.addEventListener('click', () => {
          sound.play();
          targetScale.set(8, 8, 8); // Aumentar la escala del modelo
          setTimeout(() => {
            targetScale.set(7, 7, 7); // Restaurar la escala del modelo después de 1 segundo
          }, 200);
        });
      }, undefined, (error) => {
        console.error('An error happened', error);
      });

      this.camera.position.z = 5;
    }

  }

  // Escuchar el evento de cambio de tamaño
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.resizeRendererToDisplaySize();
  }

  resizeRendererToDisplaySize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    const needResize = this.renderer.domElement.width !== width || this.renderer.domElement.height !== height;

    if (needResize) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  setupIntersectionObserver() {
    let container = document.getElementById('conocimientos');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && container) {
          const elements = container.querySelectorAll('li');
          elements.forEach((el: HTMLElement) => {
            el.style.animationPlayState = 'running';
          });
          observer.unobserve(container);
        }
      });
    }, { threshold: 0.1 });

    if (container) {
      observer.observe(container);
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}