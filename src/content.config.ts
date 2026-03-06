import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const POSTS_PATH = "src/data/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${POSTS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      readingTime: z.number().optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      sources: z
        .array(
          z.object({ org: z.string(), title: z.string(), url: z.string() })
        )
        .optional(),
    }),
});

export const collections = { posts };
