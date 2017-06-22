import { Component, OnInit } from '@angular/core';
import {Scene} from '../game/scene';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {
  text = `Rendering the 3D view`;
  constructor() {
    const scene = new Scene();
    this.text = scene.launchText;
  }

  ngOnInit() {
  }

}
