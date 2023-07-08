// Определение класса Human
function Human(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
  }
  
  // Методы класса Human
  Human.prototype.sayHello = function() {
    console.log(`Привет, меня зовут ${this.name}`);
  };
  
  // Определение класса Worker, наследующего от Human
  function Worker(name, age, gender, height, weight, workplace, salary) {
    Human.call(this, name, age, gender, height, weight);
    this.workplace = workplace;
    this.salary = salary;
  }
  
  // Наследование прототипа Human для класса Worker
  Worker.prototype = Object.create(Human.prototype);
  Worker.prototype.constructor = Worker;
  
  // Метод "работать" для класса Worker
  Worker.prototype.work = function() {
    console.log(`${this.name} работает на ${this.workplace}`);
  };
  
  // Определение класса Student, наследующего от Human
  function Student(name, age, gender, height, weight, school, scholarship) {
    Human.call(this, name, age, gender, height, weight);
    this.school = school;
    this.scholarship = scholarship;
  }
  
  // Наследование прототипа Human для класса Student
  Student.prototype = Object.create(Human.prototype);
  Student.prototype.constructor = Student;
  
  // Метод "смотреть сериалы" для класса Student
  Student.prototype.watchSeries = function() {
    console.log(`${this.name} смотрит сериалы на протяжении всего дня`);
  };
  
  // Создание экземпляров классов Worker и Student
  const worker1 = new Worker('Иван', 30, 'мужской', 180, 80, 'ООО "Рога и Копыта"', 50000);
  const worker2 = new Worker('Мария', 25, 'женский', 165, 60, 'АО "Цветочная фабрика"', 40000);
  const student1 = new Student('Алексей', 20, 'мужской', 175, 70, 'Университет им. Иванова', 10000);
  const student2 = new Student('Екатерина', 22, 'женский', 160, 55, 'Институт искусств', 8000);
  
  // Вывод информации об экземплярах в консоль
  console.log(worker1);
  console.log(worker2);
  console.log(student1);
  console.log(student2);
  
  // Вызов методов экземпляров
  worker1.sayHello();
  worker1.work();
  
  worker2.sayHello();
  worker2.work();
  
  student1.sayHello();
  student1.watchSeries();
  
  student2.sayHello();
  student2.watchSeries();
  