const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/docs')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'weight-loss.html'));  
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weight_loss_db',  
    port: '3306'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/submit-plan', (req, res) => {
    const { planType, calorieCount } = req.body;
    const query = "INSERT INTO plans (plan_type, calorie_count) VALUES (?, ?)";
    db.query(query, [planType, calorieCount], (err, result) => {
        if (err) throw err;
        res.send('Plan submitted');
    });
});

app.listen(2000, () => {
    console.log('Server running on http://localhost:2000');
});
