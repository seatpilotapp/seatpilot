import Plans from '../models/plans.js';
import { nanoid } from 'nanoid';

export const getPlans = async (req, res) => {
  try {
    const plans = await Plans.findAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPlanById = async (req, res) => {
  try {
    const plan = await Plans.findByPk(req.params.id)
    if(!plan) {
      return res.status(404).json({message: "Plan not found"})
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPlan = async (req, res) => {

  const newPlan = {
    id: nanoid(12),
    name: "My floor plan"
  }

  try {
    const plan = await Plans.create(newPlan);
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const updatePlan = async (req, res) => {
  try{
    const plan = await Plans.findByPk(req.params.id)
    if(!plan) {
      return res.status(404).json({message: "Plan not found"})
    }
    await plan.update(req.body)
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const deletePlan = async (req, res) => {
  try{
    const plan = await Plans.findByPk(req.params.id)
    if(!plan) {
      return res.status(404).json({message: "Plan not found"})
    }
    await plan.destroy()
    res.status(204).json("Plan removed")
  } catch (error) {
    res.status(500).json({error: error.message})
  }

}



