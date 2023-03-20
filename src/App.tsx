import React, { useEffect, useState } from "react";
// import services
import { getData } from "./services";
// import types
import { DataType } from "./types";

export const App: React.FC = () => {
  const [list, setList] = useState<Array<DataType>>([]); // Display Items
  const [index, setIndex] = useState<number>(0); // Page number
  // handle for button click
  const handleClick = (page: number) => {
    if (page < 0) {
      setIndex(0);
    } else {
      setIndex(page);
    }
  };
  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(index);
      setList(data);
    };
    fetchData().catch(console.error);
  }, [index]);

  return (
    <div className="wrapper">
      <h1>EnableIT Challenge</h1>
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th className="id">No</th>
              <th className="id">Id</th>
              <th className="jobtitle">JobTitle</th>
              <th className="emailaddress">EmailAddress</th>
              <th className="firstnamelastname">FirstNameLastName</th>
              <th className="email">Email</th>
              <th className="phone">Phone</th>
              <th className="company">Company</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody>
            {list.map((item: DataType, index: number) => (
              <tr className="table-row" key={index}>
                <td>{index + 1}</td>
                <td>{item.ID}</td>
                <td>{item.JobTitle}</td>
                <td>{item.EmailAddress}</td>
                <td>{item.FirstNameLastName}</td>
                <td>{item.Email}</td>
                <td>{item.Phone}</td>
                <td>{item.Company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="buttonGroup">
        <button onClick={() => handleClick(index - 1)}>Previous</button>
        <button onClick={() => handleClick(index + 1)}>Next</button>
      </div>
    </div>
  );
};

export default App;
