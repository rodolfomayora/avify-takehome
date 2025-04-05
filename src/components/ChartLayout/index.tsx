import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { EnergyMixBarChart } from '../EnergyMixBarChart';
import { getCurrentGenerationMix } from '../../api';

export const ChartLayout = () => {
  const { isPending, isError, data } = useQuery({
      queryKey: ['generationmix'],
      queryFn: getCurrentGenerationMix,
  });

  if (isPending) return <h1>Loading...</h1>;

  if (isError) return <h1>Error</h1>;

  return <EnergyMixBarChart data={data.generationmix} />;
}