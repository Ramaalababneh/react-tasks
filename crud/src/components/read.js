import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom"; // Correct import

export default function Read() {
const [APIData, setAPIData] = useState([]);
  const navigate = useNavigate(); // Correct initialization

useEffect(() => {
    axios
    .get(`https://651a6245340309952f0d30e1.mockapi.io/fakeData`)
    .then((response) => {
        setAPIData(response.data);
    });
}, []);

const handleUpdateClick = (id) => {
    // Redirect to the "Update" page with the ID of the item to be updated
    navigate(`/update/${id}`); // Correct usage
};

const handleDeleteClick = (id) => {
    // Send a DELETE request to remove the item from the API
    axios
      .delete(`https://651a6245340309952f0d30e1.mockapi.io/fakeData/${id}`)
      .then(() => {
        // Remove the deleted item from the local state
        setAPIData((prevData) => prevData.filter((data) => data.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Button primary onClick={() => handleUpdateClick(data.id)}>
                    Update
                  </Button>
                  <Button negative onClick={() => handleDeleteClick(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
);
}
