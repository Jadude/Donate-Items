import React, { useState } from "react";
import decoration from '../../../assets/icons/Decoration.svg';

const HomeHelp = () => {
    const [selectedCategory, setSelectedCategory] = useState('foundations');
    const [currentPage, setCurrentPage] = useState(1);

    const data = {
        foundations: [
            { title: 'Fundacja 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            { title: 'Fundacja 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation.', detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Fundacja 3', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Fundacja 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            { title: 'Fundacja 5', description: 'Ut enim ad minim veniam, quis nostrud exercitation.', detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Fundacja 6', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        ],
        organisations: [
            { title: 'Organizacja 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            { title: 'Organizacja 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation.', detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Organizacja 3', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Organizacja 4', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Organizacja 5', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Organizacja 6', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Organizacja 7', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Organizacja 8', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Organizacja 9', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        ],
        collections: [
            { title: 'Zbiórka 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
            { title: 'Zbiórka 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation.', detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'Zbiórka 3', description: 'Duis aute irure dolor in reprehenderit.', detail: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
            { title: 'Zbiórka 4', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 5', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 6', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 7', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 8', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 9', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 10', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 11', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { title: 'Zbiórka 12', description: 'Excepteur sint occaecat cupidatat non proident.', detail: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },

        ],
    };

    const itemsPerPage = 3;
    const totalPages = {
        foundations: 2,
        organisations: 3,
        collections: 4,
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const displayData = data[selectedCategory].slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="home-help">
            <h2>Komu pomagamy?</h2>
            <img src={decoration} alt="decoration"/>
            <section className="home-help-select">
                <button onClick={() => handleCategoryChange('foundations')}>Fundacjom</button>
                <button onClick={() => handleCategoryChange('organisations')}>Organizacjom pozarządowym</button>
                <button onClick={() => handleCategoryChange('collections')}>Lokalnym zbiórkom</button>
            </section>
            <p className="sentence">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                // dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <table>
                <thead>
                </thead>
                <tbody>
                {displayData.map((item, index) => (
                    <tr key={index}>
                        <td>
                            <h3>{item.title}</h3>
                            <p style={{textAlign: 'right'}}>Lorem ipsum dolor <span>...</span></p>
                            <p>{item.detail}</p>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="pagination">
                {[...Array(totalPages[selectedCategory]).keys()].map(page => (
                    <button
                        key={page}
                        className={page + 1 === currentPage ? 'active' : ''}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default HomeHelp;
