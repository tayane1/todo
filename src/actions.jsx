export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(), // Utilisation d'un timestamp pour l'ID, pour garantir l'unicité
    description,
    isDone: false
  }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id
  }
});