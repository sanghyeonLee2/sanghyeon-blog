// PostItem.tsx
'use client';
import React from 'react';
import { PostItemProps } from '@/types/props/postItemsProps';

const PostItem = ({ post }: PostItemProps) => {
  return <li>{post.title}</li>;
};

export default PostItem;
