import Buttons from '../buttons';
import { screen, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Buttons test', () => {
  let onLoad;
  let render;
  beforeEach(() => {
    render = (component) => {
      <Provider store={store}>{component}</Provider>;
    };
  });
  it('should call LOAD when load button is clicked', () => {
    //Given
    render(<Buttons />);
    const button = screen.getByText('LOAD');
    //fireEvent or userEvent
    userEvent.click(button);
    //Then
    expect(button).toBe('LOAD');
  });
});
