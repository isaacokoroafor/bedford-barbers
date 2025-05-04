import { defineType, defineField, defineArrayMember } from 'sanity'

export const gallery = defineType({
  type: "object",
  name: "gallery",
  title: "Image gallery",
  fields: [
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          fields: [
            {
              type: "string",
              name: "caption",
            },
          ],
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});

