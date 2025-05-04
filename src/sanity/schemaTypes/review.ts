import { defineType, defineField } from 'sanity'

export const reviewType = defineType({
    type: "object",
  name: "review",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "number",
      name: "stars",
    }),
    defineField({
      type: "date",
      name: "reviewDate",
    }),
    defineField({
      name: "category",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
    defineField({
      name: 'metaReview',
      type: 'string',
      title: 'Meta Review',
    }),    
  ],
});

