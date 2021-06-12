class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals ( a, b) {
        return a.width * a.height === b.height * b.width
    }

    static isValidDimensions (width, height) {
        return width === height
    }
}

let square1 = new Square(8)
let square2 = new Square(9)
console.log(Square.equals(square1,square2))
console.log(Square.isValidDimensions(square2.width,square2.height))