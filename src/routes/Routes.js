import React from "react";
import { Route, Routes } from "react-router-dom";
import { config } from "../pages/config";

const RoutesProviders = () => {
    return (
        <Routes>
            {
                config.map(({ element, path, Layout }, index) => (
                    <Route key={index} element={<Layout>{element}</Layout>} path={path} />
                ))
            }
        </Routes>
    );
}

export default RoutesProviders;
