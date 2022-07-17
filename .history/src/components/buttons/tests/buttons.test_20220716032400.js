import Buttons from '../buttons';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';

describe('Buttons test', () => {
  const mockStore = configureStore();
  let onLoad;
  beforeEach(() => {
    onLoad = jest.fn();
  });
  it('should call LOAD when load button is clicked', () => {
    //Given
render(<Provider store={store}>
          <Buttons />)
      </Provider>);
    render(;
    const button = screen.getByText('LOAD');
    //When
    //fireEvent or userEvent
    userEvent.click(button);
    //Then
    expect(onLoad).toBe('LOAD');
  });
});
