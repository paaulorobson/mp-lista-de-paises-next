export type Country = {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  capital: string;
  region: string;
  population: number;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  borders?: string[];
  cca3: string;
};
