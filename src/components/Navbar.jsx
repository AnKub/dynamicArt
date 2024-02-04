import { Activity, Search } from "react-feather";


export default function Navbar() {
  return (
   <>
    <main>
        <header >
            <nav className="flex justify-between bg-slate-200 shadow-lg shadow-indigo-500/40  rounded-3xl py-4">
                {/* logo */}
                <div className="">
                    <Activity className="inline-block ml-10 mb-2 mr-4 text-orange-400" />
                    <p className="inline-block text-2xl">{`Arts & Culture`}</p>
                </div>

                {/* Navlinks */}
                <div className="bg-white rounded-3xl py-1 px-2 mr-5 ">
                    <Search className="inline-block mr-1 text-slate-500"/>
                    <input type="search" id="site-search" name="q" placeholder="Search anything" className="bg-transparent outline-none text-slate-800"/>
                </div>
            </nav>
        </header>
    </main>
   </>
  )
}