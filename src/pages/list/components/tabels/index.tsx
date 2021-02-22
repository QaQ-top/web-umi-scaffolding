import React from 'react';
import { connect, ConnectRC, TablesModelState, Dispatch, Loading } from 'umi';
import { Form, Table, Input, Button, Divider } from 'antd';
import EmptyBlock from '@components/emptyblock';
import Styles from './style.less';

interface Props {
  tables: TablesModelState;
  dispatch: Dispatch;
  loading: Loading;
}

const Tables: React.FC<Props> = ({ tables, loading, dispatch }) => {
  const { dataList, pagination } = tables;
  const form = Form.useForm()[0];

  const columns = [
    {
      title: '标题1',
      dataIndex: '',
      key: '',
    },
    {
      title: '标题2',
      dataIndex: '',
      key: '',
    },
    {
      title: '标题3',
      dataIndex: '',
      key: '',
    },
    {
      title: '标题4',
      dataIndex: '',
      key: '',
    },
    {
      title: '操作',
      dataIndex: 'status',
      key: 'status',
      render: () => {
        return (
          <>
            <Button type="link">添加</Button>
            <Divider type="vertical" />
            <Button type="link" danger>
              删除
            </Button>
          </>
        );
      },
    },
  ];

  const configPagination = {
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (t: number) => `共 ${t} 条数据`,
    pageSizeOptions: ['10', '20', '50', '100', '200'],
    ...pagination,
    onChange(current?: number, pageSize?: number) {
      dispatch({
        type: 'tables/setPagination',
        pagination: {
          current,
        },
      });
      dispatch({ type: 'tables/getDataList' });
    },
    onShowSizeChange(current?: number, pageSize?: number) {
      dispatch({
        type: 'tables/setPagination',
        pagination: {
          current,
          pageSize,
        },
      });
      dispatch({ type: 'tables/getDataList' });
    },
  };

  return (
    <>
      <Form form={form} layout="inline">
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="状态">
          <Input />
        </Form.Item>
      </Form>
      <Table
        rowKey="shopId"
        className={Styles.table}
        columns={columns}
        dataSource={dataList}
        loading={loading.models.tables}
        // scroll={{
        //   scrollToFirstRowOnChange: true,
        //   y: 'calc(100vh - 315px)'
        // }}
        locale={{
          emptyText: <EmptyBlock>暂无数据</EmptyBlock>,
        }}
        pagination={configPagination}
      />
    </>
  );
};

export default connect(
  ({ tables, loading }: { tables: TablesModelState; loading: Loading }) => {
    return { tables, loading };
  },
)(Tables);
