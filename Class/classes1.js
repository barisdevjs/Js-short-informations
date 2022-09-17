class Rectangle {
    constructor(_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
        this.type = typeof this
    }
    
    getArea() {
        return `Area ==> ${this.width * this.height}`
    }

    description() {
      return  `${this.width} -- ${this.height} -- ${this.color} -- ${this.type} `
    }
}

const recOne = new Rectangle(1,2, 'blue')
const recTwo = new Rectangle(2,5, 'red')
console.log(recOne.getArea())
console.log(recOne.description())