import path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.resolve("./docs"),
  title: "大数据与网络传输技术探索",
  icon: "/rspress-icon.png",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/fisschl/bronya",
      },
    ],
  },
  builderConfig: {
    tools: {
      rspack: {
        resolve: {
          preferRelative: true,
        },
      },
    },
  },
});
