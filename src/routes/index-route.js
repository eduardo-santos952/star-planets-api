const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send({
        title: "Node StarPlanet's API | Teste AME DIGITAL",
        version: "0.0.1"
    });
});

module.exports = router;