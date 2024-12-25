import React from 'react';
import './favorites.css';

const Favorites = () => {
    const favorites = [
        'Oreos!',
        'Your Website 💻',
        'Norway ✈️',
        'Grandma dresses (which you look absolutely gorgeous in)',
        'Cross Stitching!',
        'Fried Almonds from Ling Ling :p',
        'Nashville fried chicken "Sandwich" from Terrabonne!',
        'European Medieval History',
        'Garfield!',
        'Language Acquisition!',
        'And more but sticky note became too long :p',


    ];

    return (
        <div className="sticky-note-container">
            <h1 className="sticky-note-header">Your Favorites!!</h1>
            <ul className="sticky-note-list">
                {favorites.map((item, index) => (
                    <li key={index} className="sticky-note-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;