import S from '@sanity/desk-tool/structure-builder';
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/go';
import { GiCoffeeBeans } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import PreviewIFrame from './components/previewIFrame';

const hiddenDocTypes = (listItem) =>
  ![
    'siteSettings',
    'landingPage',
    'coffeePage',
    'eventsPage',
    'aboutPage',
    'contactPage',
    'coffee',
    'order',
  ].includes(listItem.getId());
export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .icon(PageIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Sitewide Page Settings')
                .icon(GoSettings)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Home Page')
                .icon(GoHome)
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('homePage')
                    .views([S.view.form(), PreviewIFrame()])
                ),
              S.listItem()
                .title('Coffee Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('coffeePage')
                    .documentId('coffeePage')
                    .views([S.view.form(), PreviewIFrame()])
                ),
              S.listItem()
                .title('Events Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('eventsPage')
                    .documentId('eventsPage')
                    .views([S.view.form(), PreviewIFrame()])
                ),
              S.listItem()
                .title('About Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .views([S.view.form(), PreviewIFrame()])
                ),
              S.listItem()
                .title('Contact Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .views([S.view.form(), PreviewIFrame()])
                ),
            ])
        ),
      S.listItem()
        .title('Coffee')
        .icon(GiCoffeeBeans)
        .child(
          S.documentList()
            .title('Coffee')
            .schemaType('coffee')
            .filter('_type == "coffee"')
            .defaultOrdering([{ field: 'stock', direction: 'desc' }])
        ),
      S.listItem()
        .title('Orders')
        .icon(FaFileInvoiceDollar)
        .child(
          S.list()
            .title('Orders')
            .items([
              S.listItem()
                .title('Open Orders')
                .icon(FaFileInvoiceDollar)
                .child(
                  S.documentList()
                    .title('Open Orders')
                    .schemaType('orders')
                    .filter('_type == "order" && shipped != true')
                    .defaultOrdering([
                      { field: 'orderDate', direction: 'desc' },
                    ])
                ),
              S.listItem()
                .title('Filled Orders')
                .icon(IoIosCheckmarkCircleOutline)
                .child(
                  S.documentList()
                    .title('Filled Orders')
                    .schemaType('orders')
                    .filter('_type == "order" && shipped == true')
                    .defaultOrdering([{ field: 'orderDate', direction: 'asc' }])
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
