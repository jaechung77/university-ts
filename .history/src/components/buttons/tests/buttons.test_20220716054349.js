import Buttons from '../buttons';
import { screen, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Buttons test', () => {
  let onLoad;
  const render = (component) =>
    rtlRender(<Provider store={store}>{component}</Provider>);

  it('should call LOAD when load button is clicked', () => {
    //Given
    const result = render(<Buttons />);
    console.log('>>>>>>>>>>>' + result);
    const button = screen.findByText('LOAD');
    //fireEvent or userEvent
    userEvent.click(button);
    //Then
    expect(button).toBe('LOAD');
  });
});
