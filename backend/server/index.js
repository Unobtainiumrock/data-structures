const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
