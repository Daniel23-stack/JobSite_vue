// const fruits = ['max', 'salade', 'banana']
// const vegitables = ['potato', 'onions', 'rice']
//
// console.log([...fruits, vegitables])


//methods and objects
// const  developer = {
//   salary: 10000,
//   experience : 4.5,
//   techStack: ["vue","java","ruby"],
//   lookingForWork:true,
//   doubleSalary(){
//     this.salary = this.salary * 2;
//     this.lookingForWork = false;
//   }
// }
//
// developer.doubleSalary();
//
// console.log(developer.salary);
// console.log(developer.lookingForWork);


//map method in Javascript
// const number = [1,2,3,4,5,6,7,8];
//
// const  square = number.map((number) =>{
//   return number * number
// });
//
// console.log(square);

// const favfood = 'sushi';
//
// const  goodfood = {
//   favfood : true
// }
const interval = setInterval(()=>{
  console.log("Done 2 second after the programe statrs");
}, 2000);

setTimeout(()=>{
  clearInterval(interval);
},10000);
