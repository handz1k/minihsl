import { SearchBox } from '@mapbox/search-js-react';
import { useState } from "react";

const LocationSearch = ({token}) => {
  const [location, setLocation] = useState("");

  const searchChange = (value) => {
    console.log(value)
    setLocation(value)
  }

  const retrieveLocation = (result) => {
    console.log(result)
  }

  return (
    <div>
    <SearchBox
      accessToken={token}
      options={{
        language: 'fi',
        country: 'FI'
      }}
      onChange={searchChange}
      onRetrieve={retrieveLocation}
      value={location}
    />
    </div>
  )
}

export default LocationSearch
