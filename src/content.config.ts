import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string(),
      summary: z.string(),
      icon: z.string(),
      image: image(),
      order: z.number(),
      featured: z.boolean().default(false),
      capabilities: z.array(z.string()).default([]),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      sector: z.string(),
      summary: z.string(),
      image: image(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      stack: z.array(z.string()).default([]),
      order: z.number(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.string(),
      author: z.string().default('ScionTech'),
      image: image(),
      imageAlt: z.string(),
      readingTime: z.number(),
      draft: z.boolean().default(false),
    }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date(),
  }),
});

export const collections = { services, work, blog, pages };
