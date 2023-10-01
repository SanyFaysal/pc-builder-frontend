import React from 'react';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const FeaturedProducts = () => {
  return (
    <div className="px-28">
      <h1 className="text-4xl text-center my-8">Feature Products </h1>
      <div className="flex flex-wrap gap-6 justify-between">
        {[1, 1, 0, 1, 1, 1].map((i, index) => {
          return (
            <Card
              key={index}
              style={{ width: 350 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
