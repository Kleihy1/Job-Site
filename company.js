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
    
    var ins = {
        Company:'Amazon',
        Overview:'Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. ',
        Website:'http://www.amazon.com',
        Industry:'Internet',
        CompanySize:'10,001 +employees',
        Type:'Public Company',
        Founded:'1994',
        Headquarters:'Seattle, WA',
        Specialties:'e-Commerce, Retail,Operations, and Internet'
    };




    var ins = {
        Company:'Apple',
        Overview:'We’re a diverse collection of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. The people who work here have reinvented entire industries with the Mac, iPhone, iPad, and Apple Watch, as well as with services, including iTunes, the App Store, Apple Music, and Apple Pay. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it.',
        Website:'http://www.apple.com/',
        Industry:'Consumer Electronics',
        CompanySize:'10,001 +employees',
        Type:'Public Company',
        Founded:'1976',
        Headquarters:'Cupertino, CA',
        Specialties:'Innovative Product Development, World-Class Operations, Retail, and Telephone Support'
    };



    var ins = {
        Company:'Microsoft',
        Overview:'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create. Today, we live in a mobile-first, cloud-first world, and the transformation we are driving across our businesses is designed to enable Microsoft and our customers to thrive in this world.  ',
        Website:'https://news.microsoft.com/',
        Industry:'Computer Software',
        CompanySize:'10,001 +employees',
        Type:'Public Company',
        Founded:'1975',
        Headquarters:'Redmond, WA',
        Specialties:'Business Software, Developer Tools, Home & Educational Software, Tablets, Search, Advertising, Servers, Windows Operating System, Windows Applications & Platforms, Smartphones, Cloud Computing,etc'
    };


    var ins = {
        Company:'HP',
        Overview:'Engineering experiences that amaze. We create technology with a purpose: to make life better for everyone, everywhere.  Keep Reinventing. ',
        Website:'http://www.hp.com',
        Industry:'Information Technology & Services',
        CompanySize:'10,001 +employees',
        Type:'Public Company',
        Founded:'1939',
        Headquarters:'Palo Alto, CA',
        Specialties:'search, ads, moblie, android, online,video,apps,etc'
    };



    var ins = {
        Company:'Dell',
        Overview:"Dell is a part of the Dell Technologies family of brands.  Dell Technologies is a unique family of businesses that provides the essential infrastructure for organizations to build their digital future, transform IT and protect their most important asset: information. The company services customers of all sizes across 180 countries – ranging from 98 percent of the Fortune 500 to individual consumers – with the industry's most comprehensive and innovative portfolio from the edge to the core to the cloud.",
        Website:'http://www.dell.com',
        Industry:'Information Technology & Services',
        CompanySize:'10,001 +employees',
        Type:'Privately Held',
        Founded:'1984',
        Headquarters:'Round Rock, Texas',
        Specialties:'computers, storage, servers, IT services, services, software, IT security, end-to-end computing solutions, mobility, cloud computing, and laptops'
    };

    var ins = {
        Company:'Oracle',
        Overview:'Leading the cloud. From intelligent business applications to infrastructure, we deliver tomorrow’s emerging technologies today, like the world’s first - and only - autonomous database. ',
        Website:'http://www.oracle.com',
        Industry:'Information Technology & Services',
        CompanySize:'10,001 +employees',
        Type:'Public Company',
        Founded:'1977',
        Headquarters:'Redwood Shores, CA',
        Specialties:'enterprise, software, applications, database, middleware, fusion, business intelligence, Primavera, PeopleSoft, EPM, BEA, Hyperion, Retek, Utilities, On-Demand, server & storage systems, BPM, solutions for communications industry, ERP, CRM, CRM On Demand, JDE, and Siebel'
    };


    collection.insertOne(ins,function(err,res){
    console.log("data inserted");
    });

    client.close();
});
