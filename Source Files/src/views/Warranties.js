import React, { useState, useEffect } from "react";
import { getWawrranty } from "../services/getService";

import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

function Warranties() {
  const [warranties, setWarranties] = useState([]);

  useEffect(() => {
    async function fetchWarranties() {
      try {
        const fetchedWarranties = await getWawrranty();
        setWarranties(fetchedWarranties);
      } catch (error) {
        console.error("There was an error ", error);
      }
    }

    fetchWarranties();
  }, []);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Registered Warranties"
          subtitle="ALAF Warranty"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Registered Warranties</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Customer ID
                    </th>
                    <th scope="col" className="border-0">
                      Warranty Code
                    </th>
                    <th scope="col" className="border-0">
                      Invoice Date
                    </th>
                    <th scope="col" className="border-0">
                      Shop Name - Town
                    </th>
                    <th scope="col" className="border-0">
                      Product
                    </th>
                    <th scope="col" className="border-0">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {warranties.map(warranty => (
                    <tr>
                      <td>{warranty.customer_id}</td>
                      <td>{warranty.warranty_code}</td>
                      <td>{warranty.invoice_date}</td>
                      <td>
                        {warranty.shop_name} - {warranty.town}
                      </td>
                      <td>{warranty.product_bought}</td>
                      <td>{warranty.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Warranties;
