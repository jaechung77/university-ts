import Buttons from '../buttons';
import { screen, render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Buttons test', () => {
  let render;

  beforeEach(() => {
    render = (component) =>
      rtlRender(<Provider store={store}>{component}</Provider>);
    render(<Buttons />);
  });

  it('should call LOAD when load button is clicked', () => {
    //Given

    const button = screen.getByText('LOAD');
    //When
    //fireEvent or userEvent
    userEvent.click(button);
    //Then
    expect(button).toString().includes('LOAD');
  });
});
