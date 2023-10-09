const { Router } = require('express');
const router = Router();

const razasCtrl = require('../controllers/razas.controller');

router.get('/', razasCtrl.getRazas);
router.get('/:id', razasCtrl.getRazaPorId);
router.post('/', razasCtrl.createRaza);

module.exports = router;
