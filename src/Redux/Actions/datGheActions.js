// todo: chứa toàn bộ hàm dispatch actions

import { CHON_GHE, GET_INFO, HUY_GHE } from "../Types/datGheTypes"

export const chonGheAction = (itemGhe) => {
    return {
        type: CHON_GHE,
        itemGhe
    }
}

export const huyGheAction = (itemGhe) => {
    return {
        type: HUY_GHE,
        itemGhe
    }
}

export const getInfo = (itemObject) => {
    return {
        type: GET_INFO,
        itemObject
    }
}