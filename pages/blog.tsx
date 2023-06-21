// 主页布局样式
import React from 'react';
import { Layout } from 'tdesign-react';

const { Header, Content, Footer, Aside } = Layout;
const Home=()=>{
    return (<>
        <Layout style={{
            width:'100vw',
            height:'100vh'
        }}>
            <Aside>Aside</Aside>
            <Layout>
                <Content>Content</Content>
                <Footer>Copyright @ 2023 Tencent. All Rights Reserved</Footer>
            </Layout>
        </Layout>
    </>)
}

export default Home

