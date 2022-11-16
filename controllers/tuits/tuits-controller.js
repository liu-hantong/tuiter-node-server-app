import posts from "./tuits.js";
let tuits = posts;

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

const createTuit = (req, res) => {
 const newTuit = req.body;
 newTuit._id = (new Date()).getTime() + '';
 newTuit.likes = 0;
 newTuit.liked = false;
 const createdTuit = {
  ...templateTuit,
  ...newTuit
 }
 tuits.push(createdTuit);
 res.json(createdTuit);
}

const findTuits  = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
 const tuitdIdToUpdate = req.params.tid;
 const updates = req.body;
 const tuitIndex = tuits.findIndex(
     (t) => t._id.toString() === tuitdIdToUpdate);
 tuits[tuitIndex] =
     {...tuits[tuitIndex], ...updates};
 res.json(tuits[tuitIndex]);
}

const deleteTuit = (req, res) => {
 const tuitIdToDelete = req.params.tid;
 tuits = tuits.filter((t) => t._id.toString() != tuitIdToDelete);
 res.sendStatus(200);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

