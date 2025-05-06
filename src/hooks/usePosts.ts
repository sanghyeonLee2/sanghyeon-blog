import { QUERY_KEYS } from '@/constants/queryKeys';
import { postItems } from '@/services/post';
import { Post } from '@/types/domain/post';
import { useQuery } from '@tanstack/react-query';
import UseGetPostsResult from '@/types/hooks/useGetPosts';

const usePosts = (): UseGetPostsResult => {
  const { isPending, data: posts } = useQuery<Post[]>({
    queryKey: QUERY_KEYS.POSTS.ALL,
    queryFn: postItems,
  });
  return { isPending, posts };
};

export default usePosts;
