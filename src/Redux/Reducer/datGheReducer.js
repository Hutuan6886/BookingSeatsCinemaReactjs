import { CHON_GHE, GET_INFO, HUY_GHE } from "../Types/datGheTypes";

const stateDatGhe = {
    gheDangChon: [],

    ten: '',
    soLuongGhe: 0,      //* khi nhập số ghế mong muốn, dùng để làm biến đếm điều kiện cho chọn ghế và hủy ghế
    soLuongGheThanhToan:0,  //* dùng để hiển thị lên thông tin thanh toán
}

const datGheReducer = (state = stateDatGhe, action) => {
    switch (action.type) {
        case CHON_GHE: {
            let gheDangChonCapNhat = [...state.gheDangChon];

            let soLuongGheCapNhat = state.soLuongGhe;

            let index = gheDangChonCapNhat.findIndex(ghe => ghe.soGhe === action.itemGhe.soGhe)


            if (index !== -1) {
                gheDangChonCapNhat.splice(index, 1);
                soLuongGheCapNhat += 1;
                console.log('soLuongGheCapNhat splice', soLuongGheCapNhat);
            }
            else if (index === -1 && soLuongGheCapNhat >= 1) {
                gheDangChonCapNhat.push(action.itemGhe);
                soLuongGheCapNhat -= 1;
                console.log('soLuongGheCapNhat push', soLuongGheCapNhat);
            }

            state.soLuongGhe = soLuongGheCapNhat;
            state.gheDangChon = gheDangChonCapNhat;
            return { ...state }
        }

        case HUY_GHE: {
            let gheDangChonCapNhat = [...state.gheDangChon];

            let soLuongGheCapNhat = state.soLuongGhe;

            let index = gheDangChonCapNhat.findIndex(ghe => ghe.soGhe === action.itemGhe.soGhe)
            if (index !== -1) {
                gheDangChonCapNhat.splice(index, 1);
                soLuongGheCapNhat += 1;
            }

            state.soLuongGhe = soLuongGheCapNhat;
            state.gheDangChon = gheDangChonCapNhat;
            return { ...state }
        }

        case GET_INFO: {
            let tenCapNhat = state.ten;

            let soLuongGheCapNhat = state.soLuongGhe;

            let soLuongGheThanhToanCapNhat = state.soLuongGheThanhToan;

            

            tenCapNhat = action.itemObject.name;
            if (tenCapNhat !== '') {
                soLuongGheCapNhat = action.itemObject.sl;
                soLuongGheThanhToanCapNhat = action.itemObject.sl;
            }
            else {
                alert('Vui lòng điền đầy đủ thông tin !!!');
            }

            state.ten = tenCapNhat;
            state.soLuongGhe = soLuongGheCapNhat;
            state.soLuongGheThanhToan = soLuongGheThanhToanCapNhat;

            return { ...state }
        }
        default: return { ...state }
    }
}

export default datGheReducer;