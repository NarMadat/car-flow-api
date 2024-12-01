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
        "image": "/cars/opel.svg",
        "isWanted": false
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
        "image": "/cars/opel.svg",
        "isWanted": true
      }
]

const users = [
  {
      id: 1,
      name: "Արամ",
      surname: "Հովհաննիսյան",
      birthYear: 1992,
      pass: "1234567890"
  },
  {
      id: 2,
      name: "Անահիտ",
      surname: "Մարտիրոսյան",
      birthYear: 1992,
      pass: "0987654321"
  }
];

app.get('/api/v1/vehicles', (req, res) => {
    res.json(cars);
})


app.get('/api/v1/vehicles/:id/eligibility', (req, res) => {
  const vehicleId = parseInt(req.params.id, 10);
  const vehicle = cars.find(car => car.id === vehicleId);

  if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
  }

  if (vehicle.isWanted) {
      return res.status(400).json({
          eligible: false,
          message: `Vehicle "${vehicle.name}" with registration number "${vehicle.regNum}" is in the wanted list and cannot be transferred.`
      });
  }

  res.json({
      eligible: true,
      message: `Vehicle "${vehicle.name}" is eligible for ownership transfer.`
  });
});


app.get('/api/v1/users/:pass', (req, res) => {
  const userPass = req.params.pass;
  const user = users.find(u => u.pass === userPass);

  if (user) {
      res.json({
          name: user.name,
          surname: user.surname,
          birthYear: user.birthYear
      });
  } else {
      res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => {
    console.log(`Server wa running on ${PORT}`);
})