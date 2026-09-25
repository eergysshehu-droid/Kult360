import type {StructureBuilder} from 'sanity/structure';

const singletons = [
  {type: 'siteSettings', title: 'Site settings'},
  {type: 'organization', title: 'Organization'}
] as const;

export const structure = (builder: StructureBuilder) => builder
  .list()
  .title('KULT360 content')
  .items([
    ...singletons.map(({type, title}) => builder
      .listItem()
      .title(title)
      .id(type)
      .child(builder.document().schemaType(type).documentId(type))),
    builder.documentTypeListItem('navigation').title('Navigation'),
    builder.divider(),
    ...builder.documentTypeListItems().filter((item) => {
      const id = item.getId();
      return Boolean(id) && !singletons.some(({type}) => type === id) && id !== 'navigation';
    })
  ]);
