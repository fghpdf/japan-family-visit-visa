'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import StepForm from 'components/card/Step';

export default function DataTables() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        <StepForm />
      </SimpleGrid>
    </Box>
  );
}
