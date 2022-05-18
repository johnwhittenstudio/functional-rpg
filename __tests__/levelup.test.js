import { addLevel, canLevelUp } from './../src/js/levelup.js';
import { storeState } from '../src/js/functionfactory.js';
import { jock, nerd, cheerleader } from '../src/js/student.js';
import { addFight } from '../src/js/battle.js';

let jockStateControl
let nerdStateControl
let cheerleaderStateControl

beforeEach(() => {
  jockStateControl = storeState(jock);
  nerdStateControl = storeState(nerd);
  cheerleaderStateControl = storeState(cheerleader);
});

describe("addLevel", () => {
  test("should increase level by 1", () => {
    const newState = jockStateControl(addLevel);
    const currentState = jockStateControl();
    expect(currentState.level).toEqual(1);
  });
});

describe("canLevelUp", () => {
  test("should return true if fight level is 2", () => {
    const fightOneState = jockStateControl(addFight);
    const secondFightState = jockStateControl(addFight);
    const currentState = jockStateControl();
    const result = canLevelUp(currentState);
    expect(result).toBeTruthy();
  });

  test("should return false if fight level isn't 2", () => {
    const currentState = jockStateControl();
    const result = canLevelUp(currentState);
    expect(result).toBeFalsy();
  });
});