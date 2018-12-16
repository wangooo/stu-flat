const express = require('express')
const router = express.Router()
const flat = require('./mysql.js')

router.get('/findAllFlats', async function (req, res) {
  let result = await flat.findAllFlats()
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findAllRooms', async function (req, res) {
  let result = await flat.findAllRooms()
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findAllStus', async function (req, res) {
  let result = await flat.findAllStus()
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findAllUsers', async function (req, res) {
  let result = await flat.findAllUsers()
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findFlatById', async function (req, res) {
  let result = await flat.findFlatById(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findRoomById', async function (req, res) {
  let result = await flat.findRoomById(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findStuById', async function (req, res) {
  let result = await flat.findStuById(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findStuByStudy', async function (req, res) {
  let result = await flat.findStuByStudy(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/findUserById', async function (req, res) {
  let result = await flat.findUserById(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/addFlat', async function (req, res) {
  let result = await flat.addFlat(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/addRoom', async function (req, res) {
  let result = await flat.addRoom(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/addStu', async function (req, res) {
  let result = await flat.addStu(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/updateFlat', async function (req, res) {
  let result = await flat.updateFlat(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/updateRoom', async function (req, res) {
  let result = await flat.updateRoom(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/updateStu', async function (req, res) {
  let result = await flat.updateStu(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/deleteFlat', async function (req, res) {
  let result = await flat.deleteFlat(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/deleteRoom', async function (req, res) {
  let result = await flat.deleteRoom(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.post('/deleteStu', async function (req, res) {
  let result = await flat.deleteStu(req.body)
  res.json({code: 200, msg: 'ok', result: result})
})
router.get('/showRoomnumCount', async function (req, res) {
  let result = await flat.showRoomnumCount(req.query)
  res.json({code: 200, msg: 'ok', result: result})
})

module.exports = router
