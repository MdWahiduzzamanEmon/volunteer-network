import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("https://floating-plateau-03198.herokuapp.com/addevent", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.insertedId) {
              toast("Event Add Successfully!!");
              reset();
            }
          });
        
        // console.log(data)
    };
    return (
      <div>
        <div className="container mb-5 pb-5">
          <h3 className="text-start pb-4">Add Event-</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="eventaddForm shadow-lg p-4">
            <div className="row text-start">
              <div className="col-md-6">
                <h6>Event Title</h6>
                <input {...register("workName")} placeholder="Title" />
                <h6>Description</h6>
                <textarea
                  {...register("Description")}
                  placeholder="Description"
                />
              </div>
              <div className="col-md-6">
                <h6>Event Date</h6>
                <input {...register("Date")} type="date" />

                <h6>Banner</h6>
                <input {...register("img")} placeholder="Image Link" />
              </div>
                    </div>
                    <button className='btn btn-danger text-end mb-4 fw-bold'>Add Event</button>
          </form>
        </div>
      </div>
    );
};

export default AddEvent;