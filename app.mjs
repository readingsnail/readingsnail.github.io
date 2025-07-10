// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
    title: "책읽는달팽의 다락방",
    description: "소개와 여럿 이야기들",
    lang: "ko",

    editThisNote: {
    url: "https://github.com/readingsnail/impressium/edit/{{branch}}/{{file}}"
    }

    openInNewTab: true,

    createNotesQuery({
    tree: true,
    });
    
    sidebar: {
    sections: [
      {
        label: "글 모음",
        groups: [
          {
            // A collapsible group "Posts", expanded by default
            label: "글",
            query: createNotesQuery(),
          },
          {
            // A collapsible group "Archived", collapsed by default
            label: "보관됨",
            expanded: false,
            query: createNotesQuery(),
          },
        ],
      },
    ],
  },
  },
});
