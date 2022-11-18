import * as tuitsDao from "../../tuits/tuits-dao.js";
import {raw} from "express";

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.webp",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
 "disliked": true,
 "dislikes": 12,
}

const createTuit = async (req, res) => {
 const newTuit = req.body;
 newTuit.likes = 0;
 newTuit.liked = false;
 const createdTuit = {
  ...templateTuit,
  ...newTuit
 }
 const insertedTuit = await tuitsDao.createTuit(createdTuit);
 res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
 const tuits = await tuitsDao.findTuits();
 res.json(tuits);
}

const updateTuit = async (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updates = req.body;
 const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
 res.json(status);
}

const deleteTuit = async (req, res) => {
 const tuitIdToDelete = req.params.tid;
 const status = await tuitsDao.deleteTuit(tuitIdToDelete);
 res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

