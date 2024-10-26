const express = require('express');
const app = express(); // Correct: Call express()

const generateStackViewData = () => {
    return {
        id: new Date().getTime(),
        title: `Title ${Math.floor(Math.random() * 100)}`,
        subtitle: `Subtitle ${Math.floor(Math.random() * 100)}`,
        amount: (Math.random() * 1000).toFixed(2),
        duration: `${Math.floor(Math.random() * 24)} hours`,
        isRecommended: Math.random() < 0.5,
        isExpanded: Math.random() < 0.5,
    };
};

app.get("/", (req, res) => {
    const stackViewData = generateStackViewData(); // Generate new data on each request
    res.json({ data: stackViewData });
});

app.listen(3000, () => {
    console.log("Server is up and running on http://localhost:3000");
});
