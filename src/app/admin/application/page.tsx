'use client';
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import StepForm from 'components/card/Step';

export default function DataTables() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Grid
        mb="20px"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <GridItem colStart={2} colEnd={4}>
          <StepForm  />
        </GridItem>
      </Grid>
    </Box>
  );
}
