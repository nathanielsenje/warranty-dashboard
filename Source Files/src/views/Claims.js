import React, { useState, useEffect } from "react";
import { getClaims } from "../services/getService";

import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

function Claims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    async function fetchClaims() {
      try {
        const fetchedClaims = await getClaims();
        setClaims(fetchedClaims);
      } catch (error) {
        console.error("Error fetching claims:", error);
      }
    }
    fetchClaims();
  }, []);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Registered Claims"
          subtitle="ALAF Warranty"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Registered Claims</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Customer Name
                    </th>
                    <th scope="col" className="border-0">
                      Warranty Code
                    </th>
                    <th scope="col" className="border-0">
                      Defect/Failure
                    </th>
                    <th scope="col" className="border-0">
                      Date Filed
                    </th>
                    <th scope="col" className="border-0">
                      Status
                    </th>
                    <th scope="col" className="border-0">
                      Action
                    </th>
                  </tr>
                </thead>

                {claims.map(claim => (
                  <tbody>
                    <tr>
                      <td>{ claim.warranty_code }</td>
                      <td>{ claim.claim_type }</td>
                      <td>{ claim.claim_description }</td>
                      <td>{ claim.createdAt }</td>
                      <td>{ claim.claim_status }</td>
                      <td>
                        <a href="#">Edit</a> | <a href="#">Delete</a>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Claims;
