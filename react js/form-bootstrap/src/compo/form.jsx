import React ,{Accordion} from "react";
import Accordion from "react-bootstrap/Accordion";

function Form() {

  const add = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      alert("Enter data");
      return;
    }

    alert("Success");
    e.target.reset();
  };

  return (
    <div>

      {/* FORM */}
      <form className="mx-auto w-50 mt-5" onSubmit={add}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>

      {/* ACCORDION */}
      <div className="w-50 mx-auto mt-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              This is the first accordion body.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              This is the second accordion body.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>
  );
}

export default Form;
