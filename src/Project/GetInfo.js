import React from 'react'
import { useState } from 'react'

export default function GetInfo(props) {
    const [name,setName] = useState('');
    const [sl,setSL] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        let itemObject = {
            name: name,
            sl: sl
        }
        props.propFuctionGetInfo(itemObject);
    }
    return (
        <div>
            <h4 className='nhap-thong-tin'>Nhập thông tin</h4>
            <form className='d-flex justify-content-between align-items-center' onSubmit={onSubmit}>
                <input onChange={(event) => setName(event.target.value)} type='text' placeholder='Họ và Tên'></input>
                <input onChange={(event) => setSL(event.target.value)} type='number' placeholder='số lượng ghế'></input>
                <button type='submit' className='btn btn-primary'>Load</button>
            </form>
        </div>
    )
}
