import {Geometry} from './geometry';
import {Actor} from './actor';
/**
 * Created by glenn on 6/22/2017.
 */

export class Box extends Geometry {
  constructor(
    public name: string = `actor${Actor.id}`,
    public position: Vector3 = {x: 0, y: 0, z: 0},
    public rotation: Vector3 = {x: 0, y: 0, z: 0},
    public scale: Vector3 = {x: 1, y: 1, z: 1}
  ) {
    super(name, position, rotation, scale);
  }
}
