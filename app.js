const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files (like CSS or images)
app.use(express.static('public'));

// Login route
app.post('/login', (req, res) => {
    // Perform login authentication logic here

    // Assuming login is successful, redirect to weather.ejs
    res.redirect('/weather');
});

// Weather route
app.get('/weather', (req, res) => {
    // Render the weather.ejs view
    res.render('weather'); // Assuming you have a weather.ejs file in the views directory
});

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
