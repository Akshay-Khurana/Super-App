import CardCategory from "./CardCategory";
import { useState } from "react";
const Category = () =>{
    const [selectedCardTitles, setSelectedCardTitles] = useState([]);

    const handleSelectCards = (titles) => {
        setSelectedCardTitles(titles);
    };

    const handleRemoveCardTitle = (titleToRemove) => {
        const updatedTitles = selectedCardTitles.filter((title) => title !== titleToRemove);
        setSelectedCardTitles(updatedTitles);
    };

    return (
        <div className="category-main-container">
            <div className="left-category-section">
                <h1 className="left-category-heading"> Super App</h1>
                <p className="left-category-para"> Choose your entertainment category</p>
                {console.log(selectedCardTitles)}
                {selectedCardTitles.length > 0 && (
                    <div className="selected-cards">
                            {selectedCardTitles.map((title, index) => (
                                <p key={index} >{title} {}
                                <span
                                        className="remove-icon"
                                        onClick={() => handleRemoveCardTitle(title)}
                                    >
                                        ✕
                                    </span>
                                    </p>
                            ))}
                    </div>
                )}
                {selectedCardTitles.length >= 3 ? "" : <p className="card-length-error"> Minimum 3 category required </p> }
            </div>
            <CardCategory onSelectCards={handleSelectCards}></CardCategory>
        </div>
    )
}
export default Category;