import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useEffect, useState } from 'react';
import { IoPersonAddSharp } from "react-icons/io5";
import Spinner from 'react-bootstrap/Spinner';

function Tables(click) {

    console.log(click, 'delete');

    const [tabledata, settabledata] = useState(null)

    // Initial Call ---------
    useEffect(() => {
        fetch('https://67d7ed1a9d5e3a10152c9b40.mockapi.io/UserDB/User', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            // Do something with the list of tasks
            settabledata(tasks.reverse());

        }).catch(error => {
            // handle error
            console.log(error, "--Error--");

        })
    }, [click.ref])


    // Delete call --------
    const deleteuser = (id) => {

        fetch(`https://67d7ed1a9d5e3a10152c9b40.mockapi.io/UserDB/User/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with deleted task
            alert("Deleted Successfully");
            click.setRef(!click.ref);
        }).catch(error => {
            // handle error
            console.log("Delete error")
        })
    }



    // console.log(tabledata,"--Data---");

    return (
        <>
            <button id='btn' onClick={() => click.boxShow()}> <IoPersonAddSharp /> </button>
            <div className="table-container">
                <Table className='table2' striped hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNo</th>
                            <th>Address</th>
                            <th>Qualification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabledata && tabledata.map((crrdata, sn) => {
                            return (
                                <>
                                    <tr>
                                        <td> {sn + 1}</td>
                                        <td> {crrdata.Name} </td>
                                        <td> {crrdata.Email} </td>
                                        <td> {crrdata.PhoneNO} </td>
                                        <td> {crrdata.Address} </td>
                                        <td> {crrdata.Qualification} </td>
                                        <td className='p-1'>
                                            <Stack direction="horizontal" gap={2}>
                                                <Button onClick={() => click.boxShow(crrdata)} variant="light" className='m-3'>Edit</Button>
                                                <Button onClick={() => deleteuser(crrdata.id)} variant="dark">Delete</Button>
                                            </Stack></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Tables;