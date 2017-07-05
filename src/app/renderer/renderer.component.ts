import { Component, OnInit } from '@angular/core';
import {ThreeDProto} from '../game/3d_proto';
import {Actor} from '../game/actors/actor';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})

export class RendererComponent implements OnInit {
  text = `Rendering the 3D view`;
  actors: Actor[];
  constructor() {
    const threeDproto = new ThreeDProto();
    this.actors = threeDproto.scene.actors;

  }

  ngOnInit() {
  }

}
