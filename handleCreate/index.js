const dynamoose = require('dynamoose')


// create schema

const personSchema = new dynamoose.Schema({
  id:String,
  age:Number,
  name:String,

})
// create a model
const personModel =dynamoose.model('people-demo',personSchema)
exports.handler = async (event) => {
console.log ('lalala----',event.body)

let {id,age,name} = event.queryStringParameters

let person ={id, age, name}

console.log ('-------', person)







  // TODO implement
  
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello'),
  };
  return response;
};

