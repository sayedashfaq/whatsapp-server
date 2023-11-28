import express from "express";
import { addUser, getUser } from "../controller/userController.js";
import { getConversation, newConversation } from "../controller/conversation-controller.js";
import { newMessage, getMessages } from "../controller/message-controller.js";
import { getImage, uploadImage } from "../controller/image-controller.js";
import upload from '../utils/upload.js'
const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);
route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);
route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);


export default route;




//S3 bucket
