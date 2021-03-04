import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className="locations">
      {
        locations.map(locations => {
          return <Location key={locations.id} locations={locations} />
        })
      }
    </div>
  )
}