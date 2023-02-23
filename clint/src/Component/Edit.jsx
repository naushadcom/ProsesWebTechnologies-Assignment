import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();

  console.log(id);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState(0);
  const [data, setData] = useState([]);

  console.log(data);

  const navigate = useNavigate();
  const EditData = () => {
    let payload = {
      user: user,
      email: email,
      mobile: mobile,
      address: address,
    };
    axios
      .put(`https://shy-ruby-crow-toga.cyclic.app/updateuser/${id}`, payload)
      .then((res) => {
        console.log(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {" "}
      <h1>Data Update</h1>
      <div className="main">
        <div>
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="User"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder=" Enter your Email"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setMobile(e.target.value)}
            type="text"
            placeholder=" Enter your mobile"
          />
          <br></br>
          <br></br>

          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter your Address"
          />
        </div>
      </div>
      <button onClick={EditData} className="submit" type="submit">
        Update
      </button>
    </div>
  );
};

export default Edit;
