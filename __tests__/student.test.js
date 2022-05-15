import { storeState, changeState } from './../src/js/student';


// const stateControl = storeState(); 
let stateControl
let jock
beforeEach(() => {
  jock = {
    health: 10,
    brain:1,
    charm: 1,
    braun: 2
  };
  stateControl = storeState(jock);
});

describe('storeState', () => {
  test('should create a state', () => {
    expect(stateControl).toBeDefined();
  });
});

describe('changeState', () => {
  test('should return default state health of 10', () => {
    const resultState = stateControl();
    expect(resultState.health).toEqual(10);
  });
  test('should set state health to 10', () => {
    const addHealth = changeState("health")(10);
    const newState = stateControl(addHealth);
    const resultState = stateControl();
    expect(resultState.health).toEqual(20);
  });
});

