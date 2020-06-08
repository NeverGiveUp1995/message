import { SET_DATA } from './mutation-types';

export default {
    /**
    *
    * @param { LoginState } state
    * @param { string } data
    */
    [SET_DATA](state, { data }) {
        state.data = data;
    },
};
