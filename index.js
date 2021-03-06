const express = require('express');
const app = express();
const fetch = require('node-fetch')
require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Starting server at ${port}`))
app.use(express.static('public'));

app.get('/weather/:latlon', async (request, response) => {

    const latlon = request.params.latlon.split(',');
    const lat = latlon[0];
    const lon = latlon[1];
    const api_key = process.env.API_KEY;

    const api_url = `https://api.darksky.net/forecast/${api_key}/${lat},${lon}`

    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();

    response.json(json);

});
