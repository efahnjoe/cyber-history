export const SITE = {
  website: "https://cyber-history.pages.dev/", // replace this with your deployed domain
  author: "Efahn Joe",
  profile: "https://github.com/efahnjoe/",
  desc: "Those historical events you have never heard of.",
  title: "Cyber History",
  ogImage: "og-images/og-v1.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/efahnjoe/cyber-history/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en-US", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
