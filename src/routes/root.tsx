import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";


export default function Root() {

    return (
        <div className=" relative  md:mx-20 overflow-hidden">
            <div className=" fixed top-5 z-10 mb-5 w-full ">
                <Header />
            </div>
            <div className="flex gap-2 mt-20 h-screen">
                <div className="  fixed z-10 bottom-0 md:relative w-full md:w-auto  ">
                    <Navigation />
                </div>
                <div className="w-full overflow-y-auto ">
                    <Outlet />
                </div>

            </div>




        </div>
    );
}