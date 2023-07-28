import React, { useState } from 'react'
import CustomButton from './CustomButton';
import Modal from './Modal';
const ItemBox = (props) => {
    const { item } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const hideAndShowModal = (status) => {
        setModalOpen(status)
    }
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
                    <CustomButton hideAndShowModal={hideAndShowModal} modalOpen={modalOpen} />
                </div>
            </div>
            <Modal show={modalOpen} setModalOpen={setModalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}

export default ItemBox