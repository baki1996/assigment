import React from "react";
import { country_data } from "@/constant/data";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  if (params.country_name == "pakistan") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.pakistan.name}
        </h1>
        <p>Name: {country_data.pakistan.name}</p>
        <p>Population: {country_data.pakistan.population}</p>
        <p>Capital: {country_data.pakistan.capital}</p>
        <p>Major Rivers: {country_data.pakistan.major_rivers}</p>
        <p>Small City: {country_data.pakistan.small_city}</p>
        <p>Big City: {country_data.pakistan.big_city}</p>
      </div>
    );
  } else if (params.country_name == "india") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.india.name}
        </h1>
        <p>Name: {country_data.india.name}</p>
        <p>Population: {country_data.india.population}</p>
        <p>Capital: {country_data.india.capital}</p>
        <p>Major Rivers: {country_data.india.major_rivers}</p>
        <p>Small City: {country_data.india.small_city}</p>
        <p>Big City: {country_data.india.big_city}</p>
      </div>
    );
  } else if (params.country_name == "china") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.china.name}
        </h1>
        <p>Name: {country_data.china.name}</p>
        <p>Population: {country_data.china.population}</p>
        <p>Capital: {country_data.china.capital}</p>
        <p>Major Rivers: {country_data.china.major_rivers}</p>
        <p>Small City: {country_data.china.small_city}</p>
        <p>Big City: {country_data.china.big_city}</p>
      </div>
    );
  } else if (params.country_name == "japan") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.japan.name}
        </h1>
        <p>Name: {country_data.japan.name}</p>
        <p>Population: {country_data.japan.population}</p>
        <p>Capital: {country_data.japan.capital}</p>
        <p>Major Rivers: {country_data.japan.major_rivers}</p>
        <p>Small City: {country_data.japan.small_city}</p>
        <p>Big City: {country_data.japan.big_city}</p>
      </div>
    );
  } else if (params.country_name == "bangladesh") {
    return (
      <div className="font-bold text-yellow-500 ml-7">
        <h1 className="text-2xl text-white font-bold underline p-4">
          Country: {country_data.bangladesh.name}
        </h1>
        <p>Name: {country_data.bangladesh.name}</p>
        <p>Population: {country_data.bangladesh.population}</p>
        <p>Capital: {country_data.bangladesh.capital}</p>
        <p>Major Rivers: {country_data.bangladesh.major_rivers}</p>
        <p>Small City: {country_data.bangladesh.small_city}</p>
        <p>Big City: {country_data.bangladesh.big_city}</p>
      </div>
    );
  } else {
    return (
      <h1 className="text-2xl font-bold underline p-4">
        ⚠ Country not found 🌐
      </h1>
    );
  }
};

export default CountryName;