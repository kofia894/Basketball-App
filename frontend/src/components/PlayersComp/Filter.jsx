const Filter = () => {
    return ( 
                <>

                    <div className="space-y-3 px-3 md:flex md:space-y-0 md:space-x-2">

                        <select name="Players" id="Players" className="text-black w-full rounded-sm">
                            <option value="#">All Players</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>

                        <select name="Teams" id="players" className="text-black w-full rounded-sm">
                            <option value="#">All Teams</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>

                        <select name="Position" id="players" className="text-black w-full rounded-sm">
                            <option value="#">All Positions</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>

                        <select name="Country" id="players" className="text-black w-full rounded-sm">
                            <option value="#">All Countries</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>



                </> 
            );
}
 
export default Filter;