'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {Box, Flex, Grid, Spacer} from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Storage from 'views/admin/profile/components/Storage';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'img/auth/banner.png';
import avatar from 'img/avatars/avatar4.png';

export default function ProfileOverview() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex>
        <Banner
          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Spacer />
        <Banner

          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
      </Flex>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '1.34fr 1fr 1.62fr',
        }}
        templateRows={{
          base: 'repeat(5, 1fr)',
          lg: '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
      >
        <Banner
          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Banner

          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Banner

          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Banner

          banner={banner}
          avatar={avatar}
          name="Qxx"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
      </Grid>

    </Box>
  );
}
