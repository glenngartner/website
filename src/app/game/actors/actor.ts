export class Actor {
  public static id = 1;

  constructor(public name: string = `actor${Actor.id}`,
              public position: Vector3 = {x: 0, y: 0, z: 0},
              public rotation: Vector3 = {x: 0, y: 0, z: 0},
              public scale: Vector3 = {x: 1, y: 1, z: 1}) {
    this.iterateID();
    console.log(`Actor ${this.name} created`);
  };

  iterateID() {
    Actor.id++;
  }
}
