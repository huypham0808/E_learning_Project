import React from 'react'
import { Input, Space } from 'antd';

const Inputform = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
    >
        <Input status="warning" placeholder="Họ và tên" />
        <Input status="warning" placeholder="Địa chỉ Email" />
        <Input status="warning" placeholder="Số điện thoại" />
    </Space>
);


export default Inputform;