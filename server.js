const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('docs')); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',   
    database: 'testimonial'

});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL Database');
});

// to handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Form Submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    
    res.json({ message: 'Your message has been sent successfully!' });
});

//  to add a new testimonial
app.post('/addTestimonial', (req, res) => {
    const { name, testimonial } = req.body;
    const sql = 'INSERT INTO testimonials (name, testimonial) VALUES (?, ?)';

    db.query(sql, [name, testimonial], (err, result) => {
        if (err) {
            console.error('Error inserting testimonial:', err);
            res.status(500).send({ error: 'Failed to add testimonial' });
            return;
        }
        res.json({ message: 'Testimonial added successfully' });
    });
});

//  to fetch all testimonials
app.get('/testimonials', (req, res) => {
    const sql = 'SELECT * FROM testimonials';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching testimonials:', err);
            res.status(500).send({ error: 'Failed to fetch testimonials' });
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
