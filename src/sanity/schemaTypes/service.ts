import { defineType, defineField } from 'sanity'

export const serviceOffer = defineType({
    type: "object",
  name: "serviceOffer",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "number",
      name: "price",
    }),
    defineField({
      type: "number",
      name: "hours",
    }),
    defineField({
      type: "number",
      name: "minutes",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
    defineField({
      name: 'serviceType',
      type: 'string',
      title: 'Meta Service Type',
    }),    
  ],
});

