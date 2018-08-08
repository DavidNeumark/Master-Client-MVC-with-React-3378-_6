let expresss=require ('express');
let app=expresss();
app.use(expresss.static("./build"));
app.listen(process.env.PORT);