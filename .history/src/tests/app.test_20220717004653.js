import renderer from 'react-test-renderer';

describe('App', () => {
  beforeEach(() => {});
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
