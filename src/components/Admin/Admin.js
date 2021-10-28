import React from 'react';
import V_register_list from './V_register_list/V_register_list';
import AddEvent from './AddEvent/AddEvent'
const Admin = () => {
    const [volunteer, setVolunteer] = React.useState("Volunteer register list");

    const handleVolunteerRegister = (e) => {
        // console.log(e.target.innerText);
        setVolunteer(e.target.innerText);
    }
    const handleAddEvent = (e) => {
        // console.log(e.target.innerText);
        setVolunteer(e.target.innerText);
    };

    return (
      <div className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <ul className="list-unstyled text-start fw-bold">
                <li
                  onClick={handleVolunteerRegister}
                  style={{ cursor: "pointer", padding: "10px" }}
                >
                  Volunteer register list
                </li>
                <li
                  onClick={handleAddEvent}
                  style={{ cursor: "pointer", padding: "10px" }}
                >
                  Add event
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              {(volunteer === "Volunteer register list" && (
                <V_register_list />
              )) ||
                (volunteer === "Add event" && <AddEvent />)}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Admin;