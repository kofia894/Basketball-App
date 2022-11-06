
const PlayerTable = ({players}) => {

    console.log(players[0]);
    
    return ( 
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="border-b">
                    <tr className="bg-zinc-400 text-left">
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4"></th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Player</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Team</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Number</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Position</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Height (cm)</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Weight (kg)</th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">Country</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player) => (
                                <tr className="bg-slate-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center"></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.name}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{player.team}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{player.number}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{player.position}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{player.height}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">{player.weight}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{player.country}</td>
                                </tr>
                            ))
                        }
                        {/* <tr className="bg-slate-100 text-center">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                        </tr>
                        <tr className="bg-slate-100 text-center">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">Cell</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Cell</td>
                        </tr> */}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        );
}
 
export default PlayerTable;
