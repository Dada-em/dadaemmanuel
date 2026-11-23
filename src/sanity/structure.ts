import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio Content")
    .items([
      S.listItem()
        .title("Site Content")
        .child(
          S.document()
            .schemaType("siteContent")
            .documentId("siteContent")
            .title("Site Content"),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "siteContent",
      ),
    ]);
