// components/providers/__tests__/GlobalErrorBoundary.test.tsx
import { render, screen } from '@testing-library/react';
import GlobalErrorBoundary from '../GlobalErrorBoundary';

const ErrorThrower = () => {
  throw new Error('테스트 에러');
  // eslint-disable-next-line no-unreachable
  return <div />;
};

describe('GlobalErrorBoundary', () => {
  it('에러 발생 시 fallback UI를 렌더링해야 함', () => {
    render(
      <GlobalErrorBoundary>
        <ErrorThrower />
      </GlobalErrorBoundary>,
    );

    expect(screen.getByText(/에러가 발생했습니다/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /다시 시도/i })).toBeInTheDocument();
  });
});
