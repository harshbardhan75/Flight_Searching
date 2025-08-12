const express = require('express');
const router = express();

const v1Api = require('./v1/index');

router.use('/v1',v1Api);

module.exports = router;