import React from "react";

const Menu = ({allMenu}) => {
    return (
        <div className="section-center">
            {
                allMenu.map(menu => {
                    const { id, title, price, category, img, desc } = menu;
                    return (
                        
                        <article className="menu-item" key={id}>
                            <img src={img} className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    );
};

export default Menu;
