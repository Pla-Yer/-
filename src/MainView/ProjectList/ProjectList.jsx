// import React, { Component } from 'react'

// export default class DeviceList extends Component {
//   render() {
//     return (
//       <div>DeviceList</div>
//     )
//   }
// }
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Times',
    dataIndex: 'Times',
    key: 'Times',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'project1',
    Times: 2,
    address: ' Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'project2',
    Times: 3,
    address: ' Park',
    tags: ['failure'],
  },
  {
    key: '3',
    name: 'project3',
    Times: 2,
    address: ' Park',
    tags: ['loading', 'teach'],
  },
];
const ProjectList = () => <Table columns={columns} dataSource={data} />;
export default ProjectList;
