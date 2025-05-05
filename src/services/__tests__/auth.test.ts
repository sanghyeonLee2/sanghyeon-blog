// __tests__/auth.test.ts
import { me } from '@/services/auth';
import type { MeResponse } from '@/types/auth';

jest.mock('@/lib/api/fetcher', () => ({
  fetcher: {
    get: jest.fn(),
  },
}));

import { fetcher } from '@/lib/api/fetcher';

describe('me', () => {
  it('GET 요청을 보내고 응답을 받아야 함', async () => {
    const mockData: MeResponse = {
      id: 1,
      name: '홍길동',
      email: 'hong@example.com',
    };

    (fetcher.get as jest.Mock).mockResolvedValueOnce(mockData);

    const result = await me();

    expect(result).toEqual(mockData);
    expect(fetcher.get).toHaveBeenCalledWith('/api/auth/me', undefined);
  });
});
