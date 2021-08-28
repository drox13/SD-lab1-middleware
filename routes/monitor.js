const { Router } = require('express');
const getLogs = require('../controllers/monitor');

const router = Router();

router.post('/', getLogs);

module.exports = router;