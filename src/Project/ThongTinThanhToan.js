import React, { Component } from 'react'

import { connect } from 'react-redux';
import { huyGheAction } from '../Redux/Actions/datGheActions';
class ThongTinThanhToan extends Component {

    renderTongTien = () => {
        return this.props.propgheDangChon.reduce((tongTien,ghe,index)=> {
            return tongTien += ghe.gia;
        },0).toLocaleString()
    }

    renderGheDangChon = () => {
        return this.props.propgheDangChon.map((itemGhe, index) => {
            return <tr key={index}>
                <td className='border'>{itemGhe.soGhe}</td>
                <td className='border'>{itemGhe.gia}</td>
                <button style={{transform:'translateY(50%)'}} onClick={() => {this.props.dispatch(huyGheAction(itemGhe))}} className='bg-transparent'><i class="fa fa-times-circle text-danger"></i></button>
            </tr>
        })
    }
    render() {
        return (
            <div>
                <h4>Thanh Toán</h4>
                <div>
                    <p className='font-weight-bold'>Họ Và Tên:<span>{this.props.propTen}</span></p>
                    <p className='font-weight-bold'>Số lượng ghế:<span>{this.props.propSLGhe}</span></p>
                </div>
                <table className="table text-light">
                    <thead>
                        <tr>
                            <th className='border'>Số Ghế</th>
                            <th className='border'>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGheDangChon()}
                        <tr>
                            <td className='text-right font-weight-bold'>Tổng Tiền:</td>
                            <td>{this.renderTongTien()}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        propgheDangChon: state.datGheReducer.gheDangChon,
        propTen: state.datGheReducer.ten,
        propSLGhe: state.datGheReducer.soLuongGhe,
    }
}

export default connect(mapStateToProps)(ThongTinThanhToan)
