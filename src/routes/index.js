const express = require('express');
const router = express();

const v1Api = require('./v1/index'); // here we importing all the routes that we created in that file

router.use('/v1',v1Api); // here this is middleware.

//Mounts the v1Api routes under the /v1 base path.

// Meaning:
// If v1Api has a route /cities,
// It will now be available at /v1/cities.

module.exports = router;