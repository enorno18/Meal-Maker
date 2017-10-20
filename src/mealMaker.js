const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizerIn) {
      return appetizerIn = this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainIn) {
      this._mains = mainIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertIn) {
      this._desserts = dessertIn;
    },
  },
  
  get courses () {
    return {
      appetizer: this._courses.appetizers,
      main: this._courses.mains,
      dessert: this._courses.desserts,
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish)
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = menu._courses[courseName];
    const dishesIndex = Math.floor(Math.random()*dishes.length);
    return dish = dishes[dishesIndex];                     },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
  	const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price +dessert.price;
    
    return `Your will have ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total will be $${totalPrice}.`
  },  
};

menu.addDishToCourse('appetizers', 'A', 1);
menu.addDishToCourse('appetizers', 'B', 2);
menu.addDishToCourse('appetizers', 'C', 3);
menu.addDishToCourse('mains', 'D', 4);
menu.addDishToCourse('mains', 'E', 5);
menu.addDishToCourse('mains', 'F', 6);
menu.addDishToCourse('desserts', 'G', 7);
menu.addDishToCourse('desserts', 'H', 8);
menu.addDishToCourse('desserts', 'I', 9);

const meal = menu.generateRandomMeal();
console.log(meal);