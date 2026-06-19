import express from "express"; 

const {} = envVariables 
const app = express(); 


app.listen(4001, () => {
    console.log(`Your server is running on http://localhost:${4001}`)
})