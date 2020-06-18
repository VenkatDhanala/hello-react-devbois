import { handleActions } from 'redux-actions';
import Developer from '../models/Developer';

const GET_ALL_BIOS = 'GET_ALL_BIOS';
const ADD_BIO = 'ADD_BIO';
const ADD_DEV_FORM_CHANGE = 'ADD_DEV_FORM_CHANGE';

const devActions = {
    getAllBiosActionCreator: (developers) => ({
        type: GET_ALL_BIOS,
        developers
    }),
    addBioActionCreator: (developer) => ({
        type: ADD_BIO,
        developer
    }),
    addDevFormChangeActionCreator: (developer) =>({
        type: ADD_DEV_FORM_CHANGE,
        developer
    }),
    reducer: handleActions({
        [GET_ALL_BIOS]: (state, action) => ({
            ...state,
            developers:action.developers
        }),
        [ADD_BIO]: (state, action) => ({
            ...state,
            developers:[...state.developers,action.developer]
        }),
        [ADD_DEV_FORM_CHANGE]: (state, action) => ({
            ...state,
            developer:{...state.developer,...action.developer}
        })
    },{ //initial state
        developers:[],
        developer: new Developer('','','','',0) 
    })
}

export default devActions;