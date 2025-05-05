import { API_URLS } from '@/constants/apiUrls';
import { fetcher } from '@/lib/api/fetcher';

import type {
  MeResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types/auth';

// 로그인 (비회원 요청)
export const signIn = (data: SignInRequest) =>
  fetcher.post<SignInResponse>(API_URLS.AUTH.SIGN_IN, data);

// 회원가입 (비회원 요청)
export const signUp = (data: SignUpRequest) =>
  fetcher.post<SignUpResponse>(API_URLS.AUTH.SIGN_UP, data);

// 로그아웃 (인증 필요 - Authorization 자동 포함)
export const logout = () => fetcher.post(API_URLS.AUTH.LOG_OUT);

// 현재 로그인 사용자 정보 (인증 필요 - Authorization 자동 포함)
export const me = () => fetcher.get<MeResponse>(API_URLS.AUTH.ME);
