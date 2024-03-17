import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
const NavBar = () => {
    return (
        <div className="navbar flex justify-evenly">
  <div className="flex-1">
    <a className="text-2xl font-extrabold">Your Cook</a>
  </div>
  <div className="flex-1  flex-row gap-6 hidden lg:flex  ">
    <a href=""><h1>Home</h1></a>
    <a href=""><h1>Recipes</h1></a>
    <a href=""><h1>About</h1></a>
    <a href=""><h1>Search</h1></a>
    


  </div>
  <div className="flex-none gap-8">

    <div className="form-control relative">
        <div className="absolute right-4 top-3 hidden lg:flex">
            <CiSearch/>
        </div>
      <input type="text" placeholder="Search" className=" py-2 px-4 rounded-full bg-gray-100  w-20 md:w-auto" />
      
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full bg-green-400 p-2">
          <IoPersonCircleOutline size="2em" />

        </div>
      </div>
      <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
        </div>
    );
};

export default NavBar;