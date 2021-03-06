var faker = require('faker');


// Use to generate dummy data for testing
export const DUMMY_INFLUENCER = [...Array(50)].map(i => {
  const id = faker.datatype.number(10000000)
  const name = faker.name.findName(); 
  const email = faker.internet.userName(); 
  const avatar = faker.image.avatar();
  const followers = faker.datatype.number(999);
  const interactions = faker.datatype.number(999);
  const influence = faker.datatype.number(10)
  const rank = faker.datatype.number(100)
  const prevRank = faker.datatype.number(100)
  const progress= faker.datatype.number(10)
  const lineChartData = [...Array(10)].map(i => faker.datatype.number(10))

  return {
    id,
    name,
    email,
    avatar,
    followers,
    interactions,
    influence,
    rank,
    prevRank,
    progress,
    lineChartData
  }
  
})

