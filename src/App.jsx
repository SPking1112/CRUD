import './App.css';
import Crud from './crud';
import Tables from './table';
import Pop from './pop';
import { useState } from 'react';


function App() {

  // Edit
  const[edit,setedit] = useState(false);

  // Temp ---------------
  const [tempdata, settempdata] = useState({});
  // PopUp Edit----------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) =>{ 
    if(rowData){
      settempdata(rowData)
    }else{
      settempdata({
        Address: null,
        Email: null,
        Name: null,
        PhoneNO: null,
        Qualification: null
      })
    };
    setShow(true)};

    console.log(tempdata,"clickedData---------");
    
  return (
    <div className='web'>
      {/* <h1>Table</h1> */}
      <Pop popshow={show} popclose={handleClose} temp={tempdata} settemp={settempdata} ref={edit} setRef={setedit} />
      <Tables boxShow={handleShow} ref={edit} setRef={setedit} create={tempdata} />
      <Crud />
    </div>
  )
}

export default App
