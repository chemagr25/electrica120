import { defineCollection, z } from "astro:content";

const resources = defineCollection({
schema: z.object({
    title: z.string(),
    description: z.string(),
    imgCover: z.string(),
    link: z.string()

    })
})