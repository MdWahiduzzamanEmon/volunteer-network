import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
const V_register_list = () => {
    const [members, setMembers] = React.useState([])
    const [isSpinner,setIsSpinner]=React.useState(true)
    useEffect(() => {
        setIsSpinner(true);
    setTimeout(() => {
        fetch("http://localhost:5000/members")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
              setMembers(data);
              setIsSpinner(false);
          });
    });
},[])

    return (
      <div>
        {isSpinner ? (
          <Spinner animation="grow" variant="danger" />
        ) : (
          <div>
            <h3 className="text-start pb-4">Volunteer register list-</h3>

            <Table striped bordered hover className="text-start">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Registration Date</th>
                  <th>Volunteer list</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {members?.map((member) => (
                  <tr>
                    <td>{member?.Full_Name}</td>
                    <td>{member?.Email}</td>
                    <td>{member?.Date}</td>
                    <td>{member?.service_Name}</td>
                    <td>delete</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
};

export default V_register_list;