const AWS = require("aws-sdk");
AWS.config.update({
  region: process.env.region || "us-east-2",
});
const sns = new AWS.SNS();

const publish = async function (msg) {
   var params = {
     Message: JSON.stringify(msg),
     TopicArn: 'arn:aws:sns:us-east-2:348655018330:cyclic-per-region-init-AppLogsTopic-179X4JB0VLI5T',
     MessageAttributes: {
       app_id: {
         DataType: "String",
         StringValue: 'korostelevm-helloworld',
       },
     },
   };
   console.log(params)
   await sns.publish(params).promise();
 };
 
 
  
 
module.exports.all = async (req,res) => {
    var a = 'sadf'
    var r = await publish(req.headers);

    res.json({
       r,
       'asdfasdf':'asdfasdfasdfsdfasdfasfs',
       'asdfasdfasdfasdf':'---aaaaaa-------'
    } 
  )}

