// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
    title: "책읽는달팽의 다락방",
    description: "소개와 여럿 이야기들",
    lang: "ko",
    editThisNote: {
    url: "https://github.com/readingsnail/impressium/edit/{{branch}}/{{file}}"
    },
    sidebar: {
    links: [
      {
        url: "https://github.com/readingsnail/impressium",
        label: "GitHub / 소스코드",
        icon: "github",
      },
    ],
    sections: [
      {
        label: "소개",
        groups: [
          {
            query: createNotesQuery({
              pattern: "^/[^/]+$",
              tags: ["소개"],
            }),
          },
        ],
      },
      {
        label: "이야기들",
        {
            query: createNotesQuery({
              pattern: "^/[^/]+$",
              tags: ["이야기"],
            }),
          },
        ]
    },
  },
});
