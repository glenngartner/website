import {Scene} from './scene';
import {Box} from './actors/box';
/**
 * Created by glenn on 6/22/2017.
 */

export class ThreeDProto {
  public scene: Scene;
  constructor() {
    this.scene = new Scene();
    const box = new Box('box1');
    this.scene.add(box);
    const box2 = new Box('box2');
    this.scene.add(box2);
    const box3 = new Box();
    this.scene.add(box3);
  }
}

