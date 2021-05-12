const express = require('express');
const app = express();
app.get('/',function(req,res){res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');})
app.listen(process.env.port || 3001);
console.log('Done');
