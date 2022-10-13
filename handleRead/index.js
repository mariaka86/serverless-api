const dynamoose = require('dynamoose')



exports.handler = async (event) => {
    
    // TODO implement

    console.log ('----query---', event.queryStringParameters)
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from handleRead'),
    };
    return response;
};
