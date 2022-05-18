import { changeState } from "./functionfactory";

// check player level and class
// set monster level equal

export const addLevel = changeState("level")(1);
export const canLevelUp = (state) => {
  if (state.fight === 2) {
    return true;
  } else {
    return false;
  } 
};
