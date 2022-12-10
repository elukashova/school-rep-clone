/* eslint-disable prettier/prettier */
export interface ILetters {
  draw: (data: SourcesData[]) => void;
}

export interface SourcesData {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}