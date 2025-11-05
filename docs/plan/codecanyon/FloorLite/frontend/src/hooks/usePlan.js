import { useState, useEffect } from "react";
import { getPlan, updatePlan } from "../services/planService";

const usePlan = (planId) => {

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlan = async () => {
      try {
        const planData = await getPlan(planId);
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
      const updatedPlan = await updatePlan(planId, updatedPlanData);
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const addItem = async (newItem) => {
    try {
      const updatedPlan = await updatePlan(planId, 
        {
            items: [...plan.items, newItem]
        }
      );
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const updateItem = async (id, props) => {
    try {
      const updatedItems = plan.items.map(e => e.id === id ? {...e, ...props} : e) 
      const updatedPlan = await updatePlan(planId, 
        {
          items: updatedItems
        }
      );
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const removeItem = async (id) => {
    try {
      const updatedItems = plan.items.filter(e => e.id !== id)
      const updatedPlan = await updatePlan(planId, 
        {
          items: updatedItems
        }
      );
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    } 
  }

  const addWalls = async (newWalls) => {
    try {
      const updatedPlan = await updatePlan(planId, 
        {
          walls: [...plan.walls, newWalls]
        }
      );
      setPlan(updatedPlan)
    } catch (err) {
      setError(err);
    }
  }

  const removeWalls = async (id) => {
    try {
      const updatedWalls = plan.walls.filter(e => e.id !== id)
      const updatedPlan = await updatePlan(planId, 
        {
            walls: updatedWalls
        }
      );
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
      const updatedPlan = await updatePlan(planId, 
        {
            walls: updatedWalls
        }
      );
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