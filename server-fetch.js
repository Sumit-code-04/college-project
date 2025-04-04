const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user12_db",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
});

// Login 
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required!" });
    }

    const query = "SELECT * FROM users1 WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, results) => {
        if (err) return res.status(500).json({ success: false, message: "Database error!" });

        if (results.length > 0) {
            // User found
            const user = results[0];
            res.json({
                success: true,
                profilePicture: user.profile_picture || "default-profile.png", 
                message: "Login successful!",
            });
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password!" });
        }
    });
});

// Start server
app.listen(13000, () => {
    console.log("Server running on http://localhost:13000");
});
