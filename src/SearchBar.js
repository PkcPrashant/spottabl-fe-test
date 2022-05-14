import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usersAction } from "./redux/slice/users";

function SearchBar() {

    const [user, setUser] = useState('');
    const dispatch = useDispatch();

    const adduser = () => {
        dispatch(usersAction.addUser(user));
        setUser('');
    }

    useEffect(() => {
        dispatch(usersAction.filterUser(user));
    }, [dispatch, user]);

    return (
        <div>
            <h1>Heading</h1>
            <input type="text" value={user} onChange={(event) => setUser(event.target.value)} />
            <button onClick={adduser}>Add</button>
        </div>
    );
}

export default SearchBar;