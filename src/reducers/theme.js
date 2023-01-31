import { THEME_FAIL, THEME_SUCCESS } from "../constants/types";

const theme = JSON.parse(localStorage.getItem('theme'));

const initialState = theme ? { isThemeSet: true, theme } : { isThemeSet: false, theme: 'secondary' };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case THEME_SUCCESS:
            return {
                ...state,
                isThemeSet: true,
                theme: payload.theme
            };
        case THEME_FAIL:
            return {
                ...state,
                isThemeSet: false,
            };
        default:
            return state
    }
}