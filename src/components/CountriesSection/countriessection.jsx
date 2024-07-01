import React from 'react';
import ukFlag from '../../assets/countries/uk.png';
import austriaFlag from '../../assets/countries/au.png';
import usaFlag from '../../assets/countries/us.png';
import netherlandsFlag from '../../assets/countries/flag_12364116.png';
import swedenFlag from '../../assets/countries/sw.png';
import australiaFlag from '../../assets/countries/aus.png';

const countriesData = [
  { name: 'Англия', flag: ukFlag },
  { name: 'Австрия', flag: austriaFlag },
  { name: 'США', flag: usaFlag },
  { name: 'Нидерланды', flag: netherlandsFlag },
  { name: 'Швеция', flag: swedenFlag },
  { name: 'Австралия', flag: australiaFlag },
];

const CountryCard = ({ name, flag }) => {
  return (
    <div className="flex flex-col items-center p-4 m-2 bg-gray-800 bg-opacity-75 rounded-xl shadow-lg transition-transform transform hover:scale-105">
      <img src={flag} alt={name} className="w-full h-24 object-cover mb-4 rounded-md" />
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
  );
};

const CountriesSection = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 py-10">
      <h2 className="text-2xl font-bold text-white mb-6">VPN сервера доступны в следующих странах</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-screen-lg">
        {countriesData.map((country, index) => (
          <CountryCard key={index} name={country.name} flag={country.flag} />
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;