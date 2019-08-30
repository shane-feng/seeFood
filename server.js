const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Environment Variable Config
require('dotenv').config();

// Create Express Server
const app = express();
const port = process.env.PORT || 5000;

// Middleware / Set File Size Limit
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// URI Config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// Connect to MongoDB/Database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Static Files When In Production
if (process.env.NODE_ENV === 'production') {
    // Set Static Folder
    app.use('https://seefood2019.herokuapp.com/', express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Use Routes
app.use('/ingredients', require('./routes/ingredients'));

app.listen(port, () => {
    console.log(`Server Running On Port ${port}!`);
});
