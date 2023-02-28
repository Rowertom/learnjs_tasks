function getAverageAge(users) {
    let allAge = users.reduce((prev, user) => prev + user.age, 0);
    let average = allAge / users.length;
    return average;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  console.log( getAverageAge(arr) );