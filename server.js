require('dotenv').config; 
		
const port = process.env.PORT || 3000; 
const express = require('express');
		
// ROUTES
		
const app = new express();
		
// Connect Database
		
app.use(express.static('public'));
		
// MIDDLEWARE 
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
		
// VIEWS 
app.set('view engine', 'pug'); 
app.set('views', './views');
		
app.get('/', async (req, res) => {
    res.render('index', {
        name: 'Ductn'
    });
});
		
app.listen(port, () => {
    console.log('Server running on port ' + port)
});
