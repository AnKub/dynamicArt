import { Search } from "react-feather";
import logo from '../../dist/smiling.png';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Передаем запрос в родительский компонент
  };
  Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

  return (
   <>
    <main>
        <header>
            <nav className="flex justify-between bg-slate-200 shadow-lg shadow-pink-600/40  rounded-3xl py-4">
                <div>
                    <img src={logo} alt="Logo" className="inline-block ml-10 mb-2 mr-5 w-6 h-6" />
                    <p className="inline-block text-2xl">{`Arts & Culture`}</p>
                </div>
                <div className="bg-white rounded-3xl py-1 px-2 mr-5 ">
                    <Search className="inline-block mr-1 text-slate-500" />
                    <input
                      type="search"
                      id="site-search"
                      name="q"
                      placeholder="Search anything"
                      className="bg-transparent outline-none text-slate-800"
                      value={query}
                      onChange={handleSearchChange}
                    />
                </div>
            </nav>
        </header>
    </main>
   </>
  );
}
