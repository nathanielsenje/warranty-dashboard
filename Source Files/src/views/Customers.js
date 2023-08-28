import React, { useState, useEffect } from "react";
import { getCustomer } from "../services/getService";

import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const fetchedCustomers = await getCustomer();
        setCustomers(fetchedCustomers);
      } catch (error) {
        console.error("There was an error ", error);
      }
    }

    fetchCustomers();
  }, []);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Registered Customers"
          subtitle="ALAF Warranty"
          className="text-sm-left"
        />
      </Row>

      {/* Default Light Table */}
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Registered Customers</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Customer Name
                    </th>
                    <th scope="col" className="border-0">
                      Customer ID
                    </th>
                    <th scope="col" className="border-0">
                      E-Mail
                    </th>
                    <th scope="col" className="border-0">
                      Phone
                    </th>
                    <th scope="col" className="border-0">
                      ID Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr>
                      <td>{customer.customer_name}</td>
                      <td>{customer.customer_id}</td>
                      <td>{customer.email}</td>
                      <td>{customer.mobile_number}</td>
                      <td>{customer.id_number}</td>
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

export default Customers;
