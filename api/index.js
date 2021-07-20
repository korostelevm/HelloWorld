// const AWS = require("aws-sdk");
// AWS.config.update({
//   region: process.env.region || "us-east-2",
// });

// const publish = async function (msg) {
//    var params = {
//      Message: JSON.stringify(msg),
//      TopicArn: 'arn:aws:sns:us-east-2:348655018330:cyclic-per-region-init-AppLogsTopic-179X4JB0VLI5T',
//      MessageAttributes: {
//        app_id: {
//          DataType: "String",
//          StringValue: 'korostelevm-helloworld',
//        },
//      },
//    };
//    console.log(params)
//    await sns.publish(params).promise();
//  };
 
  

module.exports.all = (req,res) => {
    var a = 'yasdfoddddd'
   //  await publish({ts:Date.now(), line:'sadfasfd'});

    res.json({
       ... a,
       'asdfasdf':'asdfasdfasdfsdfasdfasfs',
       'asdfasdfasdfasdf':'---aaaaaa-------'
    } 
  )}

