import {Actor} from './actors/actor';
import {Geometry} from './actors/geometry';

export class Scene {
  public static id = 1;
  public actors: Actor[] = [];
  public geometry: Geometry[] = [];

  constructor() {
    console.log(`Scene number ${Scene.id} created`);
    Scene.id ++;
  }

  add(actor: Actor) {
    this.actors.push(actor);
    if (actor instanceof Geometry) {
      this.geometry.push(actor);
    }
  }
}
