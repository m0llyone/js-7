"use strict";

// {
//    let Calc = function() {
//     this.get = function(){
//       this.a = +prompt('Enter the first number');
//       this.b = +prompt('Enter the second number')
//       this.oper = (prompt('Enter the operation(*,/,+,-)'));
//       this.operation();
//     }
//     this.operation = function() {
//       switch(this.oper){
//         case '+':
//           this.result = this.a + this.b
//          break;
//          case '-':
//           this.result = this.a - this.b
//           break;
//           case '*':
//             this.result = this.a * this.b
//             break;
//           case '/':
//             this.result = this.a / this.b
//             break;
//         }
//         this.showCalc();
//     }
//     this.showCalc = function () {
//       alert(this.a + this.oper + this.b + '=' + this.result);
//     }

//   }

//   let calc = new Calc ();
//   calc.get();
// }

// Поликлиника. Возм. методы: запись на прием (ввод ФИО, возраст, время, врач)
// проверка введенной информации, например: ФИО должно состоять из трех слов длинной
// не менее 2 символов и возраст должен быть указан положительным числом, вывод информации
// о конкретном пациенте, вывод всех пациентов,редактирование,удаление.

{

function Patient() {
  this.name;
  this.age;
  this.time;
  this.doctor;
  this.client;

  const createName = () => {
    this.name = prompt("Enter your name");
    let checkAnswear = /^[a-zA-Z]{3,12}$/.test(this.name)
    if (!checkAnswear) {
        alert("Wrong username!")
        return createName()
    }
    return this.name;
  }

    const createAge = () => {
    this.age = prompt("Enter your age")
    let checkAnswear =  /^[0-9]{1,2}$/.test(this.age);
    if(!checkAnswear) {
      alert("Wrong age!")
      return createAge()
    }
    return this.age;
    }

    const createTime = () => {
    this.time = prompt("What time would you like to book?");
    let checkAnswear = /^[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/.test(this.time)
    if (!checkAnswear) {
        alert("This time is not exist!")
        return createTime()
    }
    return this.time
    }

    const createDoctor = () => {
    this.doctor = prompt("Enter the doctor");
    let checkAnswear = /^[a-zA-Z]{3,12}$/.test(this.doctor)
    if (!checkAnswear) {
        alert("This doctor is not found!")
        return createDoctor()
    }
    return this.doctor
    }

    this.createUser = function(){
      createName();
      createAge();
      createTime();
      createDoctor();
    }

  this.addPatient = function() {
  this.client = {
    name: this.name,
    age: this.age,
    time: this.time,
    doctor: this.doctor,
  }
}

  this.editPatient = function() {
    const answear = prompt("Enter what you want to change");
    const edit = prompt("Enter the value you wanna change to");
    if (answear === this.client.name) {Object.defineProperty(this.client,"name",{value: edit})}
    else if (answear === this.client.age){Object.defineProperty(this.client,"age",{value: edit})}
    else if (answear === this.client.time){Object.defineProperty(this.client,"time",{value: edit})}
    else if (answear == this.client.doctor){Object.defineProperty(this.client,"doctor",{value: edit})}
  }

  this.removePatient = function() {
    const answear = prompt("Enter the attribute that you want to remove");
    if (answear === this.client.name) { return delete this.client.name;}
    else if (answear === this.client.age){return delete this.client.age;}
    else if (answear === this.client.time){return delete this.client.time;}
    else if (answear === this.client.doctor){return delete this.client.doctor;}

  }

  this.showContact = function () {
    for(let key in this.client) {
        console.log(`${key}: ${this.client[key]}`)
    }
  }
}

let patient = new Patient();
patient.createUser();
patient.addPatient();
patient.removePatient();
patient.editPatient();
patient.showContact();
}
