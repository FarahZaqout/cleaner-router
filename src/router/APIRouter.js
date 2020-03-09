const APIRouter = require('express').Router();
const { v1Router, v2Router } = require('../controllers');

APIRouter.use('/api/v1', v1Router);
APIRouter.use('/api/v2', v2Router);

module.exports = APIRouter;
