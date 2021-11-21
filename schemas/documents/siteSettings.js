export default {
  name: 'siteSettings',
  type: 'document',
  title: 'settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Background color for pages if an image is not used',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'backgroundImage',
      title: 'Background Image for Pages',
    },
    {
      name: 'textColor',
      type: 'color',
      title:
        'TEXT COLOR: Color of headings and introductory text (both optional) on each page',
      options: {
        disableAlpha: true,
      },
    },
  ],
};
