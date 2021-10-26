const express = require ('express');
const router = express.Router();

const controller = require('../controllers/controller')

router.get('/users', controller.read);
// router.post('/users', controller.create);


// router.put('/users/:email', controller.edit);
// router.delete('/users/:email', controller.delete);

module.exports = router;
