import React, { Component } from 'react'
import DataGhe from '../Data/danhSachGhe.json'

import { connect } from 'react-redux';
import { chonGheAction } from '../Redux/Actions/datGheActions';
class DanhSachGhe extends Component {

    renderSoGhe = (item, viTri) => {
        return item.danhSachGhe.map((item, index) => {

            if (viTri === 0) {
                // return <button className='d-inline-block text-center'>{item.soGhe}</button>
                return <button key={index} disabled className='ghe m-2 text-light'>{item.soGhe}</button>
            }
            let disabled = false;
            let addClassGheDuocChon = '';
            if (item.daDat) {
                addClassGheDuocChon = 'gheDuocChon';
                disabled = true;
            }

            let addClassGheDangChon = '';
            let indexGheDangChon = this.props.propgheDangChon.findIndex(ghe => ghe.soGhe === item.soGhe)
            if (indexGheDangChon !== -1) {
                addClassGheDangChon = 'gheDangChon';
            }


            return <button onClick={() => { this.props.chonGhe(item) }} disabled={disabled} key={index} className={`${addClassGheDuocChon} ${addClassGheDangChon} gheTrong m-2`}></button>
        })
    }
    renderHangGhe = () => {
        return DataGhe.map((item, index) => {
            return <div key={index} style={{ fontWeight: 'bold' }} className='mb-3'>
                {item.hang} {this.renderSoGhe(item, index)}
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <div className='pr-5'><div className='gheDuocChon d-inline-block mr-2'></div><span>Ghế đã được chọn</span></div>
                    <div className='pr-5'><div className='gheDangChon d-inline-block mr-2'></div><span>Ghế đang chọn</span></div>
                    <div className='pr-5'><div className='gheTrong d-inline-block mr-2'></div><span style={{ whiteSpace: 'nowrap' }}>Ghế trống</span></div>
                </div>
                <div className='mt-3 text-center'>
                    <h4 style={{ padding: '5px 30px' }} className='text-center bg-danger d-inline'>Hãy Chọn Ghế Của Bạn</h4>
                    <div className='d-flex flex-column justify-content-around mt-3'>
                        {this.renderHangGhe()}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        propgheDangChon: state.datGheReducer.gheDangChon,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (itemGhe) => {
            dispatch(chonGheAction(itemGhe));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe)
