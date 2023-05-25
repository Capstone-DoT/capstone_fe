//액션
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginTrue = () => ({type: LOGIN});
export const loginFalse = () => ({type: LOGOUT});

// state의 초기값
const initState = {
    isLogin: false
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLogin: true
            };
        case LOGOUT:
            return {
                isLogin: false
            };
            default:
            return state;
    }
};

export default reducer;