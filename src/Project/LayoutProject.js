import React, { Component } from 'react'
import DanhSachGhe from './DanhSachGhe'
import ThongTinThanhToan from './ThongTinThanhToan'
import '../css/BaiTapBookingTicket.css'
import GetInfo from './GetInfo'


import { getInfo } from '../Redux/Actions/datGheActions'

import {connect} from 'react-redux'
class LayoutProject extends Component {
    render() {
        return (
            <div style={{ minHeight: '700px' }} className='container-fluid bg position-relative'>
                <div style={{ minHeight: '500px', width: '1200px', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)' }} className='bg-seats position-absolute'>
                    
                    <div style={{ height: '100%' }} className='row'>
                        <div className='col-7'>
                            <DanhSachGhe />
                        </div>
                        <div className='col-5'>
                            <GetInfo propFuctionGetInfo={(itemObject) => this.props.getInfo(itemObject)}/>
                            
                            <ThongTinThanhToan />
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (itemObject) => {
            dispatch(getInfo(itemObject));
        }
    }
}
export default connect(null,mapDispatchToProps)(LayoutProject)
