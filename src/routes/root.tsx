import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Item from "../components/itemSection";


export default function Root() {

    return (
        <div className="fixed  md:w-[100rem] md:mx-20 mx-3">
            <div className=" fixed top-5 z-10 mb-5 w-full ">
                <Header />
            </div>
            <div className=" fixed top-20 mb-20 z-10 md:mx-20 ">
                <Item />
            </div>
            <div className="flex gap-10 mt-20 h-screen">
                <div className="  fixed z-10 bottom-0 md:relative w-full md:w-auto overflow-hidden mt-14">
                    <Navigation />
                </div>
                <div className="w-full overflow-y-auto mt-14 ">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}