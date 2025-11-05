import express from 'express';
const router = express.Router()

import { getPlans,getPlanById, updatePlan, createPlan, deletePlan } from '../controllers/plansController.js';

router.get('/', (req, res) => {
  res.status(500).json({ message: 'API routes'});
})

router.get('/plans', getPlans)
router.get('/plans/:id', getPlanById)
router.post('/plans', createPlan)
router.put('/plans/:id', updatePlan)
router.delete('/plans/:id', deletePlan)


export default router