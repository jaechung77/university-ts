import Buttons from '../buttons';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Buttons test', () => {
  const initialState = {};
  const mockStore = configureStore();
  let onLoad;
  beforeEach(() => {
    onLoad = jest.fn();
  });
  it('should call LOAD when load button is clicked', () => {
    //Given
    render(
      <Provider store={mockStore(initialState)}>
        <Buttons />)
      </Provider>
    );
    const button = screen.getByText('LOAD');
    //When
    //fireEvent or userEvent
    userEvent.click(button);
    //Then
    expect(onLoad).toBe('LOAD');
  });
});
