// components/ui/__tests__/FallbackUI.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorFallback from '../../templates/GlobalErrorFallback';

describe('FallbackUI', () => {
  it('에러 메시지와 다시 시도 버튼이 렌더링되어야 함', () => {
    const mockError = new Error('테스트 에러');
    const onRetry = jest.fn();

    render(<ErrorFallback error={mockError} />);

    expect(screen.getByText(/테스트 에러/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /다시 시도/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(onRetry).toHaveBeenCalled();
  });
});
