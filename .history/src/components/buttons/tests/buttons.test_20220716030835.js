import Buttons from '../buttons';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Buttons test', () => {
  let onLoad;
  beforeEach(() => {
    onLoad = jest.fn();
  });
  it('should call LOAD when load button is clicked', () => {
    //Given
    render(<Buttons />);
    const button = screen.getByText('LOAD');
    //When
    //fireEvent or userEvent
    userEvent.click(button);
    //Then
    expect(onLoad).toBe('LOAD');
  });
});
