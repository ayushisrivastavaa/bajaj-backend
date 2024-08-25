const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (item === item.toLowerCase()) {
          if (
            !highest_lowercase_alphabet ||
            item > highest_lowercase_alphabet
          ) {
            highest_lowercase_alphabet = item;
          }
        }
      }
    }

    res.status(200).json({
      is_success: true,
      user_id: "ayushi_srivastava_17052003", // Example user_id format
      email: "ayushi.srivastava_2021@vitbhopal.ac.in",
      roll_number: "21BCE11353",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
    });
  } catch (error) {
    console.error("Error processing request:", error); // Log the error for debugging
    res.status(500).json({
      is_success: false,
      message: "An error occurred while processing your request.",
    });
  }
});

  const port = process.env.PORT || 3005; // Change 3000 to another port, e.g., 3001
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });