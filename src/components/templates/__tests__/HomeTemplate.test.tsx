// components/templates/__tests__/HomeTemplate.test.tsx
import { render, screen } from '@testing-library/react';
import HomeTemplate from '../HomeTemplate';

describe('HomeTemplate', () => {
  it('텍스트가 올바르게 렌더링되어야 함', () => {
    render(<HomeTemplate />);
    expect(screen.getByText(/안녕하세요 폰트 적용 테스트 이상현/i)).toBeInTheDocument();
  });

  it('h1 태그가 존재해야 함', () => {
    const { container } = render(<HomeTemplate />);
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toMatch(/폰트 적용 테스트/i);
  });
});
