const express = require('express');
const app = express();
const baseController = require("./controllers/baseController")

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Define routes
app.get('/',baseController.buildHome)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});