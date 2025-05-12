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
      cover: { files: File[] | ExternalFile[] };
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
export interface File {
  name: string;
  type: string;
  file: {
    url: string;
  };
}
export interface ExternalFile {
  name: string;
  type: string;
  external: {
    url: string;
  };
}

export interface Tags {
  multi_select: MultiSelectTags[];
}
export interface MultiSelectTags {
  id: string;
  color: string;
  name: string;
}
export interface Checkbox {
  checkbox: boolean;
}

export type PostSlugParam = {
  slug: string;
};
