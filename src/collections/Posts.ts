import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
  ],
};

export default Posts;
