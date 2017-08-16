var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var subdivisionOne = {
    title:'Sreapp Subdivision One-Synthesized by Sreyansh Mamidi'
    hyperlinks: `<div>
            <a href="/">Home</a>
            <a href="/subdivision-two">Sreapp Subdivision Two</a>
            <a href="/subdivision-three">Sreapp Subdivison Three</a>
            <hr/>
        </div>`
    content:` <div>
            <h3>Introduction</h3>
            <h4> First Synthesized August 14th, 2017</h4>
            <p>
                Sreapp is an application designed to give the average human the knowledge of laudable paradoxes.
            </p>
        
        </div>
        <div>
            <h1>The Grandfather Paradox</h1>
            <p>
                The Grandfather Paradox is very appealing to my personal sense of curiousity.
            </p>
        </div>`
    style: ` <style>
            .info {
                color:green;
                font-family:courier;
                Background:black;
            }
            
            
        </style>`
};
 function createTemplate (data)  {
     var title= data.title;
     var style= data.style;
     var hyperlinks= data.hyperlinks
     var content= data.content
  
var htmlTemplate = `
<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
           ${style}
        </style>
    </head>
    <body class=info>
        <div>
            ${hyperlinks}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html>
`;
}

return htmlTemplate;

    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/subdivision-one', function (req, res) {
     res.send(createTemplate(subdivisionOne));
});

app.get('/subdivision-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'subdivision-two.html'));
});

app.get('/subdivision-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'subdivision-three.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port=80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
