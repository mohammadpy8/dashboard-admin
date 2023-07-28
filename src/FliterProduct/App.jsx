import React, { useState } from 'react';
import Categories from './components/Categoreis';
import menu from './data';

const allCategories = ["all", ...new Set(menu.map(menu => menu.category))];

function App() {

    const [allMenu, setAllMenu] = useState(menu);
    const [categories, setCategories] = useState(allCategories);

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} />
            </section>
        </main>
    );
}

export default App;
