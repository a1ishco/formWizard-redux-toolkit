import React from 'react';
import { useSelector } from 'react-redux';

const Final = () => {
  
  const data = useSelector((state)=> state.formWizard)


  return (
    <div className="formFinal">
      <table>
  <tr>
    <th>Name Surname</th>
    <th>Email</th>
    <th>Phone number</th>
    <th>Country </th>
  </tr>
  <tr>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.dialCode+" "+data.phone}</td>
    <td>{data.country}</td>
  </tr>
</table>
    </div>
  );
};

export default Final;
