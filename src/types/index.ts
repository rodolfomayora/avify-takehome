export type GenerationMix = {
  fuel: string,
  perc: number,
}

export type UKEnergyData = {
  from: string,
  to: string,
  generationmix: GenerationMix[]
}
