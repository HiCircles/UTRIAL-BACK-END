import { THEME_SUCCESS } from "../constants/types"

export const setTheme = (theme) = (dispatch) => {
    
    dispatch({
        type: THEME_SUCCESS,
        payload: theme
    });
}