import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";
import Content from "../components/Content";

export default function home() {
return (
    <>
        <main className="w-[100%] pt-[2em] bg-orange-200">
            <section className="w-[80%] mx-auto">


            
            <section>
                <Outlet />
            </section>

            <section className="flex">
                <aside>
                    <AsideBar />
                </aside>

                <aside>
                    <Content />
                </aside>
            </section>
            </section>
        </main>
    </>
)
}