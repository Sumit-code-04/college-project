const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 8000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'nutrition_db', 
    port:'3306'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1); 
    }
    console.log('Connected to MySQL database');
});

app.use(express.static('docs'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'nutrition.html'));
});

//  to handle nutrition calculation
app.get('/getNutrition', (req, res) => {
    const foodName = req.query.food.toLowerCase();
    const query = 'SELECT * FROM food_nutrition2 WHERE LOWER(name) = ?';

    db.query(query, [foodName], (error, results) => {
        if (error) {
            console.error('Database query error:', error);
            return res.json({ error: "Database query error" });
        }
        if (results.length > 0) {
            const foodData = results[0];
            res.json({
                name: foodData.name,
                Energy: foodData.Energy,
                Protein: foodData.Protein,
                Fat: foodData.Fat,
                Carbos: foodData.Carbos,
                Minerals: foodData.Minerals,
                Fibre: foodData.Fibre,
                Calcium: foodData.Calcium,
                Phosphorous: foodData.Phosphorous,
                Iron: foodData.Iron
            });
        } else {
            res.json({ error: "Food item not found in the database." });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
