import { NavLink } from "react-router-dom";
import data from "../apis/data";
import PropTypes from 'prop-types';


export default function AsideBar({ searchQuery }) {
    const filteredData = data.filter((item) => item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeStyle = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "rgb(242 102 102)" : "",
            color: isActive ? "rgb(247 183 183)" : "",
        };
    };

    if (filteredData.length === 0) {
        return (
            <div className="w-[100%] mt-[2em] shadow-lg shadow-pink-600/40 rounded-xl text-center text-slate-400">
                <p>No results</p>
            </div>
        );
    }
    AsideBar.propTypes = {
        searchQuery: PropTypes.string.isRequired
    };

    return (
        <main className="w-[100%] mt-[2em] shadow-lg shadow-pink-600/40 rounded-xl">
            <section className="w-[100%]">
                <aside className="w-[fit-content] bg-slate-200 rounded-xl">
                    {filteredData.map((item) => (
                        <ul key={item.id}>
                            <li>
                                <NavLink
                                    className="w-[100%] py-3 px-3 inline-block text-slate-800 hover:bg-red-300 transition-all whitespace-nowrap border-y-4 rounded-xl"
                                    to={`content/${item.id}`}
                                    style={activeStyle}
                                >
                                    {item.type}
                                </NavLink>
                            </li>
                        </ul>
                    ))}
                </aside>
            </section>
        </main>
    );
}
