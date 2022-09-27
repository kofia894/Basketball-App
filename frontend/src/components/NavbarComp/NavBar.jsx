import NavbarButtons from "./NavbarButtons";
import Searchbar from "./Searchbar";
import { UserIcon ,BellIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
     return ( 
          <>
               <div className="hidden w-full h-12 p-1 lg:flex lg:justify-between">
                    {/* Search bar */}
                    <Searchbar />
                    {/* End of search bar */}

                    {/* Help, notification, user buttons */}
                    <div className="flex space-x-6">
                         <NavbarButtons icon={BellIcon} />
                         <NavbarButtons icon={UserIcon} />
                    </div>
                    {/* End of help, notification, user buttons */}
               </div>
          </>
      );
}
 
export default NavBar;