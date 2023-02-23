import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Component/style.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState(0);
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    GetData();
  }, []);
  const GetData = () => {
    axios
      .get("https://shy-ruby-crow-toga.cyclic.app/getdata")
      .then((res) => {
        setData(res.data.userdata);
        console.log(res.data.userdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const PostData = () => {
    let payload = {
      user: user,
      email: email,
      mobile: mobile,
      address: address,
    };

    console.log(payload);
    axios
      .post("https://shy-ruby-crow-toga.cyclic.app/register", payload)
      .then((res) => {
        alert(res.data.message);
        GetData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const Delete = (id) => {
    axios
      .delete(`https://shy-ruby-crow-toga.cyclic.app/deleteuser/${id}`)
      .then((res) => {
        alert(res.data.message);
        GetData();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <div>
        <h1>CRUD Assignment</h1>
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
              type="email"
              placeholder="Enter Your Email"
            />
            <br></br>
            <br></br>
            <input
              onChange={(e) => setMobile(e.target.value)}
              type="number"
              minLength={10}
              maxLength={10}
              placeholder=" Enter your Mobile Number"
            />
            <br></br>
            <br></br>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Enter your Address"
            />
          </div>
          <br />
          <br />
          <button className="submit" onClick={PostData} type="submit">
            Add
          </button>
        </div>
        <hr style={{width:"93.7%",margin:"auto"}}/>
        <h3>.......Displayed User Details.......</h3>

        <div>
          <table>
            <tr>
              <th>user</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tbody>
              {data.map((elem) => {
                return (
                  <tr>
                    <td>{elem.user}</td>
                    <td>{elem.email}</td>
                    <td>{elem.mobile}</td>
                    <td>{elem.address}</td>
                    <td>
                      <Link to={`edit/${elem._id}`}>
                        <button className="edit">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className="del" onClick={() => Delete(elem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Register;
