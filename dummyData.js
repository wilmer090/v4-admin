var faker = require('faker');


// Use to generate dummy data for testing
export const DUMMY_INFLUENCER = [...Array(10)].map(i => {
  const id = faker.datatype.number(10000000)
  const name = faker.name.findName(); 
  const email = faker.internet.email(); 
  const avatar = faker.image.avatar();
  const followers = faker.datatype.number(999);
  const interactions = faker.datatype.number(999);
  const influence = faker.datatype.number(10)
  const rank = faker.datatype.number(100)

  return {
    id,
    name,
    email,
    avatar,
    followers,
    interactions,
    influence,
    rank
  }
  
})

