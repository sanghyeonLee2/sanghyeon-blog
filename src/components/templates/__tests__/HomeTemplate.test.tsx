import { render, screen } from '@testing-library/react';
import HomeTemplate from '../HomeTemplate';
import { TestProviders } from '@/tests/utils/TestProviders';
import { getPostList } from '@/services/post/post';
import { Post } from '@/types/domain/post';

jest.mock('@/services/post', () => ({
  postItems: jest.fn(),
}));

export const mockPosts: Post[] = [
  {
    id: '1',
    slug: 'mock-post-1',
    date: '2025-01-01',
    cover: null,
    summary: 'Summary for Mock Post 1',
    tags: [
      { id: 'tag-1', name: 'mock' },
      { id: 'tag-2', name: 'test' },
    ],
    published: true,
    title: 'Mock Post 1',
  },
  {
    id: '2',
    slug: 'mock-post-2',
    date: '2025-01-02',
    cover: 'https://example.com/cover.jpg',
    summary: 'Summary for Mock Post 2',
    tags: [{ id: 'tag-3', name: 'sample' }],
    published: true,
    title: 'Mock Post 2',
  },
];

describe('HomeTemplate', () => {
  beforeEach(() => {
    (getPostList as jest.Mock).mockResolvedValue(mockPosts);

    console.log('Mock된 postItems 실행됨');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('게시글 목록이 API 응답으로 렌더링되어야 함', async () => {
    render(<HomeTemplate posts={mockPosts} />, { wrapper: TestProviders });
    expect(await screen.findByText('Mock Post 1')).toBeInTheDocument();
    expect(await screen.findByText('Mock Post 2')).toBeInTheDocument();
  });
});
