import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { Vehicle } from "../models/vehicle.model";
import { randomUUID } from "crypto";
export const useQueryVehicles = () => {
  const [data, setData] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new ApolloClient({
      uri: "https://hasura.vyro.com.au/v1/graphql",
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          query GetStockedVehicle {
            stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
              name
              condition
              media
              is_sold
            }
          }
        `,
      })
      .then((result) => {
        const vehiclesData = result.data.stocked_vehicles;
        setData(vehiclesData);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
};
