class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  /*constructor(){

  }*/

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this._height * this._width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }

  set length(value) {
    this._height = value;
    this._width = value;
  }
}

const square = new Square(50);
/*rect.height = 100;
rect.width = 200;*/
console.log(square.area);