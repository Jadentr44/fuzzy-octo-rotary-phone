const router = require('express').Router();
const APIroutes = require('./api');

router.use('/api', APIroutes)


module.exports = router;