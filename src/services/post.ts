import { API_URLS } from '@/constants/apiUrls';
import { fetcher } from '@/lib/api/fetcher';
import { Post } from '@/types/domain/post';

export const postItems = () => fetcher.post<Post[]>(API_URLS.POST.ALL);
