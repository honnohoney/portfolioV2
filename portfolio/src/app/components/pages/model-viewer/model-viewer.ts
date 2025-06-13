import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTF } from 'three/addons/loaders/GLTFLoader.js';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.html',
  styleUrl: './model-viewer.scss'
})
export class ModelViewerComponent implements AfterViewInit {
  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private model!: THREE.Object3D;
  private frameId!: number;

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();
  }

  private initScene(): void {
    const width = this.canvasRef.nativeElement.clientWidth;
    const height = this.canvasRef.nativeElement.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xeeeeee);

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 1, 5);

    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvasRef.nativeElement, 
      antialias: true 
    });
    this.renderer.setSize(width, height);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    this.scene.add(light);

    const loader = new GLTFLoader();
    loader.load('assets/models/model-1.glb', (gltf: GLTF) => {
      this.model = gltf.scene;
      this.scene.add(this.model);
    }, undefined, (error) => {
      console.error('Error loading model:', error);
    });

    window.addEventListener('resize', () => this.onResize());
  }

  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);
    if (this.model) {
      this.model.rotation.y += 0.01;
    }
    this.renderer.render(this.scene, this.camera);
  };

  private onResize(): void {
    const width = this.canvasRef.nativeElement.clientWidth;
    const height = this.canvasRef.nativeElement.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  ngOnDestroy(): void {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    window.removeEventListener('resize', this.onResize);
  }
}