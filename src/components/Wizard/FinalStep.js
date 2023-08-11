import React from 'react';
import { useSelector } from 'react-redux';

const Final = () => {
  const dataName = useSelector((state) => state.formWizard.name);
  const dataEmail = useSelector((state) => state.formWizard.email);
  const dataPhone = useSelector((state) => state.formWizard.phone);
  const dataCode = useSelector((state) => state.formWizard.dialCode);
  const dataCountry = useSelector((state) => state.formWizard.country);


  return (
    <div className="formFinal">
      <table>
  <tr>
    <th>Name Surname</th>
    <th>Email</th>
    <th>Phone number</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>{dataName}</td>
    <td>{dataEmail}</td>
    <td>{dataCode+" "+dataPhone}</td>
    <td>{dataCountry}</td>
  </tr>
</table>
    </div>
  );
};

export default Final;
