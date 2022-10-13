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
    
    // TODO implement

    console.log ('----query---', event.queryStringParameters)
    
    const response={statusCode:null,body:null}
    
    try{
        let personRecords = await personModel.scan().exec()
        response.statusCode=200;
        response.body = JSON.stringify(personRecords);    

    }catch(e){
        console.log(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }
    return response;
};
