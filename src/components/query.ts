import { gql } from '@apollo/client';

export const WEATHER_DATA = gql`
  query WeatherData($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          description
        }
        temperature {
          actual
        }
      }
    }
  }
`;
