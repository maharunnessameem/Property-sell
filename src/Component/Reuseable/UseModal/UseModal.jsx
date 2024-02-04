import { Modal } from 'antd';
import React from 'react';

const UseModal = ({ children, isModalOpen, setIsModalOpen }) => {
    return (
        <Modal
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={() => setIsModalOpen(false)}
            footer={null}
        >
            {children}
        </Modal>
    );
};

export default UseModal;