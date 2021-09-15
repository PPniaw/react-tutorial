const defaultState = {
    username: '信箱',
    name:'姓名',
    role:'',
    link:'',
    token: '',
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_USERNAME':{
            const newState = JSON.parse(JSON.stringify(state));
            newState.username = action.username
            return newState
        }
        case 'FETCH_NAME':{
            const newState = JSON.parse(JSON.stringify(state));
            newState.name = action.name
            return newState
        }
        case 'FETCH_ROLE':{
            const newState = JSON.parse(JSON.stringify(state));
            newState.role = action.role
            return newState
        }
        case 'FETCH_LINK':{
            const newState = JSON.parse(JSON.stringify(state));
            newState.link = action.link
            return newState
        }
        default:
            return state;
    }
};

export default reducer;

// export default (state = defaultState,action) => {
//     switch(action.type){
//         default:
//             return state;
//     }
// }