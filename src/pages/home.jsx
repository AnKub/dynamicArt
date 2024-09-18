import { useState } from "react";
// import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            
            <main className="w-[100%] pt-[2em] bg-red-200">
                <section className="w-[80%] mx-auto">                   
                    <section>
                    <Navbar onSearch={setSearchQuery} />
                    </section>
                    <section className="flex">
                        <aside>
                            <AsideBar searchQuery={searchQuery} />
                        </aside>
                        <aside>
                            <Content />
                        </aside>
                    </section>
                </section>
            </main>
        </>
    );
}
