import Buttons from '../buttons';
import { render, screen } from '@testing-library/react';

describe('Buttons test', () => {
  beforeEach(() => {
    onLoad = jest.fn();
  });
  it('should dispatch getUniversities', () => {
    //Given
    render(<Button />);
    const button = screen.getByText('LOAD');
    //When

    //Then
  });
});
