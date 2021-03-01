var listContacts = require('../controllers/listContacts');
var addContact = require('../controllers/addContact');
var readContact = require('../controllers/readContact');
var deleteContact = require('../controllers/deleteContact');
var updateContact = require('../controllers/updateContact');

var express = require('express');
var router = express.Router();

router.get('/',listContacts);
router.post('/',addContact);
router.get('/id=:id',readContact);
router.delete('/id=:id',deleteContact);
router.post('/id=:id',updateContact);

module.exports = router;