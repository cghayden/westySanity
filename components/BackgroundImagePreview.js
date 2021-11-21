import React from 'react';
import {
  Container,
  Card,
  Heading,
  Text,
  Stack,
  Flex,
  Spinner,
} from '@sanity/ui';
import QueryContainer from 'part:@sanity/base/query-container';

export default function BackgroundImagePreview({ _id, textColor }) {
  const query = `*[_id == '${_id}']{"imageUrl":backgroundImage.asset->url}`;

  return (
    <React.Fragment>
      <QueryContainer query={`${query}`}>
        {({ result, loading, error }) => {
          if (error) {
            return console.log('There has been an error', error.message);
          }

          if (loading) {
            return (
              <div>
                <Flex align='center' justify='center'>
                  <Spinner muted />
                </Flex>
              </div>
            );
          }
          const imageUrl = result?.documents[0].imageUrl;
          if (!result || !imageUrl) {
            return (
              <Container width={3}>
                A background image could not be found
              </Container>
            );
          }

          return (
            <Container width={3}>
              <Card
                margin={3}
                padding={4}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '100vh',
                  color: `${textColor}`,
                }}
              >
                <Stack space={3}>
                  <Heading as='h1' size={5}>
                    Background Image Preview
                  </Heading>
                  <Text
                    as='p'
                    style={{ color: `${textColor}`, fontSize: '18px' }}
                  >
                    This is how your text color will appear against this
                    background Image
                  </Text>
                </Stack>
              </Card>
            </Container>
          );
        }}
      </QueryContainer>
    </React.Fragment>
  );
}
