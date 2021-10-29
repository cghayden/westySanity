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
      name: 'backgroundImage',
      type: 'backgroundImage',
      title: 'Background Image for Pages',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Background color for pages, if an image is not used',
      options: {
        disableAlpha: true,
      },
    },
  ],
};
