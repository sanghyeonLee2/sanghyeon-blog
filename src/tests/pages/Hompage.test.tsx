import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // Next.js의 기본 페이지

describe('HomePage', () => {
  it('홈 페이지에 타이틀 텍스트가 렌더링되는지 확인', () => {
    render(<Home />);
    expect(screen.getByText(/Next\.js \+ Tailwind Boilerplate/i)).toBeInTheDocument();
  });

  it('홈 페이지에 버튼이 존재하는지 확인', () => {
    const mockText = '시작하기';
    render(<Home />);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
});
