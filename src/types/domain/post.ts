// types/post.ts
export interface Post {
  id: string;
  slug: string;
  date: string;
  cover: string | null;
  summary: string;
  tags: MultiSelectTags[];
  published: boolean;
  title: string;
}

export interface NotionPostsResponse {
  results: {
    id: string;
    properties: {
      slug: Slug;
      date: PostDate;
      cover: Cover;
      summary: Summary;
      tags: Tags;
      published: Published;
      title: Title;
    };
  }[];
}
export interface Slug {
  formula: {
    type: 'string';
    string: string;
  };
}
export interface PostDate {
  date: {
    start: string;
  };
}
export interface Cover {
  files: {
    name: string;
    file: {
      url: string;
    };
  }[];
}

export interface Summary {
  rich_text: {
    plain_text: string;
  }[];
}
export interface Tags {
  multi_select: MultiSelectTags[];
}
export interface MultiSelectTags {
  id: string;
  name: string;
}
export interface Published {
  checkbox: boolean;
}
export interface Title {
  title: {
    plain_text: string;
  }[];
}
export type PostSlugParam = {
  slug: string;
};
