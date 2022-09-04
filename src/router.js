import React from 'react';
import {Routes,Route} from "react-router-dom";
import Preview from "./pages/Preview";
import FirstForm from "./pages/FirstForm";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path={`/`} element={<Preview />} />
                <Route path={`/first`} element={<FirstForm />} />
            </Routes>
        </>
    );
};

export default Router;