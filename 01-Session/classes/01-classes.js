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

    // Setters
    set width(value) {
        this._width = value;
    }

    set height(value) {
        this._height = value;
    }

    // Method
    calcArea() {
      return this._height * this._width;
    }
  }

const rect = new Rectangle(100,50);
/*rect.height = 100;
rect.width = 200;*/
console.log(rect.area);