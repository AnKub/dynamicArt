
import { NavLink } from "react-router-dom"
import data from "../apis/data"

export default function AsideBar() {

    const activeStyle = ({isActive}) =>  {
            return {
                backgroundColor : isActive ? "rgb(154 52 18)" : "",
                color : isActive ?"rgb(249 115 22)" : "",
            
            }
        }

return (
    <>
        <main className="w-[100%] mt-[2em] shadow-lg shadow-indigo-500/40">
            <section className="w-[100%]">
                <aside className="w-[fit-content] bg-slate-200">
                    {
                        data.map((data)=>(
                            <ul key={data.id} >
                                <li className="">
                                    <NavLink className="w-[100%] py-3 px-3 inline-block text-slate-800 hover:bg-orange-200 transition-all whitespace-nowrap border-y-4 " to={`content/${data.id}`} style={activeStyle}>
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