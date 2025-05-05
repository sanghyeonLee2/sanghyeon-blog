import { render, screen } from '@testing-library/react';
import LocalErrorBoundary from '../LocalErrorBoundary';
import type { JSX } from 'react';

function ErrorThrower(): JSX.Element {
  throw new Error('로컬 테스트 에러');
}

describe('LocalErrorBoundary', () => {
  it('에러 발생 시 fallback UI를 렌더링해야 함', () => {
    render(
      <LocalErrorBoundary>
        <ErrorThrower />
      </LocalErrorBoundary>,
    );

    expect(screen.getByText(/에러가 발생했습니다/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /다시 시도/i })).toBeInTheDocument();
  });
});
