// 主页布局样式
// @ts-nocheck

import React, {Fragment, useState} from 'react';
import {Menu, MessagePlugin, Button, Layout, Tabs} from 'tdesign-react';
import {UserAddIcon, AppIcon, CallIcon, SearchIcon, MailIcon, UserIcon, EllipsisIcon} from 'tdesign-icons-react';

const {HeadMenu, MenuItem} = Menu;
const {TabPanel} = Tabs;
const tabs = [];

/**
 * 页面基础布局
 */
const {Header, Content, Footer, Aside} = Layout;
const Home = () => {
    return (
        <>
            <Layout>
                <Header> <Single/></Header>
                <Content><AddTabs/></Content>
                <Footer>Copyright @ 2019-2021 Tencent. All Rights Reserved</Footer>
            </Layout>
        </>
    )
}
export default Home


function Single() {
    const [active, setActive] = useState('0');
    const [darkActive, setDarkActive] = useState('1');

    const operations = () => (
        <div className="tdesign-demo-menu__operations">
            <Button variant="text" shape="square" icon={<SearchIcon/>}/>
            <Button variant="text" shape="square" icon={<MailIcon/>}/>
            <Button variant="text" shape="square" icon={<UserIcon/>}/>
            <Button variant="text" shape="square" icon={<EllipsisIcon/>}/>
        </div>
    );

    const operationsDark = () => (
        <div className="tdesign-demo-menu__operations--dark">
            <Button variant="text" shape="square" icon={<SearchIcon/>}/>
            <Button variant="text" shape="square" icon={<MailIcon/>}/>
            <Button variant="text" shape="square" icon={<UserIcon/>}/>
            <Button variant="text" shape="square" icon={<EllipsisIcon/>}/>
        </div>
    );

    return (
        <Fragment>
            <HeadMenu
                theme="light"
                value={active}
                onChange={(v) => setActive(v)}
                logo={<img src="/images/logo.png" height="50" alt="logo"/>}
                operations={operations()}
                style={{marginBottom: 20}}
            >
                <MenuItem value={'0'} onClick={() => MessagePlugin.info('click 菜单1')}>
                    <span>分类管理</span>
                </MenuItem>
                <MenuItem value={'1'}>
                    <span>文章管理</span>
                </MenuItem>
                <MenuItem value={'2'}>
                    <span>菜单3</span>
                </MenuItem>
                <MenuItem value={'3'}>
                    <span>菜单4</span>
                </MenuItem>
            </HeadMenu>
        </Fragment>
    );
}


for (let i = 1, max = 10; i <= max; ++i) {
    tabs.push({
        value: i,
        label: `选项卡 ${i}`,
    })
}

function AddTabs() {
    const [panels, setPanels] = useState(tabs);
    const [value, setValue] = useState(1);

    return (
        <Tabs
            placement={'top'}
            size={'medium'}
            disabled={false}
            theme={'card'}
            defaultValue={1}
            value={value}
            onChange={setValue}
            addable
            onRemove={({value}) => {
                const newPanels = panels.filter((panel) => panel.value !== value);
                setPanels(newPanels);
            }}
            onAdd={() => {
                const newValue = panels.length > 0 ? panels[panels.length - 1].value + 1 : 1;
                const newPanels = panels.concat({
                    value: newValue,
                    label: `选项卡${panels.length + 1}`,
                });
                setValue(newValue)
                setPanels(newPanels);
            }}
        >
            {panels.map(({value, label}, index) => (
                <TabPanel
                    key={value}
                    value={value}
                    label={label}
                    removable={true}
                    onRemove={() => {
                        setPanels((panels) => {
                            panels.splice(index, 1);
                            return panels;
                        });
                    }}
                >
                    <div className="tabs-content" style={{margin: 20}}>
                        {label}内容区
                    </div>
                </TabPanel>
            ))}
        </Tabs>
    );
}



