import { GiSkills } from "react-icons/gi";

import { GoProjectSymlink } from "react-icons/go";
import { GrAppleAppStore } from "react-icons/gr";
import { LuPanelLeftOpen } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { clearAllUserErrors, logout } from "@/store/slices/userSlice";
import { TooltipContent } from "@radix-ui/react-tooltip";
import {
  Home as Homeicon,
  Package,
  History,
  Mails,
  CircleUser,
  LogOut,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import Dashboard from "./sub-components/Dashboard";
import Projects from "./sub-components/Projects";
import Skills from "./sub-components/Skills";
import Applications from "./sub-components/Applications";
import Timeline from "./sub-components/Timeline";
import Message from "./sub-components/Message";
import Account from "./sub-components/Account";

const Home = () => {
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (message) {
      toast.success(message);
    }
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [error, message, dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 hidden w-14 flex-col border-r bg-background sm:flex z-50">
          <nav className="flex flex-col items-center gap-4 px-4 sm:py-5">
            <Link className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full">
              <Package className="h-6 w-6 transition-all group-hover:scale-110" />
              <span className="sr-only">Dashboard</span>
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Dashboard"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Dashboard")}
                  >
                    <Homeicon className="w-5 h-5" />
                    <span className="sr-only">Dashboard </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Dashboard
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Projects"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Projects")}
                  >
                    <GoProjectSymlink className="w-5 h-5" />
                    <span className="sr-only">Projects </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Projects{" "}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Skills"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Skills")}
                  >
                    <GiSkills className="w-5 h-5" />
                    <span className="sr-only">Skills </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Skills
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Applications"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Applications")}
                  >
                    <GrAppleAppStore className="w-5 h-5" />
                    <span className="sr-only">Applications </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Applications
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Timeline"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Timeline")}
                  >
                    <History className="w-5 h-5" />
                    <span className="sr-only">Timeline </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Timeline
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Messages"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Messages")}
                  >
                    <Mails className="w-5 h-5" />
                    <span className="sr-only">Messages </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Messages
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Account"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={() => setActive("Account")}
                  >
                    <CircleUser className="w-5 h-5" />
                    <span className="sr-only">Account </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Account
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
          <nav className="mt-auto flex-col items-center gap-4 px-2 mb-2 ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      active === "Logout"
                        ? "text-accent-foreground bg-accent"
                        : "text-muted-foreground"
                    } transition-colors hover:text-foreground md:h-8 md:w-8`}
                    onClick={handleLogout}
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="sr-only">Logout </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-white px-2 py-1 rounded-lg shadow-lg"
                >
                  Logout
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <header className="sticky top-0 z-30 h-14 flex items-center  gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 max-[900px]:h-[100p x]">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <LuPanelLeftOpen className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className={`group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base`}
                >
                  <MdDashboard className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Dashboard</span>
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Dashboard"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Dashboard")}
                >
                  <Homeicon />
                  Dashboard
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Projects"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Projects")}
                >
                  <GoProjectSymlink className="w-4 h-4" />
                  Projects
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Skills"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Skills")}
                >
                  <GiSkills className="w-5 h-5" />
                  Skills
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Applications"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Applications")}
                >
                  <GrAppleAppStore className="w-5 h-5" />
                  Applications
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Timeline"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Timeline")}
                >
                  <History className="w-5 h-5" />
                  Timeline
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Messages"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Messages")}
                >
                  <Mails className="w-5 h-5" />
                  Messages
                </Link>

                <Link
                  href="#"
                  className={`flex items-center gap-4 px-2.5 ${
                    active === "Account"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActive("Account")}
                >
                  <CircleUser className="w-5 h-5" />
                  Account
                </Link>

                <Link
                  className={
                    "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  }
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-4 md:grow-0 sm:ml-16 sm:mt-5">
            <img
              src={user && user.avatar && user.avatar.url}
              alt="avatar"
              className="w-20 h-20 rounded-full max-[900px]:hidden"
            />
            <h1 className="text-4xl max-[900px]:text-2xl">
              Welcome back, {user.fullName}
            </h1>
          </div>
        </header>
        {(() => {
          switch (active) {
            case "Dashboard":
              return <Dashboard />;
              break;
            case "Projects":
              return <Projects />;
              break;
            case "Skills":
              return <Skills />;
              break;
            case "Applications":
              return <Applications />;
              break;
            case "Timeline":
              return <Timeline />;
              break;
            case "Message":
              return <Message />;
              break;
            case "Account":
              return <Account />;
              break;

            default:
              break;
          }
        })()}
      </div>
    </>
  );
};

export default Home;
