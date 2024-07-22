import React from "react";
import { Table } from "react-bootstrap";
import "./index.css"; // Import your custom CSS

const FixedColumnTable = () => {
  return (
    <div className=" bg-black table-responsive">
      <Table variant="dark" className="table-border-separate"   bordered hover>
        <thead>
          <tr className="">
            <th className="fixed-column  ">
            <div className="d-flex h-100 w-100">#</div>
              </th>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
            <th>Heading 4</th>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
            <th>Heading 4</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="fixed-column ">
              <div className=" d-flex w-100 h-100"> 1 </div>
               </td>
            <td className=" ">
              Data 1 lorem
              fsdklfjdslfjdslfdsklksldvnlsdvnlsdvlsddgklnbsndsklvnsd,mslkdvnsdvnkldssldv
            </td>
            <td>
              Data 1 lorem
              fsdklfjdslfjdslfdsklksldvnlsdvnlsdvlsddgklnbsndsklvnsd,mslkdvnsdvnkldssldv
            </td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 4</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 4</td>
          </tr>
          <tr>
            <td className="fixed-column ">
              <div className="d-flex h-100 w-100">2</div>
              </td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default FixedColumnTable;
