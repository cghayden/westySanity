import PriceInput from '../../components/PriceInput';

export default {
  title: 'Order',
  name: 'order',
  type: 'document',
  readOnly: true,
  fields: [
    {
      name: 'customerName',
      title: ' Customer Name',
      type: 'string',
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
    },
    {
      name: 'customerPhone',
      title: 'Customer Phone Number',
      type: 'string',
    },
    {
      name: 'orderItems',
      title: 'Order Items',
      type: 'array',
      of: [{ type: 'coffeeOrderItem' }],
      description: 'The Items in the Order',
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Total Price of the Order',
      validation: (Rule) => Rule.min(1000),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      description: 'Date Order was placed',
    },
    {
      name: 'number',
      title: 'Order Number',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'customerName',
      },
    },
  ],
  preview: {
    select: {
      number: 'number',
      name: 'customerName',
    },
    prepare: ({ name, number }) => ({
      title: `${number} : ${name} `,
    }),
  },
};
