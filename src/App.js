import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';

import React, { useState } from 'react'
import './App.css';


function App() {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: ""
  })
  const handelInputText = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value)
    setUser({ ...user, [name]: value });
  }

  const [visible, setVisible] = useState(false);

  const handelSubmit = async (event) => {
    event.preventDefault();
    setVisible(true)
  }

  return (
    <div className="App pt-4 m-10 flex justify-center">
      <body>
        <Card title="Simple Card" className='card  max-w-fit'>
          <form onSubmit={handelSubmit}>
            <span className="p-float-label">
              <InputText className='mb-6' type="text" id="name" name="name" value={user.name} onChange={handelInputText} />
              <label htmlFor="name">Username</label>
            </span>
            <span className="p-float-label">
              <InputText className='mb-6' type="text" id="lastname" name="lastname" value={user.lastname} onChange={handelInputText} />
              <label htmlFor="lastname">LastName</label >
            </span>
            <span className="p-float-label">
              <InputText className='mb-6' type="email" id="email" name="email" value={user.email} onChange={handelInputText} />
              <label htmlFor="email">Email</label >
            </span>
            <span className="p-float-label">
              <InputText className='mb-6' type="text" id="phone" name="phone" value={user.phone} onChange={handelInputText} />
              <label htmlFor="phone">Phone</label >
            </span>
            <span className="p-float-label">
              <Button type='submit'>Submit</Button>
            </span>

          </form>
        </Card>
      </body>

      <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
        <ul >
          <li>Name: {user.name}</li>
          <li>Last Name: {user.lastname}</li>
          <li>Email: {user.email}</li>
          <li>Phone: {user.phone}</li>
        </ul>
      </Dialog>
    </div >
  );
}

export default App;
