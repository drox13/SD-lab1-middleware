const { Router } = require('express');
const { postLogs, postRestart } = require('../controllers/monitor');

const router = Router();

router.post('/', postLogs);

router.put('/restart', postRestart);

module.exports = router;