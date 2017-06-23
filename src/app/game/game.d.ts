
declare interface Vector2 {
  x: number;
  y: number;
}

declare interface Vector3 extends Vector2 {
  z: number;
}

declare interface Line {
  start: Vector3;
  end: Vector3;
}
