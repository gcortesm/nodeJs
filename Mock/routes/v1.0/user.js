import  express  from 'express';
import { getUsers, getUsersById } from '../../src/controller/users.js'

const route = express.Router();

route.get('/', async (req, res) => {
  const userList = await getUsers();
  res.status(200).json(userList);
});

route.get('/:userid', async (req, res) => {
  const userIdToFind = req.params.userid;
  const userResult = await getUsersById(userIdToFind);
  res.status(200).json(userResult);
});


export default route;