import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { workouts: action.payload };
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};
console.log('test');
// by wrapping 'APP' (from index.js) inside of the WorkoutContextProvider, we get access to whatever is wrapped inside (children).
// In this case that's the root 'APP' component
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
