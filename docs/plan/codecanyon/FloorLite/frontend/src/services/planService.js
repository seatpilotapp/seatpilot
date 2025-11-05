import api from "./api";
import { handleApiError } from "./errorHandler";

export const getPlans = async () => {
  try {
    const response = await api.get('/plans');
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
}

export const getPlan = async (planId) => {
  try {
    const response = await api.get(`/plans/${planId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
}

export const updatePlan = async (planId, planData) => {
  try {
    const response = await api.put(`/plans/${planId}`, planData);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
};

export const createPlan = async () => {
  try {
    const response = await api.post(`/plans/`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
};

export const deletePlan = async (planId) => {
  try {
    const response = await api.delete(`/plans/${planId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleApiError(error)
    throw new Error(errorMessage);
  }
};