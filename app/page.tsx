import { Country } from "./model/types";
import CountryCard from "@/components/country-card";

async function getCountries(): Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return response.json();
}

export default async function Home() {
  // isso pode ser feito com o next (componente asyncrono)
  const countries = await getCountries();

  return ( 
    <section className="container grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-2 mt-16">
      {countries.map(country => (
        <CountryCard
          key={country.name.common} 
          name={country.name.common} 
          ptName={country.translations.por.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
        />
      ))}
    </section>
  );
}
