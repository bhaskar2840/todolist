# todolist

-  I tried using ejs to create a website using template.
- we created a `view` folder in order to use the ejs commands and created an ejs file `list.ejs` for all our ejs codes.
- we created a `public` folder and stored all static files like `style.css` and then called the express to use static file
- `app.js` is the main working file.

 > we do intialize the npm and then install the packages.

```shell
$ npm init
$ npm i express body-parser ejs
```

> The javascript files must be included:-

```javascript

// jshint esversion:6

const express=require("express");

const app=express();

app.use(express.urlencoded({true}));
app.use(express.static("public")); // this will include the static files.


app.set("view engine","ejs"); // this is to include the ejs folder named view and use the ejs file. 
```
> we will start the server by using command in terminal.
```cmd 
node app.js

```
---
