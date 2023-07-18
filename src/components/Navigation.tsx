import { useNavigate } from "react-router-dom";
import { AddSquare, Home, Messages3, Notification, ProfileCircle } from "iconsax-react";
import { useEffect, useState } from "react";

function Navigation() {
  const navigate = useNavigate();
  const [moduleSelection, setModuleSelection] = useState<number>(1);
  useEffect(() => {
    if (window.location.pathname.split("/").pop() === "home") {
      setModuleSelection(1);
    } else if (window.location.pathname.split("/").pop() === "chat") {
      setModuleSelection(2);
    } else if (window.location.pathname.split("/").pop() === "add") {
      setModuleSelection(3);
    } else if (window.location.pathname.split("/").pop() === "notification") {
      setModuleSelection(4);
    } else if (window.location.pathname.split("/").pop() === "profile") {
      setModuleSelection(5);
    }

  }, [window.location.pathname]);

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  };
  return (
    <div className="flex flex-row justify-center md:justify-start items-center md:flex-col gap-4 bg-slate-50 md:w-[14rem] md:h-screen md:py-4 md:pr-8 md:pl-4 py-4 px-6">
      <div className="flex flex-row md:flex-col gap-10 md:gap-4">
        <button onClick={() => handleNavigate("home")}>
          <div className="flex items-center gap-2 ">
            <Home
              variant={moduleSelection === 1 ? "Bold" : "Outline"}
              size="24"
              color="black"
            />
            <div className="hidden md:block">Home</div>
          </div>
        </button>
        <button onClick={() => handleNavigate("chat")}>
          <div className="flex items-center gap-2">
            <Messages3
              variant={moduleSelection === 2 ? "Bold" : "Outline"}
              size="24"
              color="black"
            />
            <div className="hidden md:block">Chat</div>
          </div>
        </button>
        {/* </Link> */}
        <button
          onClick={() => {
            handleNavigate("add");
          }}
        >
          <div className="flex items-center gap-2 ">
            <AddSquare
              variant={moduleSelection === 3 ? "Bold" : "Outline"}
              size="24"
              color="black"
            />
            <div className="hidden md:block">Add</div>
          </div>
        </button>
        <button
          onClick={() => {
            handleNavigate("notification");
          }}
        >
          <div className="flex items-center gap-2 ">
            <Notification
              variant={moduleSelection === 4 ? "Bold" : "Outline"}
              size="24"
              color="black"
            />
            <div className="hidden md:block">Notification</div>
          </div>
        </button>
        <button
          onClick={() => {
            handleNavigate("profile");
          }}
        >
          <div className="flex items-center gap-2 ">
            <ProfileCircle
              variant={moduleSelection === 5 ? "Bold" : "Outline"}
              size="24"
              color="black"
            />
            <div className="hidden md:block">Profile</div>
          </div>
        </button>

      </div>
    </div>
  );
}

export default Navigation;
