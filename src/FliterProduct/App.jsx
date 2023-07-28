import React, { useState } from 'react';
import Categories from './components/Categoreis';
import Menu from './components/Menu';
import menu from './data';

const allCategories = ["all", ...new Set(menu.map(menu => menu.category))];

function App() {

    const [allMenu, setAllMenu] = useState(menu);
    const [categories, setCategories] = useState(allCategories);

    const filterMenus = (category) => {
        
        if (category === "all") {
            setAllMenu(menu);
            return
        }

        const filtredMenus = menu.filter(menu => menu.category === category);
        setAllMenu(filtredMenus);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterMenus={filterMenus} />
                <Menu allMenu={allMenu}/>
            </section>
        </main>
    );
}

export default App;
