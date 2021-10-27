import React from 'react';
import { FormControl, InputGroup, Button, Row } from "react-bootstrap";
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = React.useState([]);
    const [SearchText, setSearchText] = React.useState("");
    const [searchValue, setSearchValue] = React.useState([]);
    React.useEffect(() => {
        fetch("https://floating-plateau-03198.herokuapp.com/services")
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
              setServices(data)
              setSearchValue(data);
          });
    },[])
    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
    }
    const handleToSearchButton = () => {
        // console.log(SearchText);
        if (SearchText) {
            const s = services.filter((service) =>
                service.workName.toLowerCase().includes(SearchText.toLowerCase())
            );
            setSearchValue(s);
        } else {
            alert("no event found")
        }
       
    };
    return (
      <div className="pt-4 container">
        <section className="pt-5 mt-5">
          <h2 className="fw-bold text-uppercase">
            I grow by helping people in need.
          </h2>
          <InputGroup className="mb-3 w-50 py-4 mx-auto">
            <FormControl
              placeholder="Search...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleSearch}
            />
            <Button
              variant="secondary"
              id="button-addon2"
              onClick={handleToSearchButton}
            >
              Search
            </Button>
          </InputGroup>
        </section>
        <section>
          <Row xs={1} md={3} lg={4} className="g-4 py-5">
            {searchValue?.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </Row>
          
        </section>
      </div>
    );
};

export default Services;