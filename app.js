const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let cars = [
    {
        "id": 1,
        "name": "Opel Zafira",
        "regNum": "00XX000",
        "type": "Թեթև մարդատար",
        "model": "Sedan",
        "color": "Շամպայն մետալիկ (բեժ)",
        "year": 1999,
        "vin": "7843298347928374982374",
        "image": "/cars/opel.svg"
      },
      {
        "id": 2,
        "name": "Toyota Corolla",
        "regNum": "01AA111",
        "type": "Թեթև մարդատար",
        "model": "Hatchback",
        "color": "Շամպայն մետալիկ (բեժ)",
        "year": 2015,
        "vin": "1234567890123456789012",
        "image": "/cars/opel.svg"
      }
]

app.get('/api/cars', (req, res) => {
    res.json(cars);
})

app.listen(PORT, () => {
    console.log(`Server wa running on ${PORT}`);
})