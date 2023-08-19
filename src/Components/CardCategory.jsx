import React, { useState } from "react";
import { carditems } from "../config.js";
import { Link } from "react-router-dom";

const CardCategory = ({ onSelectCards }) => {
    const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);

    const handleCard = (index) => {
        const updatedIndexes = selectedCardIndexes.includes(index)
            ? selectedCardIndexes.filter((i) => i !== index)
            : [...selectedCardIndexes, index];
        setSelectedCardIndexes(updatedIndexes);
        const selectedTitles = updatedIndexes.map((i) => carditems[i].categoryTitle);
        onSelectCards(selectedTitles);
    };

    const handleClick = () =>{
        {console.log(selectedCardIndexes)}
        if (selectedCardIndexes.length >= 3){
            localStorage.setItem("selectedCards", JSON.stringify(selectedCardIndexes));
        }

    }

    {console.log(selectedCardIndexes)}

    return (
        <div className="whole-container">
        <div className="category-container">
            {carditems.map((carditem, index) => (
                <div
                    key={index}
                    className={`card-category-container ${selectedCardIndexes.includes(index) ? 'card-selected' : ''}`}
                    onClick={() => handleCard(index)}
                >
                    <p className="category-heading"> {carditem.categoryTitle} </p>
                    <img className="category-img" src={carditem.categoryImg} alt="logo" />
                </div>
            ))}
        </div>
        {selectedCardIndexes.length >= 3 ? (
                <Link to="/homepage"><button onClick={handleClick} className="next-page" >Next Page </button></Link>)
                :<button onClick={handleClick} className="next-page" >Next Page </button>
        }
        
        </div>
    );
};

export default CardCategory;
