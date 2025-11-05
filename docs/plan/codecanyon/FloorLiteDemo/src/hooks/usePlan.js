import { useState, useEffect } from "react";

const usePlan = (planId) => {

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlan = async () => {
      try {
        const plans = JSON.parse(localStorage.getItem("fl-plans")) || []
        const planData = plans.find(e => e.id === planId);
        setPlan(planData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, []);

  const updatePlanDetails = async (updatedPlanData) => {
    try {
      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlans = plans.map((plan) =>
        plan.id === planId ? {...plan, ...updatedPlanData, updatedAt: Date.now()} : plan
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan({...plan, ...updatedPlanData, updatedAt: Date.now()})
    } catch (err) {
      setError(err);
    } 
  }

  const addItem = async (newItem) => {
    try {

      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlan = {...plan, items: [...plan.items, newItem]}
      const updatedPlans = plans.map((plan) =>
        plan.id === planId ? {...updatedPlan, updatedAt: Date.now()} : plan
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const updateItem = async (id, props) => {
    try {
      const updatedItems = plan.items.map(e => e.id === id ? {...e, ...props} : e) 
      const updatedPlan = {...plan, items: updatedItems}
      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlans = plans.map((e) =>
        e.id === planId ? {...updatedPlan, updatedAt: Date.now()} : e
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const removeItem = async (id) => {
    try {
      const updatedItems = plan.items.filter(e => e.id !== id)
      const updatedPlan = {...plan, items: updatedItems}
      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlans = plans.map((e) =>
        e.id === planId ? {...updatedPlan, updatedAt: Date.now()} : e
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const addWalls = async (newWalls) => {
    try {
      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlan = {...plan, walls: [...plan.walls, newWalls]}
      const updatedPlans = plans.map((plan) =>
        plan.id === planId ? {...updatedPlan, updatedAt: Date.now()} : plan
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan(updatedPlan)

    } catch (err) {
      setError(err);
    }
  }

  const removeWalls = async (id) => {
    try {
      const updatedWalls = plan.walls.filter(e => e.id !== id)
      const updatedPlan = {...plan, walls: updatedWalls}
      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlans = plans.map((e) =>
        e.id === planId ? {...updatedPlan, updatedAt: Date.now()} : e
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan(updatedPlan)

    } catch (err) {
      setError(err);
    } 
  }

  const updateWalls = async (id, data) => {

    try {
      const updatedWalls = plan.walls.map(wallObject => {
        if(wallObject.id === id) {
          return {...wallObject, walls: data}
        } else {
          return wallObject
        }
      }) 
      const updatedPlan = {...plan, walls: updatedWalls}
      const plans = JSON.parse(localStorage.getItem("fl-plans"))
      const updatedPlans = plans.map((e) =>
        e.id === planId ? {...updatedPlan, updatedAt: Date.now()} : e
      )
      localStorage.setItem("fl-plans", JSON.stringify(updatedPlans))
      setPlan(updatedPlan)

    } catch (err) {
      setError(err);
    } 
  }


  return {
    plan,
    updatePlanDetails, 
    addItem,
    updateItem,
    removeItem, 
    addWalls, 
    updateWalls,
    removeWalls, 
    loading, 
    error
  }
}

export default usePlan;