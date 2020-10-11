import { LOGIN_SUCCEEDED } from '../actions/actionTypes';

const defalutUser = {
    name: "giang",
    pass: "giang"
}


const userReducer = (user = defalutUser, action) => {
    switch (action.type) {
        case LOGIN_SUCCEEDED:
            {
                console.log("Chay vao reducer")
                return user;
            }

        default:
            return user;
    }
}

export default userReducer;