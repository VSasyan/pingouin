import { Flex, Input, Select, Table, TableProps, Tag } from "antd";
import { expressions, Expression } from "../../expression";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import type { SelectProps } from "antd";

// Get the list of all the tags
const tags: string[] = [];
for (const expression of expressions) {
  for (const tag of expression.tags) {
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }
}
tags.sort();
const tagFilters: SelectProps["options"] = [];
for (const tag of tags) {
  tagFilters.push({ label: tag, value: tag });
}

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchTags, setSearchTags] = useState<string[]>([]);

  const columns: TableProps<Expression>["columns"] = [
    {
      title: "Expression",
      dataIndex: "text",
      key: "text",
      render: (text) =>
        searchText ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ""}
          />
        ) : (
          text
        ),
    },
    {
      title: "Étiquettes",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </>
      ),
      width: "30%",
    },
  ];

  // Filtre
  const selectedExpressions: Expression[] = [];
  console.log(searchText);

  for (const expression of expressions) {
    if (
      searchText !== "" &&
      !expression.text.toLowerCase().includes(searchText.toLowerCase())
    ) {
      continue;
    }
    if (searchTags.length) {
      const filteredArray = expression.tags.filter((value) =>
        searchTags.includes(value)
      );
      if (!filteredArray.length) {
        continue;
      }
    }
    selectedExpressions.push(expression);
  }

  return (
    <>
      <Flex gap="20px 0" wrap="wrap" style={{ margin: 20, marginTop: 0 }}>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Filtrer les expressions"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          autoFocus
        />
        <Select
          mode="multiple"
          allowClear
          placeholder="Filtrer les étiquettes"
          defaultValue={[]}
          onChange={setSearchTags}
          options={tagFilters}
          style={{ width: "100%" }}
        />
      </Flex>
      <Table
        columns={columns}
        dataSource={selectedExpressions}
        pagination={{
          position: ["bottomCenter"],
          showSizeChanger: false,
          defaultPageSize: 50,
        }}
      />
    </>
  );
}
