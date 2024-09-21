import React from "react";
import Section from "./section";
import Title from "./title";
import CountryCard from "./cards/country-card";

export default function SupportedCountries() {
  return (
    <Section customStyles="bg-[#EFF1FA]">
      <div className="flex flex-col items-center justify-center">
        <Title>
          Send money <br />
          <span className="text-primary">worldwide</span>
        </Title>

        {/* Countries list */}
        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(205px,.5fr))] gap-4 md:gap-8 w-full mt-12">
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </div>
    </Section>
  );
}
