import { handleActions } from 'redux-actions';
const GET_ALL_BIOS = 'GET_ALL_BIOS';

const devActions = {
    getAllBiosActionCreator: (developers) => ({
        type: GET_ALL_BIOS,
        developers
    }),
    reducer: handleActions({
        [GET_ALL_BIOS]: (state, action) => ({
            ...state,
            developers:action.developers
        })
    },{
        developers:[] //initial state
    })
}

export default devActions;