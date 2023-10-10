// reducers.js
const initialState = {
  tasks: [], // Initial state with an empty array of tasks
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [...state.tasks, action.payload] }; // Add the new task to the tasks array
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task, index) => index !== action.payload), // Remove the task by its index
      };
    default:
      return state; // Return the current state if the action type is not recognized
  }
};

export default taskReducer;
