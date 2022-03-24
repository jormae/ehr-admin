import React, { useEffect, useState } from "react";
import ProjectTables from "../../components/dashboard/ProjectTable";
import {
  Row,
  Col,
  Table,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import services from "../../Services";

const Tables = () => {
  const [positions, positionsInfo] = useState({ blogs: [] });
  const fetchPositions = async () => {
    try {
      const { data } = await services.getAllPositions();
      positionsInfo({ blogs: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, [positionsInfo]);
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">{<ProjectTables />}</Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <div>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Position Info</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Overview of the projects
              </CardSubtitle>

              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Position Name</th>
                    <th>Status</th>
                    <th>Organization</th>
                  </tr>
                </thead>
                <tbody>
                  {positions.blogs.map((item) => (
                    <tr
                      key={item.positionId}
                      id={item.positionId}
                      className="border-top"
                    >
                      <td>{item.positionId}</td>
                      <td>{item.positionName}</td>
                      <td>
                        {item.positionStatusId === 1 ? (
                          <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                        ) : (
                          <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                        )}
                      </td>
                      <td>{item.orgName}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Tables;
