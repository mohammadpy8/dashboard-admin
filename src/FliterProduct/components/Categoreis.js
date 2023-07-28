import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {
    
    const [mainCategory, setMainCategory] = useState("all");

    return (
        <div className="btn-container">
            {
                categories.map((category, index) => (
                    <button type="button"
                        className={category === mainCategory ? "filter-btn highlight" : "filter-btn"}
                        onClick={() => {
                            setMainCategory(category);
                            filterMenus(category);
                        }}
                        key={index}>
                        {category}
                    </button>
                ))
            }
        </div>
    );
};

export default Categories;
