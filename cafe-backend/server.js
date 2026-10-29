const express=require('express');
const app=express();
const PORT=process.env.PORT || 5000;

//create a route that sends a response when visiting the homepage
app.get('/',(req,res)=>{
    res.json('Welcome to the Cafe Backend');
});

//SAMPLE API ROUTE
app.get('/api/sample',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'This is a sample API route'});
});
//Handle unkown routes
app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:'Route not found'
    });
});

app .listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});