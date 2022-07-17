import renderer from 'react-test-renderer';
import App from '../app';

describe('App', () => {
  beforeEach(() => {});
  const component = renderer.create(<App />);
  expect(component.toJSON()).toMatchSnapshot();
});
