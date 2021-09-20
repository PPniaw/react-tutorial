
// 把Action的名稱 提出來避免使用時打錯也方便管理跟閱讀
const types = {
    SET_USER_DATA: 'SET_USER_DATA',
    SET_TOKEN: 'SET_TOKEN',
    SET_SIDE_BAR: 'SET_SIDE_BAR',
}

const defaultState = {
    username: 'guest@mail.com',
    name: 'guest',
    role: '',
    imgLink: '',
    token: null,
    showSideBar: true,
}

export const setUserData = userData => ({
    type: types.SET_USER_DATA,
    userData
});

export const setToken = token => ({
    type: types.SET_TOKEN,
    token
});

export const setShowSideBar = showSideBar => ({
    type: types.SET_SIDE_BAR,
    showSideBar
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA:
            return { ...state, username: action.userData.username, role: action.userData.role, name: action.userData.name }
        case types.SET_TOKEN: {
            return { ...state, token: action.token }
        }
        case types.SET_SIDE_BAR: {
            return { ...state, showSideBar: action.showSideBar }
        }
        default:
            return state;
    }
};

export default reducer;