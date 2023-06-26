const app=require("./api")
app.listen(app.get("port"),function(){
    console.log("PETINCION RECIBIDA DEL CLIENTE");
})