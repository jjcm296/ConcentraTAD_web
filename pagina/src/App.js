import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './screen/inicio/Inicio';
import SobreTDA from './screen/sobretda/SobreTda';
import Nosotros from './screen/nosotros/Nosotros';
import NavBar from './NavBar/NavBar';

function App() {
    const [scrollToDownload, setScrollToDownload] = useState(false);
    const downloadCounterRef = useRef(null);

    const triggerScrollToDownload = () => {
        setScrollToDownload(true);
        setTimeout(() => setScrollToDownload(false), 1000);
    };

    const handleDownloadClick = () => {
        triggerScrollToDownload();
        if (downloadCounterRef.current) {
            downloadCounterRef.current.increment();
        }
    };

    return (
        <>
            <NavBar onDownloadClick={handleDownloadClick} />
            <Routes>
                <Route
                    path="/"
                    element={<Inicio counterRef={downloadCounterRef} />}
                />
                <Route path="/sobretda" element={<SobreTDA />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
        </>
    );
}

export default App;
