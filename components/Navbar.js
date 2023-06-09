import SignoutButton from "./SignoutButton";
import Link from "next/link";
const Navbar = () => {
  
    return (
      <nav className="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-full fixed top-0 left-0">

<div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="#" className="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  </a>
  <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button>
  <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
    <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
        <SignoutButton>Sign Out</SignoutButton>
      </li>
    </ul>
  </div>
</div>
</nav>
)}
export default Navbar