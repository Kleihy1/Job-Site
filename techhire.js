var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://jwanki1:gfdovo456@cluster0-w8rzc.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{ useUnifiedTopology: true }, function(err, client) {
    const collection = client.db("techhire").collection("userprofile");
    console.log("connected");
    // perform actions on the collection object

    var ins = {
    fname:'Singha',
    lname:'Beer',dob:'12/25/1991',
    occupation:'IT guy',
    experience:'Software Engineering',
    education:'IT at UB',
    skills:'HTML, CSS, and JavaScript'
};

    collection.insertOne(ins,function(err,res){
    console.log("data inserted");
    });

    client.close();
});