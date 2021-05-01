import PriceInput from '../../components/PriceInput';

export default {
  name: 'coffee',
  type: 'document',
  title: 'Coffees',
  fields: [
    {
      name: 'name',
      title: 'Coffee Name',
      type: 'string',
      description: 'Name of the coffee',
    },
    {
      name: 'roastLevel',
      title: 'Roast Level',
      type: 'string',
      description: 'Roast Level of the Coffee',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Light-Medium', value: 'light-medium' },
          { title: 'Medium', value: 'medium' },
          { title: 'Medium-Dark', value: 'medium-dark' },
          { title: 'Dark', value: 'dark' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'blend',
      title: 'Blend',
      type: 'string',
      description: 'Blend or Single Origin?',
      options: {
        list: [
          { title: 'Single Origin', value: 'singleOrigin' },
          { title: 'Blend', value: 'blend' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },

    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
      description:
        'A concise description of the coffee to display on the home page tile',
    },
    {
      name: 'descriptionLong',
      title: 'Longer Description',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'A longer, more detailed story about this roast to show on the specfic page for this coffee',
    },
    {
      name: 'flavorProfile',
      title: 'Flavor Profile',
      type: 'string',
      description: 'Flavor Profile of the coffee',
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'Region of the Coffee',
    },
    {
      name: 'grade',
      title: 'Grade',
      type: 'string',
      description: 'Grade of the Coffee',
    },
    {
      name: 'process',
      title: 'Processing',
      type: 'string',
      description: 'How the Coffee was Processed',
    },
    {
      name: 'cultivar',
      title: 'Cultivar',
      type: 'string',
      description: 'Cultivar',
    },
    {
      name: 'elevation',
      title: 'Elevation',
      type: 'string',
      description: 'Elevation',
    },
    {
      name: 'roastDate',
      title: 'Roast Date',
      type: 'date',
      description: 'Day the Coffee was Roasted',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      // custom input component
      inputComponent: PriceInput,
      description: 'Price of the coffee in cents',
      validation: (Rule) => Rule.min(1000),
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      // custom input component
      description: 'Number of pounds in stock',
      //rule : greater than 0?
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      description:
        'The slug provides a unique URL on the website for this item',
    },
  ],
  preview: {
    select: {
      title: 'name',
      stock: 'stock',
    },
    prepare: ({ name, stock }) => ({
      title: `${name}, ${stock}`,
    }),
  },
};
