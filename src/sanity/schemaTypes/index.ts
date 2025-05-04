// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { serviceOffer } from "./service";
import { pageType } from "./page";
import { reviewType } from "./review";
import { gallery } from "./gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType,reviewType,gallery, categoryType, pageType, postType,serviceOffer],
};