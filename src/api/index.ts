import axios from 'axios';
import { UKEnergyData } from '../types';

export const api = axios.create({
  baseURL: 'https://api.carbonintensity.org.uk/generation',
});

export async function getCurrentGenerationMix(): Promise<UKEnergyData> {
  const response = await api.get('/');
  return response.data.data;
}