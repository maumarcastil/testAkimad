import React from "react";
import { Card, Avatar, Col } from "antd";
import { useNavigate } from "react-router";

const { Meta } = Card;

const ItemSearch = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Col xs={24} md={12} lg={8} style={{ width: "100%" }} span={6}>
      <Card
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() =>
          navigate("/UserDetails", {
            state: {
              user: user,
            },
          })
        }
      >
        <Meta
          avatar={<Avatar src={user.avatar_url} size={80} />}
          title={user.login}
          description={user?.bio ? user?.bio : "No description!"}
        />
      </Card>
    </Col>
  );
};

export default ItemSearch;
