const express = require('express');
const router = express.Router();
const controller = require('../controllers/planets-controller');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/name/:name', controller.getByName);
router.post('/', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;