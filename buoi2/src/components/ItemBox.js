import React, { useContext, useState } from 'react'
import CustomButton from './CustomButton';
import { TicketContext } from './Context';
const ItemBox = (props) => {
    const { item } = props;
    const {isModal, handleModal} = useContext(TicketContext)

    return (
        <>
            <div className='box_item'>
                <div className='image'>
                    <img src={item.image} />
                </div>
                <div className='content'>
                    <div className='province'>
                        <p>{item.province}</p>
                    </div>
                    <div className='time'>
                        <p>{item.time}</p>
                    </div>
                    <div className='description'>
                        <p>{item.description}</p>
                    </div>
                    <CustomButton hideAndShowModal={handleModal} modalOpen={isModal} />
                </div>
            </div>
        </>
    )
}

export default ItemBox