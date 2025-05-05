import { defineType, defineField, defineArrayMember } from 'sanity'
export const pageType = defineType({
  type: "document",
  name: "page",
  fields: [
    defineField({
      type: "string",
      name: "title",
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
            name: "categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
          }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      type: "array",
      name: "sections",
      title: "Page sections",
      of: [
        defineArrayMember({
          type: "serviceOffer",
        }),defineArrayMember({
            type: "gallery",
          }),defineArrayMember({
            type: "reviews",
          }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
  options: {
    // show language filter for this document type, regardless of how documentTypes for the plugin is configured
    //languageFilter: true,
  }
});

