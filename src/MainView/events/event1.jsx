import {
  Card,
  Button,
  Form,
  Input,
  Table,
  Space,
  Modal,
  message,
  Pagination,
  Popconfirm,
} from "antd";
import { useEffect, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  loadDataAPI,
  insertAPI,
  updateByIdAPI,
  delByIdAPI,
} from "../../server/categories";
function Event1() {
  const data1 = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const [isShow, setIsShow] = useState(false); // 控制modal显示和隐藏
  const [myForm] = Form.useForm(); // 可以获取表单元素实例
  const [query, setQuery] = useState({}); // 查询条件
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0); // 总数量
  const [currentId, setCurrentId] = useState(""); // 当前id，如果为空表示新增
  useEffect(() => {
    loadDataAPI(query).then((res) => {
      setData(res.data.list);
      setTotal(res.data.total);
    });
  }, [query]);
  useEffect(() => {
    if (!isShow) {
      //关闭弹窗后，晴空框
      setCurrentId("");
    }
  }, [isShow]);
  return (
    <>
      <Card
        title="列表npm"
        extra={
          <>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setIsShow(true);
              }}
            ></Button>
          </>
        }
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form
            layout="inline"
            onFinish={(v) => {
              // message.success('查询成功');
              setQuery(v);
            }}
          >
            <Form.Item label="名字">
              <Input type="text" placeholder="请输入关键字" allowClear/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" icon={<SearchOutlined />}></Button>
            </Form.Item>
          </Form>
          <Table
            dataSource={data1}
            rowKey="id"
            columns={[
              {
                title: "序号",
                width: 80,
                align: "center",
                render(v, r, i) {
                  return <>{i + 1}</>;
                },
              },
              {
                title: "名字",
                dataIndex: "name",
                width: 180,
              },
              {
                title: "age",
                width: 120,
                align: "center",
                dataIndex: "age",
              },
              {
                title: "简介",
                dataIndex: "desc",
              },
              {
                title: "操作",
                align: "center",
                width: 110,
                render: (v, r) => (
                  <Space size="middle">
                    <Button type="primary"
                    onClick={async () =>{
                      window.location.href = '/src/App.jsx';
                    }}>Detail </Button>
                    <Button
                      type="primary"
                      onClick={() => {
                        setIsShow(true);
                        setCurrentId(r.id);
                        myForm.setFieldValue(r);
                      }}
                    >
                      Change
                    </Button>
                    <Popconfirm title="是否删除"
                    onConfirm={
                      async () =>{
                      await delByIdAPI(r.id);
                      setQuery({});
                    }}>
                      <Button
                      type="primary"
                      danger
                      >Delect
                      </Button>
                    </Popconfirm>
                  </Space>
                ),
              },
            ]}
            pagination={{
              total,
              onChange(page) {
                setQuery({
                  ...query,
                  page,
                });
              },
            }}
          ></Table>
        </Space>
      </Card>
      <Modal
        title="编辑"
        open={isShow}
        // 点击遮罩层时不关闭
        maskClosable={false}
        onCancel={() => setIsShow(false)}
        // 关闭modal的时候清楚数据
        destroyOnClose
        onOk={() => {
          // message.success('保存成功');
          myForm.submit(); //手动触发表单的提交事件
        }}
      >
        <Form
          // 表单配合modal一起使用的时候，需要设置这个属性，要不然关了窗口之后不会清空数据
          preserve={false}
          onFinish={async (v) => {
            // message.success('保存成功');
            // console.log(v);
            if (currentId) {
              await updateByIdAPI(currentId, v); //修改
            } else {
              await insertAPI(v); //新增
            }
            message.success("保存成功");
            setIsShow(false);
            setQuery({}); // 重置查询条件，取数据
          }}
          labelCol={{ span: 3 }}
          form={myForm}
        >
          <Form.Item
            label="名字"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入名字",
              },
            ]}
          >
            <Input placeholder="请输入名字" />
          </Form.Item>
          <Form.Item label="简介" name="desc">
            <Input.TextArea placeholder="请输入简介" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Event1;
