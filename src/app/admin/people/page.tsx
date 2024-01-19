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

export default function ProfileOverview() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        templateColumns={{
          base: '1fr',
          lg: 'repeat(2, 1fr)',
          '2xl': '1.34fr 1.62fr 1fr',
        }}
        templateRows={{
          base: 'repeat(5, 1fr)',
          lg: 'repeat(2, 1fr)',
          '2xl': '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
      >
        <Banner
          gridArea="2 / 2 / 3 / 3"
          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <GridItem bg='orange.300' area="1 / 1 / 2 / 2"></GridItem>
        <GridItem bg='red.300' area={{ lg: '2 / 1 / 3 / 2' }}></GridItem>
      </Grid>

    </Box>
  );
}
