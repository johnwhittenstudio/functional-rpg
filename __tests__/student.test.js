import { storeState, changeState, jock, cheerleader, nerd } from './../src/js/student';


// const stateControl = storeState(); 
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

// describe('changeState', () => {
//   test('should return default state health of 10', () => {
//     const resultState = stateControl();
//     expect(resultState.health).toEqual(10);
//   });
//   test('should set state health to 10', () => {
//     const addHealth = changeState("health")(10);
//     const newState = stateControl(addHealth);
//     const resultState = stateControl();
//     expect(resultState.health).toEqual(20);
//   });
//   test('should set state brain to 2', () => {
//     const addBrain = changeState("brain")(1);
//     const newState = stateControl(addBrain);
//     const resultState = stateControl();
//     expect(resultState.brain).toEqual(2);
//   });
// });

