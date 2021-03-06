import React from "react"
import "./Locations.css"

export const Location = ({ locations }) => (
    <section className="location">
        <h3 className="location__name">{locations.name}</h3>
        <address className="location__address">{locations.address}</address>
    </section>
)