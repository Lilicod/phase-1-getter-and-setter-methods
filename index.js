// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
const newCircle = new Circle(5);

console.log(newCircle.diameter )
console.log(newCircle.circumference )
console.log(newCircle.area )


newCircle.diameter = 8;
console.log(newCircle.radius  )



