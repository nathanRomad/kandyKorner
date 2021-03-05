import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { HomeCard } from "./Home";
import { ProductList } from "./products/ProductList";
import { ProductProvider } from "./products/ProductProvider";

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <HomeCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationProvider>
                <ProductProvider>
                    <Route path="/locations">
                        <LocationList />
                    </Route>
                    <Route path="/products">
                        <ProductList />
                    </Route>
                </ProductProvider>
            </LocationProvider>
        </>
    )
}