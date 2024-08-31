import {gql} from '@apollo/client'

export const CITYBIKE_LOCATIONS = gql`

{
  bikeRentalStations {
    name
    stationId
    lat
    lon
    bikesAvailable
    spacesAvailable
  }
}

`