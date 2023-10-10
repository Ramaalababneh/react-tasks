// actions.js
export const addTask = (task) => ({
  type: "ADD_TASK", // Action type for adding a task
  payload: task, // The task data to be added
});

export const removeTask = (taskId) => ({
  type: "REMOVE_TASK", // Action type for removing a task
  payload: taskId, // The ID of the task to be removed
});
