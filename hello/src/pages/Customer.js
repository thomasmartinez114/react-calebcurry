import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  const [tempCustomer, setTempCustomer] = useState();
  const [notFound, setNotFound] = useState();
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();

  // useEffect to to compare the state objects of customer & tempCustomer
  useEffect(() => {
    if (!customer) return;
    if (!customer) return;
    console.log(customer, tempCustomer); // view changes to the inputs
    let equal = true;
    if (customer.name !== tempCustomer.name) equal = false;
    if (customer.industry !== tempCustomer.industry) equal = false;

    if (equal) setChanged(false);
  });

  useEffect(() => {
    // console.log('useEffect')
    const url = baseUrl + "api/customers/" + id;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          // redirect to 404 page (new URL)
          //   navigate("/404");
          // render a 404 component in this page
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
      });
  }, []);

  function updateCustomer() {
    const url = baseUrl + "api/customers/" + id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempCustomer),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setChanged(false);
        console.log(data);
      })
      .catch();
  }

  return (
    <>
      {notFound ? (
        <p>
          The customer with id <b>{id}</b> was not found
        </p>
      ) : null}
      {customer ? (
        <div>
          <p className="m-2 block px-2">ID: {customer.id}</p>
          <input
            className="m-2 block px-2"
            type="text"
            value={tempCustomer.name}
            onChange={(e) => {
              setChanged(true);
              setTempCustomer({ ...tempCustomer, name: e.target.value });
            }}
          />
          <input
            className="m-2 block px-2"
            type="text"
            value={tempCustomer.industry}
            onChange={(e) => {
              setChanged(true);
              setTempCustomer({ ...tempCustomer, industry: e.target.value });
            }}
          />
          {changed ? (
            <>
              <button
                className="m-2"
                onClick={(e) => {
                  setTempCustomer({ ...customer });
                  setChanged(false);
                }}
              >
                Cancel
              </button>{" "}
              <button className="m-2" onClick={updateCustomer}>
                Save
              </button>
            </>
          ) : null}

          <button
            onClick={() => {
              console.log("Deleting Customer");
              const url = baseUrl + "api/customers/" + id;
              fetch(url, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Something went wrong");
                  }
                  navigate("/customers");
                })
                .catch((e) => {
                  console.log(e);
                });
            }}
          >
            Delete
          </button>
        </div>
      ) : null}
      <br />
      <Link to="/customers">Go Back</Link>
    </>
  );
}
