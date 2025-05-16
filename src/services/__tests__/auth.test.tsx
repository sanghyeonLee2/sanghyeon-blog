import { screen } from '@testing-library/react';
import { getPostList } from '@/services/post/post';

jest.mock('@/services/post', () => ({
  getPostList: jest.fn(),
}));

const mockPosts = [
  {
    id: 1,
    title: 'Mock Post 1',
    summary: 'Summary 1',
    content: 'Content 1',
    author: 'Author 1',
    date: '2025-01-01',
  },
  {
    id: 2,
    title: 'Mock Post 2',
    summary: 'Summary 2',
    content: 'Content 2',
    author: 'Author 2',
    date: '2025-01-02',
  },
];

describe('HomeTemplate', () => {
  beforeEach(() => {
    (getPostList as jest.Mock).mockResolvedValue(mockPosts);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('게시글 목록이 API 응답으로 렌더링되어야 함', async () => {
    expect(await screen.findByText('Mock Post 1')).toBeInTheDocument();
    expect(await screen.findByText('Mock Post 2')).toBeInTheDocument();
  });
});
