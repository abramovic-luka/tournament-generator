//Install body-parser and Express
const express = require('express')
const app = express()
var crypto = require('crypto');
var len = 128;
var iterations = 13000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var bodyParser = require('body-parser')
var cors = require('cors')

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//User req.query to read values!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.get('/', (req, res) => res.json('Hello World'))

app.listen(3030, () => console.log('Example app listening on port 3030!'))

function createSalt(){
    return crypto.randomBytes(16).toString('hex');
}

function hashPass(password, salt){
    password = salt + password + salt;
    password = crypto.createHash('sha256').update(password).digest('base64');
    return password;
}

app.get('/login', (req, res) => {
    console.log("Login request...");
    let username = req.query.username;
    let password = req.query.password;

    // uoe = username or email
    let uoe = username.match(mailformat) !== null ? "email" : "username";

    console.log(`${username} + ${password}`)

    if((username || password) !== ""){
        MongoClient.connect(url, function(err, db){
            var dbo = db.db("tgenerator");

            var getSalt = uoe == "email" ? {email: username} : {username: username};
            var salt = "";
            
            console.log(getSalt);

            dbo.collection("users").find(getSalt).toArray(function(err, result){
                console.log("Milestone 1");
                if(result.length == 1){
                    console.log("User found");
                    salt = result[0]["salt"];
                    password = hashPass(password, salt);
                    console.log(password);
                    
                    // Password Verification
                    if(result[0]['password'] == password){
                        console.log("Login success");
                        res.json({loginStatus: "complete"});
                    }else{
                        console.log("FAIL password");

                        res.json({loginStatus: "fail", code:"invalidPass"})
                    }
                }else{
                    console.log("FAIL username");

                    res.json({loginStatus: "fail", code:"invalidUsername"})
                }    
            });
        });
    }else{
        console.log("FAIL inputs");
        res.json({loginStatus: "fail", code:"invalidInputs"});
    }
});

app.get('/register', (req, res) => {
    console.log(`${req.query.username} - ${req.query.username} - ${req.query.email}`)
    let password = req.query.password;
    let salt = createSalt();

    console.log(req.query.username);

    if((req.query.username || req.query.password || req.query.email) == ""){
        res.json({registerStatus:"fail", code: 'invalidInputs'});
    } else{
        MongoClient.connect(url, function(err, db) {
            if(err) throw err;
            var dbo = db.db("tgenerator");
            var myobj = {username: req.query.username, password: hashPass(password, salt), email: req.query.email, salt: salt};
            
            var emailObj = {email: req.query.email};
            dbo.collection("users").count({emailObj}, function(err, emailRes) {
                if (err) throw err;
                console.log(emailRes);
                if(emailRes == 0){
                    dbo.collection("users").count({username: req.query.username}, function(err, usernameRes){
                        if(usernameRes == 0){
                            dbo.collection("users").insertOne(myobj, function(err, confirmRes){
                                if (err) throw err;
                                console.log("1 document inserted");
                                db.close();
                            });
                            res.json({registerStatus:"complete"});
                        } else{
                            res.json({registerStatus: "fail", code: "usernameTaken"});
                        }
                    });
                    
                } else{
                    res.json({registerStatus: 'fail', code: 'emailTaken'});
                }
            });
        });
    }
});