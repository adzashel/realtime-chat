const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();

// Enable CORS for all routes
app.use(cors({ origin: true }));

// express json

app.use(express.json());


// first middleware with authentication route
app.get('/authenticate' , async (req, res) => {
    const { userName } = req.body;
    return res.json({
        userName,
        secret : "sha256..."
    })
})


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});