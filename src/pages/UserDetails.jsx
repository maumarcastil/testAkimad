import axios from "axios";
import { Row, Col, Card, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import moment from "moment";
import { StarFilled } from "@ant-design/icons";

const { Meta } = Card;
const UserDetails = () => {
  const { state } = useLocation();
  const [dataUser, setDataUser] = useState(false);
  const [repository, setRepository] = useState(false);
  const [organizations, setOrganizations] = useState(false);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    await axios
      .get(`https://api.github.com/users/${state?.user?.login}`)
      .then((response) => {
        setDataUser(response.data);

        axios
          .get(response.data.organizations_url)
          .then((resOrganization) => setOrganizations(resOrganization.data));

        axios.get(response.data.repos_url).then((res) => {
          setRepository(res.data);
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Row
        style={{
          height: 200,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1f2a48",
        }}
      >
        <Meta
          avatar={<Avatar src={state?.user?.avatar_url} size={150} />}
          title={state?.user?.login}
          description={dataUser ? dataUser?.bio : "No description!"}
        />
      </Row>
      <br />
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col
            xs={24}
            md={12}
            lg={12}
            xl={12}
            style={{ width: "100%" }}
            span={6}
          >
            <h2 style={{ color: "#fff" }}>Organizations</h2>
            {organizations.length > 0 ? (
              organizations.map((organization) => {
                return (
                  <Row>
                    <div
                      className="card-body justify-content-between"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title" style={{ color: "#fcffff" }}>
                          {organization?.login}
                        </h5>
                      </div>
                      <p
                        className="card-text"
                        style={{ color: "#fcffff", fontSize: "medium" }}
                      >
                        {organization?.description
                          ? organization?.description
                          : "No Found!"}
                      </p>
                    </div>
                  </Row>
                );
              })
            ) : (
              <Row>
                <div
                  className="card-body justify-content-between"
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title" style={{ color: "#fcffff" }}>
                      No organizations available!
                    </h5>
                  </div>
                </div>
              </Row>
            )}
          </Col>

          <Col
            xs={24}
            md={12}
            lg={12}
            xl={12}
            style={{
              width: "100%",
              fontSize: "medium",
            }}
            span={6}
          >
            <h2 style={{ color: "#fff" }}>repository</h2>
            {repository.length > 0 ? (
              repository.map((repo) => {
                return (
                  <Row>
                    <div
                      className="card-body justify-content-between"
                      onClick={() => window.location.replace(repo.html_url)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title" style={{ color: "#fcffff" }}>
                          {repo.name}
                        </h5>
                        <h5
                          className="card-title"
                          style={{ color: "#fcffff", fontSize: "small" }}
                        >
                          Last Update
                          {" " + moment(repo.updated_at).endOf("day").fromNow()}
                        </h5>
                      </div>
                      <p className="card-text" style={{ color: "#fcffff" }}>
                        {repo?.description ? repo?.description : "No Found!"}
                      </p>
                    </div>
                  </Row>
                );
              })
            ) : (
              <Row>
                <div
                  className="card-body justify-content-between"
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title" style={{ color: "#fcffff" }}>
                      No repositories available!
                    </h5>
                  </div>
                </div>
              </Row>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserDetails;
