import { storeState, changeState, jock, cheerleader, nerd, changeHealth, addBrain, addBeauty, addBraun } from './../src/js/student';

let jockStateControl
let nerdStateControl
let cheerleaderStateControl

beforeEach(() => {
  jockStateControl = storeState(jock);
  nerdStateControl = storeState(nerd);
  cheerleaderStateControl = storeState(cheerleader);
});

describe('storeState', () => {
  test('should create a jock state', () => {
    expect(jockStateControl).toBeDefined();
  });
  test('should show braun at value of 2 in jock', () => {
    const resultState = jockStateControl();
    expect(resultState.braun).toEqual(2);
  });
  test('should create a nerd state', () => {
    expect(nerdStateControl).toBeDefined();
  });
  test('should show brain at value of 2 in nerd', () => {
    const resultState = nerdStateControl();
    expect(resultState.brain).toEqual(2);
  });
  test('should create a cheerleader state', () => {
    expect(cheerleaderStateControl).toBeDefined();
  });
  test('should show beauty at value of 2 in cheerleader', () => {
    const resultState = cheerleaderStateControl();
    expect(resultState.beauty).toEqual(2);
  });
});

describe('changeState', () => {
  test('should be able to use full changeState curry', () => {
    const newState = jockStateControl(changeState("test")(-5));
    const resultState = jockStateControl();
    expect(resultState.test).toEqual(-5);
  });
  test('should drop health from 10 to 5', () => {
    const newState = jockStateControl(changeHealth(-5));
    const resultState = jockStateControl();
    expect(resultState.health).toEqual(5);
  });
  test('should increase brain from 1 to 2', () => {
    const newState = jockStateControl(addBrain);
    const resultState = jockStateControl();
    expect(resultState.brain).toEqual(2);
  });
  test('should increase beauty from 1 to 2', () => {
    const newState = jockStateControl(addBeauty);
    const resultState = jockStateControl();
    expect(resultState.beauty).toEqual(2);
  });
  test('should increase braun from 2 to 3', () => {
    const newState = jockStateControl(addBraun);
    const resultState = jockStateControl();
    expect(resultState.braun).toEqual(3);
  });
});

