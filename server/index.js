var Nedb = require('nedb');
var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var cors = require('cors');


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

var forms = new Nedb({ filename: 'path/form/data.db', autoload: true });
var formData = new Nedb({ filename: 'path/form/formData.db', autoload: true });



app.get('/getForm', getForm);
app.post('/setForm', setForm);
app.get('/init', init);
http.createServer(app).listen(9603);

function init(req, res) {
    forms.insert(
        {
            formName: 'Test Form',
            formDesc: 'this is a test form, only to test',
            data: [
                {
                    fieldname: "AccountHeadName",
                    fieldplaceholder: "Account Head Name",
                    fieldlabel: "Account Head Name",
                    fieldrules: [
                        { required: true, message: "This field is required" }
                    ],
                    fieldtype: "text"
                },{
                    fieldname: "AccountType",
                    fieldplaceholder: "Account Type",
                    fieldlabel: "Account Type",
                    fieldrules: [],
                    fieldtype: "select",
                    options: ["Assets", "Liabilities"]
                }
            ]
        }, function (err) { });
    res.send(JSON.stringify({msg: 'ok'}));
}

function getForm(req, res) {
    forms.find({  }, function (err, docs) {
        console.log(docs);
        res.send(JSON.stringify(docs));
    });
}

function setForm(req, res) {
    console.log(req.body);
    formData.insert(req.body, function (err) {
        if (!err) {
            console.log('data inserted');
            res.send(JSON.stringify({msg: 'ok'}));
        } else {
            console.log('error ', err);
            res.send(JSON.stringify({msg: 'error'}));
        }
    });
}