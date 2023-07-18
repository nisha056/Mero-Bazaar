import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";


export default function Root() {

    return (
        <div className=" relative  md:mx-20 overflow-hidden">
            <div className="z-10 my-5 mx-2 w-full ">
                <Header />
            </div>
            <div className="flex gap-2 mt-5">
                <div className="  fixed z-10 bottom-0 md:relative w-full md:w-auto ">
                    <Navigation />
                </div>
                <div className="w-full ">
                    <Outlet />
                </div>

            </div>




        </div>
    );
}