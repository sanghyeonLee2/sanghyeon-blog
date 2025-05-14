import { render, screen } from '@testing-library/react';
import EmptyState from '../common/EmptyState';

describe('EmptyState', () => {
  it('기본 메시지를 렌더링한다', () => {
    render(<EmptyState />);
    expect(screen.getByText(/표시할 항목이 없습니다./)).toBeInTheDocument();
  });

  it('전달된 메시지를 렌더링한다', () => {
    const msg = '데이터가 없습니다.';
    render(<EmptyState message={msg} />);
    expect(screen.getByText(msg)).toBeInTheDocument();
  });
});
