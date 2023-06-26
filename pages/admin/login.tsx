// @ts-nocheck
import React from 'react';
import {Form, Input, Button, MessagePlugin, Link} from 'tdesign-react';
import {DesktopIcon, LockOnIcon} from 'tdesign-icons-react';
import {userLogin} from "../../service/userApi"
import {useRouter} from 'next/router'
import {Layout} from 'tdesign-react';

const {Header, Content, Footer, Aside} = Layout;
const {FormItem} = Form;


/**
 * 登录表单
 * @constructor
 */
export default function BaseForm() {
    const router = useRouter()
    const rules = [
        {required: true, message: '不能为空', type: 'warning'}
    ]
    //执行登录
    const onSubmit = (e: any) => {
        console.log(e);
        if (e.validateResult === true) {
            userLogin({
                username: e.fields?.account,
                password: e.fields?.password
            }).then(
                resp => resp.json()
            ).then(data => {
                console.log('data', data)
                //如果状态为200 则跳转到后管页面
                if (data.status == 200) {
                    MessagePlugin.info('登录成功');
                    router.push("/admin/manage")
                } else {
                    //其他则登录失败
                    MessagePlugin.error(data.msg);
                }
            }).catch(r => {
                MessagePlugin.error('登录失败\n' + JSON.stringify(r));
            })
        }
    };

    const jumpAction = () => {
        router.push('/admin/login')
    }

    // @ts-ignore
    const onReset = (e) => {
        console.log(e);
        MessagePlugin.info('重置成功');
    };

    return (
        <>
            <Layout style={{
                backgroundImage: "url('/images/b1.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "auto",
                width: "auto"
            }}>
                <Content>
                    <div className={"login-box"}
                         style={{
                             display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"
                         }}>
                        <div className={"login-container"}
                             style={{backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "10px"}}>
                            <div style={{
                                width: '100%',
                                textAlign: 'center',
                                marginTop: "20px",
                                marginBottom: '20px',
                                fontWeight: 'bold',
                                fontSize: "20px"
                            }}>
                                登录
                            </div>
                            <div style={{width: "350px", margin: "20px"}}>
                                <Form statusIcon={true} onSubmit={onSubmit} onReset={onReset} colon={true}
                                      labelWidth={0}>
                                    <FormItem name="account" rules={rules}>
                                        <Input clearable={true} prefixIcon={<DesktopIcon/>} placeholder="请输入账户名"/>
                                    </FormItem>
                                    <FormItem name="password" rules={rules}>
                                        <Input type="password" prefixIcon={<LockOnIcon/>} clearable={true}
                                               placeholder="请输入密码"
                                        />
                                    </FormItem>
                                    <FormItem>
                                        <Button theme="primary" type="submit" block>
                                            登录
                                        </Button>
                                    </FormItem>
                                </Form>
                                <div style={{width: '100%', textAlign: 'center', marginTop: '10px'}}
                                     onClick={jumpAction}>
                                    没有账号？<Link theme="primary">前往注册</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </>

    );
}

