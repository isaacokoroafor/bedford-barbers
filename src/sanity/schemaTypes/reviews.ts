import { defineType, defineField, defineArrayMember } from 'sanity'

export const reviews = defineType({
  type: "object",
  name: "reviews",
  title: "Reviews",
  fields: [
      defineField({
        name: "title",
        type: "string",
      }),
      defineField({
        name: "reviews",
        type: "number",
      }),
      defineField({
        name: "average",
        type: "number",
      }),
      defineField({
            name: "mainImage",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                type: "string",
                title: "Alternative Text",
              },
            ],
          }),
    defineField({
      type: "array",
      name: "reviewItems",
      of: [
        defineArrayMember({
          type: "review",
        }),
      ],
    }),
  ],
});

