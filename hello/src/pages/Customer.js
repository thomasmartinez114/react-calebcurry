import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('useEffect')
    const url = "http://localhost:8000/api/customers/" + id;

    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          // redirect to 404 page (new URL)
          navigate("/404");
          // render a 404 component in this page
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);

  return (
    <>
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <Link to="/customers">Go Back</Link>
    </>
  );
}
