import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import useAuth from '../../Hooks/useAuth';
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";

const MyEvents = () => {
    const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [isSpinner,setIsSpinner]=useState(true)
  React.useEffect(() => {
      setIsSpinner(true);
       setTimeout(() => {
          fetch(
            `https://floating-plateau-03198.herokuapp.com/events/${user.email}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setEvents(data);
              setIsSpinner(false);
            });
       }, );
    }, [])
    const handleEventCancel = (id) => {
        const singleEvent = events.find(event => event._id === id)
        // console.log(singleEvent);
        fetch(
          `https://floating-plateau-03198.herokuapp.com/eventDelete/${id}`,
          {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(singleEvent),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const restItem = events.filter((event) => event._id !== id);
              setEvents(restItem);
              toast.success("Event deleted successfully");
            }
          });
    }
    
    return (
      <div className="mt-5 pt-5">
        <div className="container">
          <>
            {" "}
            {isSpinner? <Spinner animation="grow" variant="danger" />:
            events.map((event) => (
              <div className="d-flex border my-4 rounded-3 p-3 shadow justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Card.Img
                    variant="top"
                    src={event.img}
                    className="w-25 me-5"
                  />
                  <div className="text-start">
                    <h5>{event.service_Name}</h5>
                    <p>{event.Date}</p>
                  </div>
                </div>
                <button
                  className="text-end btn btn-danger"
                  onClick={() => handleEventCancel(event._id)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </>
        </div>
      </div>
    );
};

export default MyEvents;