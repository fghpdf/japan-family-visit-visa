'use client';
/*!

*/

// Chakra imports
import {Box, Grid, GridItem} from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/profile/components/Banner';

// Assets
import banner from 'img/auth/banner.png';
import avatar from 'img/avatars/avatar4.png';
import PersonCard from 'components/card/people';

import { fakerZH_CN as faker } from '@faker-js/faker';

const fakePeople = Array.from({ length: 11 }, (_, i) => {
  return {
    name: faker.person.fullName(),
    birthday: Intl.DateTimeFormat('zh-CN').format(faker.date.birthdate()),
    avatar: faker.image.avatar()
  }
});


export default function ProfileOverview() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
      >
        {
          fakePeople.map((person, index) => {
            return <GridItem key={index} w="100%">
              <PersonCard person={person} />
            </GridItem>
          })
        }
      </Grid>

    </Box>
  );
}
