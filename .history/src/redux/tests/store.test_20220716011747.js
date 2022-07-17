import store from '../store';

describe('University redux state tests', () => {
  it('Should initially set universities to an empty object', () => {
    const state = store.getState().getUniversities;
    expect(state).toEqual({});
  });
});
