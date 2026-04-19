function calculationAreaCircle() {
  return this.radius ** 2 * Math.PI;
}

function calculationAreaPerimeter() {
  return 2 * Math.PI * this.radius;
}

const circle1 = {
 radius: 12,
 getArea: calculationAreaCircle,
 getPerimeter: calculationAreaPerimeter
}

const circle2 = {
 radius: 5,
 getArea: calculationAreaCircle,
 getPerimeter: calculationAreaPerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());