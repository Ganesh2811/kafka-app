const { kafka } = require("./client");

async function init(){
    const admin = kafka.admin();
    console.log(admin,"admin")
    admin.connect();
    console.log("connection...")
    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,
        }]
    })
    console.log("disconnect admin")
    await admin.disconnect();
}

init()