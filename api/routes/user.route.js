const express = require('express');
const controller = require('../controllers/user.controller');
const router = express.Router();

// GET
router.get('/', controller.getUsers);

// POST

// EDIT

// DELETE

module.exports = router;
