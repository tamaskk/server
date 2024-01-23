const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/register', async (req, res) => {
  const { email, password, username } = req.body;
  const url = "https://your-firebase-project-id.firebaseio.com/users.json";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed, e.g., authentication headers
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const result = await response.json();
    console.log('User uploaded successfully:', result);
    res.json(result); // Respond to the client with the result
  } catch (error) {
    console.error('Error uploading user:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error status
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

