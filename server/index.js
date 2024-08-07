const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;



app.use(cors());
app.use(express.json());

app.post('/api', async (req, res) => {
    const { apiKey, latitude, longitude } = req.body;

    try {
        const response = await axios.get('https://api.rasp.yandex.net/v3.0/nearest_settlement/', {
            params: {
                latitude: latitude,
                longitude: longitude,
            },
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
