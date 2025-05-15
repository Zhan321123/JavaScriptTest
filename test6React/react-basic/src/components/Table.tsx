import React from 'react';
import {Table} from 'antd';
import type {TableColumnsType, TableProps} from 'antd';

function convertData(data: any[][], header = true) {
  let columns = [];
  let dataSource = [];

  if (header) {
    const headers = data[0];
    columns = headers.map((title, index) => ({
      title,
      dataIndex: `col${index}`,
      key: `col${index}`
    }));
    data.slice(1).forEach((row, rowIndex) => {
      const item = {key: rowIndex.toString()};
      row.forEach((value, colIndex) => {
        item[`col${colIndex}`] = value;
      });
      dataSource.push(item);
    });
  } else {
    const colCount = data[0].length;
    columns = Array.from({length: colCount}, (_, index) => ({
      title: (index + 1).toString(),
      dataIndex: `col${index}`,
      key: `col${index}`
    }));
    data.forEach((row, rowIndex) => {
      const item = {key: rowIndex.toString()};
      row.forEach((value, colIndex) => {
        item[`col${colIndex}`] = value;
      });
      dataSource.push(item);
    });
  }

  return {columns, dataSource};
}

interface TabularParams {
  data: any[][],
  header?: boolean,
  pageSize?: number // 限制行数
}

interface DataSourceType {
  [key: string]: any;
}

export function Tabular({data, header = false, pageSize = 6}: TabularParams) {
  const {columns, dataSource} = convertData(data, header);
  return (
    <Table dataSource={dataSource} columns={columns} pagination={{pageSize: pageSize,}}/>
  );
}