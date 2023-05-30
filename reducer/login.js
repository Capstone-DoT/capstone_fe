//액션
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginTrue = (token) => ({type: LOGIN, token});
export const loginFalse = () => ({type: LOGOUT});

// state의 초기값
const initState = {
    isLogin: false,
    setToken: null
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLogin: true,
                setToken: action.token
            };
        case LOGOUT:
            return {
                isLogin: false,
                setToken: null
            };
            default:
            return state;
    }
};

export default reducer;