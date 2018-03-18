var mongoose = require('mongoose');

require(process.cwd()+'/server/all-models').toContext(global);


User.create([
      { name: 'admin', email: 'ankittiwari084@gmail.com',password: '0d749c7da2a156393e4f95ab2e656f66',role_type:1,status:1}
    ])
    
    .then(() => {
      console.log("Seed complete!")  
      mongoose.connection.close();
    });

//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data
// var Faker = require('faker');


// For Example

// CoolUser.create([
//   { name: 'andy', age: 24 },
//   { name: 'alex', age: 23 },
//   { name: Faker.name.firstName(), age: Faker.random.number() }
// ])

// .then(() => {
//   console.log("Seed complete!")  
//   mongoose.connection.close();
// });

// be sure to close the connection once the queries are done

