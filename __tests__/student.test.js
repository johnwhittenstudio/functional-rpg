import { storeState, changeState } from './../src/js/student';


const stateControl = storeState(); 

describe('storeState', () => {
  test('should create a state', () => {
    expect(stateControl).toBeDefined();
  });
});


