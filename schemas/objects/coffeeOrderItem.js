export default {
  name: 'coffeeOrderItem',
  title: 'Order Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Coffee Ordered',
      type: 'string',
    },
    {
      name: 'grind',
      title: 'Grind',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
  ],
  preview: {
    select: {
      quantity: 'quantity',
      size: 'size',
      name: 'name',
      grind: 'grind',
    },
    prepare: ({ quantity, size, name, grind }) => ({
      title: `${quantity} ${size} ${name} ${grind}`,
    }),
  },
};
