const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;
 
const cors = require('cors');
app.use(cors());

app.use(express.static('docs'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'nutrition.html'));
});
// Middleware
app.use(cookieParser());  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('docs')); 
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));


const db1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user1_db' 
});
const db2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user1_db' 
});
const db3 = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'nutrition_db', 
    port:'3306'
});

db3.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1); 
    }
    console.log('Connected to MySQL database');
});

db1.connect(err => {
    if (err) {
        console.error('Error connecting to user_db:', err);
        return;
    }
    console.log('Connected to user_db.');
});

db1.connect(err => {
    if (err) {
        console.error('Error connecting to useer12_db:', err);
        return;
    }
    console.log('Connected to useer12_db.');
});

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'docs/uploads'); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); 
    }
});

const upload = multer({ 
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png/;
        const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = allowedTypes.test(file.mimetype);

        if (extName && mimeType) {
            cb(null, true);
        } else {
            cb(new Error('Only images (jpeg, jpg, png) are allowed'));
        }
    }
});

//  to handle nutrition calculation
app.get('/getNutrition', (req, res) => {
    const foodName = req.query.food.toLowerCase();
    const query = 'SELECT * FROM food_nutrition2 WHERE LOWER(name) = ?';

    db3.query(query, [foodName], (error, results) => {
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


 
// To handle contact form
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Form Submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    
    res.json({ message: 'Your message has been sent successfully!' });
});

// Route to register users (uses db1 for registration)
app.post('/register', upload.single('profile_pic'), (req, res) => {
    const { email, username, age, gender, weight, bmi, bio, password } = req.body;

    const profile_pic = req.file ? `/uploads/${req.file.filename}` : '/uploads/default.png';

    const requiredFields = { email, username, age, gender, password };
    const missingFields = Object.keys(requiredFields).filter(field => !requiredFields[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: 'Some required fields are missing',
            missingFields,
        });
    }

    const weightValue = weight || null;
    const bmiValue = bmi || null;
    const bioValue = bio || null;

    const query = `
        INSERT INTO users (email, username, age, gender, profile_pic, weight, bmi, bio, password)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [email, username, age, gender, profile_pic, weightValue, bmiValue, bioValue, password];

    db1.query(query, values, (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ message: 'Error registering user' });
        }
        console.log('User registered successfully:', username);
        res.status(200).json({ message: 'User registered successfully' });
    });
});

// Route to log in users 
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Both username and password are required');
    }

    const query = 'SELECT * FROM users WHERE username = ?';
    db1.query(query, [username], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Database error');
        }

        if (results.length === 0) {
            console.log('Username not found:', username);
            return res.status(401).send('Invalid username or password');
        }

        const user = results[0];

        if (password === user.password) { 
            res.cookie('userId', user.id, {
                httpOnly: true, 
                secure: false,
                sameSite: 'Lax',   
                maxAge: 24 * 60 * 60 * 1000 // 1-day 
            });

            console.log('Login successful for user:', username);
            return res.status(200).send('Login successful');
        } else {
            console.log('Password mismatch for user:', username);
            return res.status(401).send('Invalid username or password');
        }
    });
});

// Logout route to clear cookie
app.get('/logout', (req, res) => {
    res.clearCookie('userId'); 
    console.log('User logged out');
    res.status(200).send('Logout successful');
});

// Get user profile data 
app.get('/profile', (req, res) => {
    const userId = req.cookies.userId; 

    if (!userId) {
        return res.status(401).send('User not logged in');
    }

    db1.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching user data');
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('User not found');
        }
    });
});

// Get user profile picture 
app.get('/getProfilePic', (req, res) => {
    const userId = req.cookies.userId;

    if (!userId) {
        return res.status(401).send('User not logged in');
    }

    db1.query('SELECT profile_pic FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching profile picture');
        }
        if (results.length > 0) {
            res.json({ profilePicUrl: results[0].profile_pic || '/uploads/default.png' });
        } else {
            res.json({ profilePicUrl: '/uploads/default.png' });
        }
    });
});



// Update user profile 
app.put('/profile', upload.single('profile_pic'), (req, res) => {
    const userId = req.cookies.userId; // Get user ID from cookies
    if (!userId) {
        return res.status(401).json({ message: 'Unauthorized. Please log in again.' });
    }

    const { username, email, age, gender, weight, bmi, bio } = req.body;
    const profilePic = req.file ? `/uploads/${req.file.filename}` : null;

    const query = `
        UPDATE users 
        SET username = ?, email = ?, age = ?, gender = ?, weight = ?, bmi = ?, bio = ?, 
            profile_pic = COALESCE(?, profile_pic) 
        WHERE id = ?
    `;
    const values = [username, email, age, gender, weight, bmi, bio, profilePic, userId];

    db1.query(query, values, (err, result) => {
        if (err) {
            console.error('Error updating user profile:', err);
            return res.status(500).json({ message: 'Error updating profile' });
        }

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Profile updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});



app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
