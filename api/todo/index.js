const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.get);
router.get('/:id', controller.getOneById);
router.post('/', controller.insert);
router.delete('/:id', controller.deleteTaskById)
router.put('/:id', controller.update)

module.exports = router;