import { useState, useEffect } from "react";
import { getPlans, updatePlan, createPlan, deletePlan } from "../services/planService";

const usePlans = () => {

  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlans = async () => {
      try {
        const plans = await getPlans();
        setPlans(plans);
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
      const updatedPlan = await updatePlan(planId, updatedPlanData);
      setPlans((prevPlans) =>
        prevPlans.map((plan) =>
          plan.id === planId ? updatedPlan : plan
        )
      );
    } catch (err) {
      setError(err);
    } 
  }

  const createNewPlan = async () => {
    try {
      const newPlan = await createPlan();
      return newPlan
    } catch (err) {
      setError(err);
    } 
  }

  const removePlan = async (planId) => {
    try {
      await deletePlan(planId);
      const updatedPlans = plans.filter(e => e.id !== planId)
      setPlans(updatedPlans)
    } catch (err) {
      setError(err);
    } 
  }

  return {plans, updatePlanDetails, createNewPlan, removePlan, loading, error}
}

export default usePlans;