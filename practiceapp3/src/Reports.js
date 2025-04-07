import React, { useEffect, useState } from "react";

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5)));
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {data.map((report) => (
          <li key={report.id}>{report.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
