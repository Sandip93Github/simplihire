import React, { useState, useEffect } from 'react';
import axios from 'axios';


const baseURL = 'http://wren.in:3200/api/sign-up/talent';

export default function Fan() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [change, setChange] = useState(true);
  const [post, setPost] = useState('');



  function createPost(e) {
    e.preventDefault();

    console.log("Sending....")
    axios.post('http://wren.in:3200/api/sign-up/talent', {
      first_name: fname,
      last_name: lname,
      username : username,
      email : email,
      password : password
    }).then(res => {
      console.log(res);
      console.log(res.data);
      console.log("Success");

    });
  }

  function buttonHandler() {
    setChange(!change)
  }


  useEffect(() => {
    axios.get(`${baseURL}`).then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <form className="w-full mx-52">
      <div >
        <div className="my-10 ">
          <label>
            <p className="text-white text-lg py-2">First name :</p>
            <input className="w-full bg-gray-900 border-2 rounded-full border-green-700 text-lg text-white py-2 px-6 focus:border-green-700 outline-0"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              onBlur={(e) => setFname(e.target.value)}
              placeholder="First name"
            />
          </label>
        </div>
        <div className="my-10">
          <label>
            <p className="text-white text-lg py-2">Last name :</p>
            <input className="w-full bg-gray-900 border-2 rounded-full border-green-700 text-lg text-white py-2 px-6 focus:border-green-700 outline-0"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              onBlur={(e) => setLname(e.target.value)}
              placeholder="Last name"
            />
          </label>
        </div>
        <div className="my-10">
          <label>
            <p className="text-white text-lg py-2">Username :</p>
            <input className="w-full bg-gray-900 border-2 rounded-full border-green-700 text-lg text-white py-2 px-6 focus:border-green-700 outline-0"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </label>
        </div>
        <div className="my-10">
          <label>
            <p className="text-white text-lg py-2">Email :</p>
            <input className="w-full bg-gray-900 border-2 rounded-full border-green-700 text-lg text-white py-2 px-6 focus:border-green-700 outline-0"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>
        </div>
        <div className="my-10">
          <label>
            <p className="text-white text-lg py-2">Password :</p>
            <input className="w-full bg-gray-900 border-2 rounded-full border-green-700 text-lg text-white py-2 px-6 focus:border-green-700 outline-0 "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
        </div>

        <div className="flex items-center justify-center my-10">
          <input type="checkbox" name="" id="" onChange={buttonHandler} /><p className='text-lg text-white mx-4'>I agree to the <span className="text-green-700">Term and Conditions.</span></p>
        </div>



        <div className="flex items-center justify-center my-10">
          <button disabled={change} className={'text-2xl text-white rounded-full bg-green-900 px-36 py-2 '} onClick={createPost}>SIGN UP</button>
        </div>
      </div>
    </form>
  );
}