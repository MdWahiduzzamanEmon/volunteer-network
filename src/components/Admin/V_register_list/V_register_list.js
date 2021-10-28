import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Spinner } from "react-bootstrap";
import { toast } from 'react-toastify';
const V_register_list = () => {
    const [members, setMembers] = React.useState([])
    const [isSpinner,setIsSpinner]=React.useState(true)
    useEffect(() => {
        setIsSpinner(true);
    setTimeout(() => {
        fetch("https://floating-plateau-03198.herokuapp.com/members")
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setMembers(data);
            setIsSpinner(false);
          });
    });
},[])
    const handleMemberDelete = (id) => {
      const singleMember = members.find((member) => member._id === id);
      // console.log(singleMember);
      fetch(`https://floating-plateau-03198.herokuapp.com/eventDelete/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(singleMember),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
              const restItem = members.filter((member) => member._id !== id);
              setMembers(restItem);
              toast.success("Member deleted successfully");
          }
        });
    }
    return (
      <div className="my-5">
        {isSpinner ? (
          <Spinner animation="grow" variant="danger" />
        ) : (
          <div>
            <h3 className="text-start pb-4">Volunteer register list-</h3>

            <div className="text-start">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registration Date</th>
                    <th>Volunteer list</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {members.map((member) => (
                  <tbody key={member?._id}>
                    <tr>
                      <td>{member?.Full_Name}</td>
                      <td>{member?.Email}</td>
                      <td>{member?.Date}</td>
                      <td>{member?.service_Name}</td>
                      <td>
                        <button
                          className="btn text-danger"
                          onClick={() => handleMemberDelete(member?._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        )}
      </div>
    );
};

export default V_register_list;