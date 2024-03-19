import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { baseUrl } from "../shared";

export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  const navigate = useNavigate();

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
      });
  }, []);

  return (
    <>
      {notFound ? (
        <p>
          The customer with id <b>{id}</b> was not found
        </p>
      ) : null}
      {customer ? (
        <div>
          <input className="m-2 block px-2" type="text" value={customer.id} />
          <input className="m-2 block px-2" type="text" value={customer.name} />
          <input
            className="m-2 block px-2"
            type="text"
            value={customer.industry}
          />
        </div>
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
      <br />
      <Link to="/customers">Go Back</Link>
    </>
  );
}
