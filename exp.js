//const http = require('http');
const exp = require('express');
const app = exp();
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(exp.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view pages','404 error.html'))
})


app.use(bodyParser.urlencoded())


// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);