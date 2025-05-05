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
      type: "string",
      name: "name",
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

