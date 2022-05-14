import User from "./User";
import { useSelector } from "react-redux";

function UserList() {

    const users = useSelector(state => state.users).filteredUsers;

    return (
        !users.length ?
            <div>No User Found</div> :
            users.map((user, index) => {
                return <User key={index} user={user} />
            })
    );
}

export default UserList;