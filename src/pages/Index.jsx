import React, { useState } from "react";
import { Box, Select, Text, VStack } from "@chakra-ui/react";

const countries = [
  { name: "United States", currency: "USD", states: ["California", "New York", "Texas"] },
  { name: "Canada", currency: "CAD", states: ["Ontario", "Quebec", "British Columbia"] },
  { name: "United Kingdom", currency: "GBP", states: ["England", "Scotland", "Wales"] },
];

const cities = {
  California: ["Los Angeles", "San Francisco", "San Diego"],
  "New York": ["New York City", "Buffalo", "Albany"],
  Texas: ["Houston", "Austin", "Dallas"],
  Ontario: ["Toronto", "Ottawa", "Hamilton"],
  Quebec: ["Montreal", "Quebec City", "Laval"],
  "British Columbia": ["Vancouver", "Victoria", "Kelowna"],
  England: ["London", "Manchester", "Birmingham"],
  Scotland: ["Edinburgh", "Glasgow", "Aberdeen"],
  Wales: ["Cardiff", "Swansea", "Newport"],
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const selectedCountryObj = countries.find((country) => country.name === selectedCountry);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Select placeholder="Select a country" value={selectedCountry} onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </Select>

        {selectedCountryObj && (
          <Text>
            Currency: <strong>{selectedCountryObj.currency}</strong>
          </Text>
        )}

        {selectedCountryObj && (
          <Select placeholder="Select a state" value={selectedState} onChange={handleStateChange}>
            {selectedCountryObj.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        )}

        {selectedState && (
          <Box>
            <Text>Cities:</Text>
            <ul>
              {cities[selectedState].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
