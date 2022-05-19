import { changeState } from './functionfactory.js';

// changeState functions --> move to funcitonfactory?

export const changeHealth = changeState("health");
//export const refillHealth = changeState("health")(10 - state.health);
export const addBrain = changeState("brain")(1);
export const addBeauty = changeState("beauty")(1);
export const addBraun = changeState("braun")(1);

// Classes

export const jock = {health: 10, brain: 1, beauty: 1, braun: 2, fight: 0, level: 0};
export const cheerleader = {health: 10, brain: 1, beauty: 2, braun: 1, fight: 0, level: 0};
export const nerd = { health: 10, brain: 2, beauty: 1, braun: 1, fight: 0, level: 0 };

// Health Refill

export const refillHealth = (state, stateFunction = stateFunction => stateFunction) => {
  return stateFunction(changeHealth(10 - state.health));
};

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     });
//   };
// };