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
      slug: Text;
      date: PostDate;
      cover: Cover;
      summary: Text;
      tags: Tags;
      published: Checkbox;
      title: Title;
    };
  }[];
}
export interface Text {
  rich_text: {
    plain_text: string;
  }[];
}
export interface Title {
  title: {
    plain_text: string;
  }[];
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

export interface Tags {
  multi_select: MultiSelectTags[];
}
export interface MultiSelectTags {
  id: string;
  name: string;
}
export interface Checkbox {
  checkbox: boolean;
}

export type PostSlugParam = {
  slug: string;
};
