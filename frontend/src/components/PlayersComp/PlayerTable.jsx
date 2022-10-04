
const PlayerTable = () => {
    return ( 
                <>
                <table className="table-fixed w-full overflow-y-auto">
                    <thead className="">
                        <tr>
                        <th className="w-[70%] bg-zinc-300 text-gray-700">Player</th>
                            <th className=" bg-zinc-300 text-gray-700">Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button >
                                    <div className="flex space-x-2 items-center mt-5">
                                            <div className="rounded-full h-10 w-10  bg-white"> 
                                            </div>

                                            <p>Kofi Omari Asante</p>
                                    </div>
                               </button>
                            </td>

                            <div className="flex justify-center">
                                <td className="mt-7">MME</td>        
                            </div>
                            
                        </tr>

                       
                    </tbody>
                </table>
                
                </>

            );
}
 
export default PlayerTable;