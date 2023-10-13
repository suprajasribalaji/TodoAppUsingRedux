// reducers.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
    console.log(action.payload);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload.task,
            description: action.payload.description,
          },
        ],
      };

    case EDIT_TASK:
      const { index, task, description } = action.payload;
      const updatedTasks = [...state.tasks];
      updatedTasks[index] = { task, description };
      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      const indexToDelete = action.payload.index;
      const remainingTasks = state.tasks.filter((_, idx) => idx !== indexToDelete);
      return {
        ...state,
        tasks: remainingTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;
