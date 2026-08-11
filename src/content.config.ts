// src/content.config.ts

import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    date: z.coerce.date().optional(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    description: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  portfolio,
  pages,
};