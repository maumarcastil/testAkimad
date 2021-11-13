import ItemSearch from "./ItemSearch";
import React, { useState } from "react";
import { getUsersGithub } from "../actions";
import { Input, message, Row, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SmileOutlined, CloseCircleOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchComponents = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { github } = useSelector((state) => state);

  const { loading } = github;

  const onSearch = () => {
    if (search.trim() === "") {
      message.error("The field is empty!");
      return;
    }

    dispatch(getUsersGithub(search));
  };

  return (
    <>
      <div className="container">
        <Search
          size="large"
          value={search}
          loading={loading}
          onSearch={onSearch}
          enterButton="Search"
          placeholder="input search text"
          onChange={(e) => setSearch(e.target.value)}
        />

        <br />
        <br />
        <Row gutter={[16, 16]}>
          {github?.users &&
            github?.users?.map((user) => (
              <ItemSearch key={user?.id} user={user} />
            ))}
        </Row>
        {github?.users.length < 1 && !search ? (
          <Result
            icon={<SmileOutlined style={{ color: "#fff", fontSize: 120 }} />}
            extra={
              <h2 style={{ color: "#fff" }}>We are awaiting your search!</h2>
            }
          />
        ) : null}
        {/*         {github?.users.length === 0 && search ? (
          <Result
            icon={
              <CloseCircleOutlined style={{ color: "#fff", fontSize: 120 }} />
            }
            extra={<h2 style={{ color: "#fff" }}>No possible results!</h2>}
          />
        ) : null} */}
      </div>
    </>
  );
};

export default SearchComponents;
