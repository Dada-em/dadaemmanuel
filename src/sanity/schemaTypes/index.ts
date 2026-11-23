import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { siteContent } from "./siteContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, siteContent],
};
