import { act } from 'react-dom/test-utils';
import { useThemeStore } from '../themeStore';

describe('themeStore', () => {
  afterEach(() => {
    // 상태 초기화
    useThemeStore.setState({ theme: 'light' });
    localStorage.clear();
  });

  it('초기 테마는 light 또는 저장된 값', () => {
    expect(['light', 'dark']).toContain(useThemeStore.getState().theme);
  });

  it('toggleTheme이 정상 작동해야 한다', () => {
    act(() => {
      useThemeStore.getState().toggleTheme();
    });
    const newTheme = useThemeStore.getState().theme;
    expect(newTheme).toBe('dark');
  });
});
