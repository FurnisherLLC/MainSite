import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    type: z.enum(['article', 'video']),
    youtubeId: z.string().optional(),
    videoUrl: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
