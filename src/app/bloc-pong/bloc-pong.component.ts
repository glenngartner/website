import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Start} from './ts/core/start';
import {renderers} from './ts/core/renderer_config';

@Component({
  selector: 'app-bloc-pong',
  templateUrl: './bloc-pong.component.html',
  styleUrls: ['./bloc-pong.component.css']
})
export class BlocPongComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const startPong = new Start(renderers);
  }

}
