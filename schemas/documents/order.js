import PriceInput from '../../components/PriceInput';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import moment from 'moment';
// import { Checkbox } from '@sanity/ui';
export default {
  title: 'Order',
  name: 'order',
  type: 'document',
  icon: FaFileInvoiceDollar,
  fields: [
    {
      name: 'shipped',
      title: 'Shipped / Delivered / Picked Up',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
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
      name: 'customerComments',
      title: 'Notes From the Customer',
      type: 'string',
    },
    {
      name: 'deliveryMethod',
      title: 'Delivery Method',
      type: 'string',
      options: {
        list: [
          { title: 'Pickup', value: 'pickup' },
          { title: 'Shipping', value: 'shipping' },
        ],
        layout: 'radio',
      },
    },
    //if deliveryMethod === 'Pickup' ->
    {
      name: 'pickupLocation',
      title: 'Pickup Location',
      type: 'string',
      options: {
        list: [
          { title: 'Daniels House', value: 'daniels' },
          { title: 'Edge Studio', value: 'edge' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'shippingName',
      title: 'Ship to: (Name / Org.)',
      type: 'string',
    },
    {
      name: 'shippingAddressLine1',
      title: 'Shipping Address Line 1',
      type: 'string',
    },
    {
      name: 'shippingAddressLine2',
      title: 'Shipping Address Line 2',
      type: 'string',
    },
    {
      name: 'shippingCity',
      title: 'Shipping City',
      type: 'string',
    },
    {
      name: 'shippingState',
      title: 'Shipping State',
      type: 'string',
    },
    {
      name: 'shippingZip',
      title: 'Shipping Zip Code',
      type: 'string',
    },
    //if deliveryMethod === 'Shipping' ->
    { name: 'trackingNumber', title: 'Tracking Number', type: 'string' },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Total Price of the Order',
      validation: (Rule) => Rule.min(100),
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      description: 'Date Order was received',
      options: {
        dateFormat: 'MM-DD-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'number',
      title: 'Order Number',
      type: 'string',
    },
    {
      name: 'stripe_id',
      title: 'Stripe Payment ID',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'number',
        slugify: (input) => `${input}`,
      },
    },
  ],
  initialValue: {
    orderDate: new Date().toISOString(),
    shipped: false,
  },
  preview: {
    select: {
      number: 'number',
      name: 'customerName',
      date: 'orderDate',
    },
    prepare: ({ name, number, date }) => {
      const formattedDate = moment(date).format('MMM. D, YYYY');
      console.log('formattedDate', formattedDate);
      //   console.log('formattedDate', formattedDate);

      return {
        title: name,
        subtitle: `${formattedDate}, # ${number}`,
      };
    },
  },
};
