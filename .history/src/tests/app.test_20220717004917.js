import renderer from 'react-test-renderer';
import App from '../app';
import { screen, render as rtlRender } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    render = (component) =>
      rtlRender(<Provider store={store}>{component}</Provider>);
  });
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
