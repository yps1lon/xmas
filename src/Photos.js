import React, { useState } from 'react';
import './Album.css';
import silly from "./sillyselfie.jpg";
import silly2 from "./silly2.jpg";
import monter from "./monter.jpg";
import rb from "./redbull.jpg";
import lingling from "./lingling.jpg";
import hike from "./hike.jpg";
import tank from "./tank.jpg";
import bm from "./bonemarrow.jpg";
import notril from "./nostril.jpg";
import mama from "./mamapizza.jpg";

const Photos = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const photos = [
        mama, silly, silly2, monter, rb, lingling, hike, bm, tank, notril
    ];

    const nextPage = () => {
        if (currentPage < photos.length - 1) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="album-container">
            <div className="book">
                <div className="book-cover"></div>
                <div className="page" style={{ backgroundImage: `url(${photos[currentPage]})` }}>
                </div>
            </div>
            <div className="controls">
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default Photos;
