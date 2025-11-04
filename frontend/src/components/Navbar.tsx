"use client";
import { STATUS } from "@/lib/global/status";
import { LogOut, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginOrRegister = pathname === "/login" || pathname === "/register";

  const [searchbar, setSearchBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [openprofile, setOpenProfile] = useState<boolean>(false)
  const [menu, setMenu] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [order, setOrder] = useState(false)
  const [home, setHome] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    setToken(storedToken);
    if (status === STATUS.SUCCESS && storedToken) {
      router.push('/menu')
    }
  }, []);

  return (
    <header className="bg-black text-white fixed w-full py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-50">
        {/* Left: Logo */}
        <div className=" space-x-2">
          <a href="/" className="flex items-center"> <img src="logo.png" className="h-12 w-12" alt="logo" />          <p className="text-[22px] font-bold md:text-2xl text-sky-100">Prashu.</p></a>
        </div>

        {/* Center: Desktop Nav */}
        {!isLoginOrRegister && token && (
          <nav className="hidden lg:flex space-x-10 font-medium absolute left-1/2 -translate-x-1/2 items-center">

            <a href="/" className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${home ? 'text-sky-300 after:scale-x-100' : 'hover:text-sky-300'
              }`} onClick={() => setHome(true)}>Home</a>
            <a href="/menu" className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${menu ? 'text-sky-300 after:scale-x-100' : 'hover:text-sky-300'
              }`} onClick={() => setMenu(true)}>Menu</a>
            <a href="/orders" className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${order ? 'text-sky-300 after:scale-x-100' : 'hover:text-sky-300'
              }`} onClick={() => setOrder(true)}>Orders</a>
            <a href="/favorite" className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${favorite ? 'text-sky-300 after:scale-x-100' : 'hover:text-sky-300'
              }`} onClick={() => setFavorite(true)}>Favorite</a>

          </nav>
        )}

        {/* Right: Search + Login/Logout */}
        {!isLoginOrRegister && (
          <div className="flex items-center space-x-4 " >
            <div className="lg:relative lg:flex sm:hidden">

              <button onClick={() => router.push("/cart")}>

                <ShoppingCart className="cursor-pointer" />
              </button>


              <div className="w-[10px] h-[10px] rounded-full bg-white absolute left-4 bottom-[0.5px] flex justify-center items-center text-black text-xs">
                0


              </div>
            </div>



            {/* Search */}

            <div className="flex items-center space-x-2">

              <User onClick={() => setOpenProfile(!openprofile)} className="text-white cursor-pointer" />
              {openprofile && <div className="flex flex-col gap-2 relative">
                <ul className="absolute border border-white px-2 py-3 top-3 right-3 bg-gray-700 rounded-xl">
                  <li className=" text-white cursor-pointer">Profile</li>
                  <li onClick={handleLogout} className="cursor-pointer">Logout</li>


                </ul>
              </div>
              }
              {!searchbar ? (
                <Search className="text-white cursor-pointer" onClick={() => setSearchBar(true)} />
              ) : (
                <X className="text-white cursor-pointer" onClick={() => setSearchBar(false)} />
              )}
              {searchbar && (
                <input
                  type="search"
                  autoFocus
                  className="bg-white text-black px-2 py-1 rounded-xl text-center w-36 focus:w-52 outline-none text-sm transition-all duration-300"
                  placeholder="Search"
                />
              )}
            </div>

            {/* Login/Logout Buttons */}
            {!token && (
              <button
                onClick={() => router.push("/login")}
                className="px-3 py-2 border border-white rounded-xl hover:bg-gray-200 hover:text-black"
              >
                Login
              </button>
            )}

            {/* Mobile Hamburger Menu */}
            {!isLoginOrRegister && (
              <div className="lg:hidden">
                {menuOpen ? (
                  <X size={35} className="text-white cursor-pointer" onClick={() => setMenuOpen(false)} />
                ) : (
                  <Menu size={35} className="text-white cursor-pointer" onClick={() => setMenuOpen(true)} />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {
        menuOpen && token && !isLoginOrRegister && (
          <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-6 text-2xl font-semibold transition-all duration-300 lg:hidden z-40">
            <button className="absolute top-5 right-5" onClick={() => setMenuOpen(false)}>
              <X size={35} className="text-black" />
            </button>

            <a href="/menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="/orders" onClick={() => setMenuOpen(false)}>Orders</a>
            <a href="/favorite" onClick={() => setMenuOpen(false)}>Favorite</a>
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="lg:px-4 lg:py-2 lg:cursor-pointer lg:border lg:border-black lg:rounded-xl lg:hover:bg-black lg:hover:text-white "
            >
              Logout
            </button>
          </div>
        )
      }
    </header >
  );
};

export default Navbar;
