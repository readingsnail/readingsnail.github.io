// @ts-check
import { defineConfig, createNotesQuery } from "./.app/app-config.js";

export default defineConfig({
    title: "책읽는달팽의 다락방",
    description: "소개와 여럿 이야기들",
    lang: "ko",
    editThisNote: {
    url: "https://github.com/readingsnail/impressium/edit/{{branch}}/{{file}}"
    }

    createNotesQuery({
    tree: true,
    });

    sidebar: {
    links: [
      {
        // The url of the website
        url: "https://github.com/readingsnail/impressium",

        // The visible label of the link
        label: "GitHub",

        // The icon name
        // For a list of available icons, see https://lucide.dev/icons/
        icon: "github",

        // If the link should open in a new tab (optional)
        // Default: true
        openInNewTab: false,
      },
    ],
  },
});
