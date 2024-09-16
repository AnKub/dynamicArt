
import { NavLink } from "react-router-dom"
import data from "../apis/data"

export default function AsideBar() {

    const activeStyle = ({isActive}) =>  {
            return {
                backgroundColor : isActive ? "rgb(242 102 102)" : "",
                color : isActive ?"rgb(247 183 183)" : "",
            
            }
        }

return (
    <>
        <main className="w-[100%] mt-[2em] shadow-lg shadow-pink-600/40 rounded-xl">
            <section className="w-[100%] ">
                <aside className="w-[fit-content] bg-slate-200  rounded-xl">
                    {
                        data.map((data)=>(
                            <ul key={data.id} >
                                <li className="">
                                    <NavLink className="w-[100%] py-3 px-3 inline-block text-slate-800 hover:bg-red-300 transition-all whitespace-nowrap border-y-4  rounded-xl" to={`content/${data.id}`} style={activeStyle}>
                                        {data.type}
                                    </NavLink>
                                </li>
                            </ul>
                        ))
                    }
                </aside>
            </section>
        </main>
    </>
)
}