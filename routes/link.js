const express = require('express')
const { getMany, getBySlug, createLink } = require('../controllers/link')

const router = express.Router()

// Create link
router.post('/', createLink)


// Get all links
router.get('/', getMany)

// Get one link by slug
router.get('/:slug', getBySlug)

module.exports = router 