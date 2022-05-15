// This function stores our state.

export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state ) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// changeState functions

export const changeHealth = changeState("health");

//Classes

export const jock = {health: 10, brain: 1, beauty: 1, braun: 2};
export const cheerleader = {health: 10, brain: 1, beauty: 2, braun: 1};
export const nerd = {health:10, brain: 2, beauty: 1, braun: 1};