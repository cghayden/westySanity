import React from 'react';
import { Container, Card, Heading, Text, Stack } from '@sanity/ui';
import S from '@sanity/desk-tool/structure-builder';

import BackgroundImagePreview from './BackgroundImagePreview';

const ColorsPreview = () =>
  S.view
    .component(({ document }) => {
      console.log('document from colors preview component', document);
      const { published, historical, draft } = document;
      if (!published && !historical) {
        return <p>Nothing to display</p>;
      }
      if (historical.backgroundImage?.asset) {
        return (
          <BackgroundImagePreview
            _id={draft ? 'drafts.siteSettings' : 'siteSettings'}
            textColor={historical.textColor.hex}
          />
        );
      }
      return (
        <React.Fragment>
          <Container width={3} height={5}>
            <Card
              margin={0}
              padding={5}
              style={{
                backgroundColor: `${
                  draft
                    ? draft?.backgroundColor?.hex
                    : published?.backgroundColor?.hex
                }`,
                color: `${historical.textColor.hex}`,
              }}
            >
              <Stack space={3}>
                <Heading as='h1' size={5}>
                  Background Color Preview
                </Heading>
                <Text
                  as='p'
                  style={{
                    color: `${historical.textColor.hex}`,
                    fontSize: '18px',
                  }}
                >
                  If you do not use a background image, this background color
                  will be used for your pages and product section on the home
                  page
                </Text>
                <Text
                  as='p'
                  style={{
                    color: `${historical.textColor.hex}`,
                    fontSize: '18px',
                  }}
                >
                  This is how your text color will appear against this
                  background color
                </Text>
              </Stack>
            </Card>
          </Container>
        </React.Fragment>
      );
    })
    .title('Background Preview');

export default ColorsPreview;
