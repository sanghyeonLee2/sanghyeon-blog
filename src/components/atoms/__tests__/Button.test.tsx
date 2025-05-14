import { render, screen } from '@testing-library/react';
import Button from '../button/Button';

describe('Button', () => {
  it('텍스트가 제대로 렌더링되는지 확인', () => {
    render(<Button text="확인" />);
    expect(screen.getByText('확인')).toBeInTheDocument();
  });
});
