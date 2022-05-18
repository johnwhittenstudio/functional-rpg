import { addLevel } from './../src/js/levelup.js';
import { storeState } from '../src/js/functionfactory.js';
import { jock, nerd, cheerleader } from '../src/js/student.js';


let jockStateControl
let nerdStateControl
let cheerleaderStateControl

beforeEach(() => {
  jockStateControl = storeState(jock);
  nerdStateControl = storeState(nerd);
  cheerleaderStateControl = storeState(cheerleader);
});

describe("levelup", () => {
  test("should increase level by 1", () => {
    const newState = jockStateControl(addLevel);
    const currentState = jockStateControl();
    expect(currentState.level).toEqual(1);
  });
});