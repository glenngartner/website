import {Actor} from './actor';

export class Geometry extends Actor {
  vertices: Vector3[];
  edges: Line[];

  constructor(
    public name: string = `actor${Actor.id}`,
    public position: Vector3 = {x: 0, y: 0, z: 0},
    public rotation: Vector3 = {x: 0, y: 0, z: 0},
    public scale: Vector3 = {x: 1, y: 1, z: 1}
  ) {
    super(name, position, rotation, scale);
  }
}
