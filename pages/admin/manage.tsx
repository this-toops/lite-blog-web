// 主页布局样式
// @ts-nocheck
import React, {Fragment, useState} from 'react';
import {Layout} from 'tdesign-react';
import {Menu} from 'tdesign-react';

const {MenuItem} = Menu;



/**
 * 页面基础布局
 */
const {Header, Content, Footer, Aside} = Layout;
const Home = () => {
    return (<>
        <Layout style={{
            width: '100vw',
            height: '100vh'
        }}>
            <Aside>
                <SingleSide/>
            </Aside>
            <Layout>
                <Content>Content</Content>
                <Footer>Copyright @ 2023 Tencent. All Rights Reserved</Footer>
            </Layout>
        </Layout>
    </>)
}
export default Home


/**
 * 管理页面导航栏
 * @constructor
 */
export function SingleSide() {
    const [active, setActive] = useState('0');

    return (
        <Fragment>
            <Menu
                value={active}
                onChange={(v) => setActive(v)}
                logo={<img src="/images/logo.png" height="50" alt="logo"/>}
                style={{marginRight: 20}}
            >
                <MenuItem value={'0'} target={"_top"} href={"/admin/menuManage"}>
                    <span>分类管理</span>
                </MenuItem>
                <MenuItem value={'1'}>
                    <span>文章管理</span>
                </MenuItem>
                <MenuItem value={'2'} disabled>
                    <span>根目录</span>
                </MenuItem>
            </Menu>
        </Fragment>
    );
}


// export default SingleSide;
