import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, ConnectRC, LoginModelState, Dispatch, Loading, history} from 'umi';
import { Form, Input, Button, Checkbox } from 'antd';
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';
import Styles from './style.less';

import Popup, { PopupRef } from '@/components/popup';

interface Props {
  login: LoginModelState;
  dispatch: Dispatch;
  loading: Loading;
};


const Login: ConnectRC<Props> = (props) => {
  console.log(props)
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 }
  };
  const onFinish = async () => {
    const user = form.getFieldsValue();
    console.log('user...', form.getFieldsValue());
    // await Store.toLogin(user);
    // userStore.setUserInfo({ username: user.username });
    history.replace('/');
  };

  let popupRef = useRef<PopupRef>(null);
  console.log(popupRef)

  return (
    <div className={Styles.loginBox}>
      <div className={Styles.loginContent}>
        <div className={Styles.loginContent_block}>
          <p>运维后台</p>
          <Form
            form={form}
            {...layout}
            className={Styles.formBox}
            name="basic"
            initialValues={{}}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              validateFirst={true}
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              validateFirst={true}
              rules={[{ required: true, message: '请输入登录密码' }]}
            >
              <Input.Password placeholder="请输入登录密码" prefix={<UnlockOutlined />} />
            </Form.Item>
            {/* <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
            </Form.Item> */}
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};


export default connect(({ login, loading }: { login: LoginModelState, loading: Loading}) => {
  return { login, loading, }
})(Login);
