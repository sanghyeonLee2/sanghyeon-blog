import { Post } from '@/types/domain/post';

type UseGetPostsResult = {
  isPending: boolean;
  posts: Post[] | undefined;
};
export default UseGetPostsResult;
