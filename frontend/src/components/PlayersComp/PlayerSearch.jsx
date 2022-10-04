import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const PlayerSearch = () => {
    return ( 
                <>
                    <div className="relative">
                        <MagnifyingGlassIcon className="w-4 text-[#242a45] absolute top-3 left-3" />
                        <input className="pl-10 placeholder:text-[#484e6dc6] p-2 bg-slate-200 w-[32vw] rounded-2xl" placeholder="Search..." />
                    </div>
                </>


            );
}
 
export default PlayerSearch;