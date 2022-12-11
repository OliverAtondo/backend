import { Router } from 'express';
import {getTaskCount, getTasks, saveTask, deleteTasks, updateTasks} from '../controllers/tasks';

const router = Router();

router.get('/tasks', getTasks);
router.get('/tasks/count', getTaskCount);
router.get('/tasks/:id', getTasks);
router.post('/tasks', saveTask);
router.delete('/tasks/:id', deleteTasks);
router.put('/tasks/:id', updateTasks);

export default router;