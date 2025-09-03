import React, { useState } from 'react';
import {
    BellOutlined,
    DollarOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    ReloadOutlined,
    UsergroupAddOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Table, theme, type MenuProps } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Search from 'antd/es/input/Search';

const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Tổng quan', '1', <PieChartOutlined />),
    getItem('Quản lý tiền lương', '2', <DollarOutlined />),
    getItem('Quản lý nhân sự', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
    ]),
    getItem('Quản lý đào tạo', 'sub2', <UsergroupAddOutlined />, [
        getItem('Tom', '4'),
    ]),
    getItem('Quản lý tài liệu', 'sub3', <FileOutlined />, [
        getItem('Tom', '5'),
    ]),
];

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <>
                <Button className='!mr-3'>Sua</Button>
                <Button color='danger' variant='solid'>Xoa</Button>
            </>
        )
    },
];

const DefaultLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} className=' flex justify-between'>
                    <div className=' flex items-center'>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Search placeholder="input search text" style={{ width: 300 }} />
                    </div>
                    <div>
                        <BellOutlined />
                        <UserOutlined className='!p-3' />
                    </div>
                </Header>
                <Breadcrumb
                    items={[
                        {
                            title: 'Quan ly nhan su',
                        },
                        {
                            title: "Quan ly nhan vien",
                        },
                        {
                            title: "Danh sach nhan vien",
                        },
                    ]}
                    className='!pl-4'
                />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div className='flex justify-between'>
                        <h1 className=' text-4xl font-bold'>Nhan vien</h1>
                        <div className='flex flex-col items-end'>
                            <Button type='primary' className='w-[50%]'> Them moi nhan vien</Button>
                            <div style={{ paddingTop: "15px" }} className='flex items-center'>
                                <Search placeholder="input search text" style={{ width: 300 }} className='!pr-3' />
                                <ReloadOutlined />
                            </div>
                        </div>
                    </div>
                    <Table dataSource={dataSource} columns={columns} pagination={{
                        current: 1,
                        pageSize: 10,
                        total: 100,
                        locale: {
                            items_per_page: "bản ghi / trang"
                        }
                    }} className='!pt-[20px]' />
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by An
                </Footer>

            </Layout>
        </Layout>
    );
};

export default DefaultLayout;