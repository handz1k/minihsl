import { useQuery } from "@apollo/client";
import { CITYBIKE_LOCATIONS } from "../graphql/queries";

const useBikeLocationsQuery = (skip) => {
  const { loading, error, data } = useQuery(CITYBIKE_LOCATIONS, {
    skip,
  });

  return { loading, error, data };
};

export default useBikeLocationsQuery;
