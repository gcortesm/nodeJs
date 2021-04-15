const express = require('express');
const { router } = require('../routes/index');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`The server is a live ${PORT}`));
