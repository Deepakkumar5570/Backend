const { faker } = require('@faker-js/faker');


let  getRandomUserv=() => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
   
      password: faker.internet.password(),
    
    };
  }

  console.log(getRandomUserv());