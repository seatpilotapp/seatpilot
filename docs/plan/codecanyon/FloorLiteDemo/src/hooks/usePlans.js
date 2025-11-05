import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { initialPlans } from "./initialPlans";

const usePlans = () => {

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlans = async () => {
      try {
        const storagePlans = JSON.parse(localStorage.getItem("fl-plans"))
        if(storagePlans === null) { 
          localStorage.setItem("fl-plans", JSON.stringify(initialPlans)) 
          setPlans(initialPlans) 
          return
        }
        setPlans(storagePlans)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const updatePlanDetails = async (planId, updatedPlanData) => {
    try {
      const updatedPlans = plans.map((plan) =>
            plan.id === planId ? {...plan, ...updatedPlanData, updatedAt: Date.now()} : plan
        )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlans(updatedPlans)
    } catch (err) {
      setError(err);
    } 
  }

  const createNewPlan = async () => {
    try {
      const newPlan = {
        id: nanoid(12),
        name: "My floor plan",
        favorite: false,
        trash: false,
        walls: [],
        items: [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      localStorage.setItem("fl-plans", JSON.stringify([...plans, newPlan]))
      return newPlan
    } catch (err) {
      setError(err);
    } 
  }

  const removePlan = async (planId) => {
    try {
      const updatedPlans = plans.filter(e => e.id !== planId)
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlans(updatedPlans)
    } catch (err) {
      setError(err);
    } 
  }

  return {plans, updatePlanDetails, createNewPlan, removePlan, loading, error}
}

export default usePlans;