const express = require('express');
var multer = require('multer');
var upload = multer({ storage: storage })

const app = express();

const port = 7000;

app.use(express.json());
//for singe file

app.post('/single', upload.single('profile'), (req, res) => {
    try {
        res.send(req.file);
    } catch (err) {
        res.send(400);
    }
});

//for multiple files
app.post('/bulk', upload.array('profiles', 4), (req, res) => {
    try {
        res.send(req.files);
    } catch (error) {
        console.log(error);
        res.send(400);
    }
});

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

app.listen(port, () => {
    console.log("Server is running at " + port);
});