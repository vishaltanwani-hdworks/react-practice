import { FETCH_DATA } from "./types.js"
import { getUpcomingMatches } from "../../apis/fetchData"

export const fetchData = () => async dispatch => {
    const data = await getUpcomingMatches()
    if(!data.errors) {
        dispatch({
            type: FETCH_DATA,
            payload: data.data.getUpcomingMatches
        })
    }
}