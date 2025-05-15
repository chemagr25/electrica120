import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.string(),
        description: z.string(),
        imgCover: z.string().url(),
        tag: z.string()
    })
})

export const collections = { posts }
