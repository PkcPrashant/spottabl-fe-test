import { useDispatch } from "react-redux";
import { usersAction } from "./redux/slice/users";

function User({user}) {

    const dispatch = useDispatch();

    const deleteUser = () => {
        dispatch(usersAction.deleteUser(user));
    }

    return (
        <div>
            <span>{user}</span>
            <button onClick={deleteUser}>Delete</button>
        </div>
    );
}

export default User;