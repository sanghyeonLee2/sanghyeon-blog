import { render, screen } from '@testing-library/react';
import RootClientLayout from '../RootClientLayout';

// mocking zustand store
jest.mock('@/stores/useErrorStore', () => ({
  useErrorStore: () => ({ error: null }),
}));

jest.mock('@/stores/themeStore', () => ({
  useThemeStore: () => ({ theme: 'light' }),
}));

jest.mock('@/hooks/useInitTheme', () => ({
  useInitTheme: () => {},
}));

describe('RootClientLayout', () => {
  it('children을 렌더링한다', () => {
    render(
      <RootClientLayout>
        <div>테스트 콘텐츠</div>
      </RootClientLayout>,
    );
    expect(screen.getByText('테스트 콘텐츠')).toBeInTheDocument();
  });
});
