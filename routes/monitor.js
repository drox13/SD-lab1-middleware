const { Router } = require('express');
const getLogs = require('../controllers/monitor');

const router = Router();

router.get('/', getLogs);

module.exports = router;