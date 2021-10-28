import React from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Spinner } from "react-bootstrap";
const ManageEvent = () => {
    const [services, setServices] = React.useState([]);
   const [isSpinner, setIsSpinner] = React.useState(true);
   React.useEffect(() => {
     setIsSpinner(true);
     setTimeout(() => {
       fetch("https://floating-plateau-03198.herokuapp.com/services")
         .then((res) => res.json())
         .then((data) => {
           // console.log(data);
           setServices(data);
           setIsSpinner(false);
         });
     });
   }, []);
    const handleEventDelete = (id) => {
        const singleEvent = services.find(service => service._id === id);
        fetch(`https://floating-plateau-03198.herokuapp.com/eventDelete/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(singleEvent),
        })
          .then((res) => res.json())
          .then((data) => {
              if (data.deletedCount === 1) {
                  const restEvents = services.filter(service => service._id !== id);
                  toast.success('Event deleted successfully!!')
                    setServices(restEvents);
              }
          });
    }
    return (
      <div className="py-4">
        {isSpinner ? (
          <Spinner animation="grow" variant="danger" />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Remove event</th>
              </tr>
            </thead>
            {services.map((service) => (
              <tbody key={service._id}>
                <tr>
                  <td className="text-start fw-bold">{service.workName}</td>
                  <td>
                    <button
                      className="btn text-danger"
                      onClick={() => handleEventDelete(service?._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </div>
    );
};

export default ManageEvent;