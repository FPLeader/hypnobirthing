const ISSERVER = typeof window === "undefined";

const data = {
    currentUser: !ISSERVER && localStorage.user ? JSON.parse(localStorage.user) : '',
    isLogIn: !ISSERVER && localStorage.isLogIn ? JSON.parse(localStorage.isLogIn) : '',
    tempUser: !ISSERVER && localStorage.tempUser ? JSON.parse(localStorage.tempUser) : '',
};

// eslint-disable-next-line default-param-last
export default function AuthReducer(state = data, action: any) {
    const temp = { ...state };
    switch (action.type) {
        case 'setUser':
            temp.currentUser = action.data;
            temp.isLogIn = 'true';
            temp.tempUser = '';
            return temp;
        case 'logout':
            temp.currentUser = '';
            temp.isLogIn = '';
            temp.tempUser = '';
            return temp;
        case 'setTempUser':
            temp.tempUser = action.data;
            return temp;
        default:
            return temp;
    }
}
