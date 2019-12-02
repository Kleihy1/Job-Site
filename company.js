var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://jwanki1:gfdovo456@cluster0-w8rzc.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{ useUnifiedTopology: true }, function(err, client) {
    const collection = client.db("techhire").collection("company");
    console.log("connected");
    // perform actions on the collection object

    var ins = {
        Company:'Google',
        Overview:'Google’s mission is to organize the world‘s information and make it universally accessible and useful. ',
        Website:'',
        Industry:'Internet',
        CompanySize:'10,001 +employees',
        Type:'Public Company',
        Founded:'1998',
        Headquarters:'Mountain View, CA',
        Specialties:'search, ads, moblie, android, online,video,apps,etc'
};

    collection.insertOne(ins,function(err,res){
    console.log("data inserted");
    });

    client.close();
});