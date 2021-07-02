import { Router } from 'express';
import { MeetController } from '../controllers/Meet.controller';

const route = Router();

route.get('/:id', MeetController.findOne);
route.get('', MeetController.find);

export default route;
