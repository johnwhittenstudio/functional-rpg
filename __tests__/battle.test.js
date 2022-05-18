import { addFight } from './../src/js/battle.js';
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

describe("battle", () => {
  test("should increase fight by 1", () => {
    const newState = jockStateControl(addFight);
    const currentState = jockStateControl();
    expect(currentState.fight).toEqual(1);

  })

})