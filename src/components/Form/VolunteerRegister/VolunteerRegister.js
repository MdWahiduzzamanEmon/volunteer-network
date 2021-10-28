import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../logos/Group 1329.png'
import { useParams } from "react-router-dom";
import './VolunteerRegister.css'
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';


const VolunteerRegister = () => {
    const { ServiceId } = useParams()
    const [singleService, setSingleService] = useState({})
    const {user }=useAuth();

    useEffect(() => {
        fetch(
          `https://floating-plateau-03198.herokuapp.com/services/${ServiceId}`
        ).then(res => res.json()).then(data => {
            console.log(data);
            setSingleService(data)
        })
    },[])


    console.log(ServiceId);
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
        data["Full_Name"] = user?.displayName;
        data["Email"] = user?.email;
        data["service_Name"] = singleService?.workName;
        data["img"] = singleService?.img;
        console.log(data);

        fetch("https://floating-plateau-03198.herokuapp.com/v_register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
              if (data.insertedId) {
                  toast.success("As a volunteer registration successfull!");
                  reset();
              }
          });
    }
    return (
      <div className="py-5 my-5">
        <div>
          <img src={logo} alt="" className="img-fluid w-25" />
        </div>
        <div className=" v_width border border-3 mx-auto mt-5">
          <h4 className="fw-bold pt-4">Register as a Volunteer</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column w-75 mx-auto my-4 pb-4 v_register"
          >
            <input {...register("Full_Name")} value={user.displayName || ""} />
            <input {...register("Email")} value={user.email || ""} />
            <input
              {...register("service_Name")}
              value={singleService.workName || ""}
            />
            <input {...register("Date")} type="date" required />

            <input
              {...register("Description")}
              placeholder="Why you want to be a volunteer..."
            />

            <button className="btn btn-danger my-4">Register</button>
          </form>
        </div>
      </div>
    );
};

export default VolunteerRegister;