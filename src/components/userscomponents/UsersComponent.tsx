import React from 'react';
import {getAllUsers} from "@/src/services/api.service";
import UserComponent from "@/src/components/userscomponents/UserComponent";

const UsersComponent = async () => {
    const users = await getAllUsers();

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;