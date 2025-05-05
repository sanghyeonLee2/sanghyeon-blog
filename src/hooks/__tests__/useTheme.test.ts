import { renderHook, act } from '@testing-library/react';
import { useThemeStore } from '@/stores/themeStore';

// Zustand store 초기화 유틸 (테스트 간 상태 공유 방지)
beforeEach(() => {
  const { toggleTheme } = useThemeStore.getState();
  // 강제로 light로 초기화
  if (useThemeStore.getState().theme === 'dark') toggleTheme();
});

describe('useThemeStore', () => {
  it('기본 테마는 light여야 한다', () => {
    const { result } = renderHook(() => useThemeStore());
    expect(result.current.theme).toBe('light');
  });

  it('toggleTheme을 호출하면 테마가 변경되어야 한다', () => {
    const { result } = renderHook(() => useThemeStore());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe('light');
  });
});
