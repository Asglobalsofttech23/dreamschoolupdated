import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './Chart.css';
import config from '../../config';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentStrengthChart = () => {
  const [chartData, setChartData] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiURL}/students/studentscount`); // Replace with your API endpoint
        const data = response.data;
     console.log(data)
        // Process the data into the format expected by Chart.js
        const chartData = {
          labels: data.map(item => item.year),
          datasets: [
            {
              label: 'Student Strength',
              data: data.map(item => item.student_count),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'black',
              borderWidth: 2,
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Yearly Student Strength',
      },
    },
  };

  return (
    <div style={{ margin: "auto" }}>
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
};

export default StudentStrengthChart;

// import React, { useState, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';
// import './Chart.css';
// import config from '../../config';

// ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

// const StudentStrengthChart = () => {
//   const [chartData, setChartData] = useState(null);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${config.apiURL}/students/studentscount`); // Replace with your API endpoint
//         const data = response.data;
//         console.log(data);

//         // Process the data into the format expected by Chart.js
//         const chartData = {
//           labels: data.map(item => item.year),
//           datasets: [
//             {
//               label: 'Student Strength',
//               data: data.map(item => item.student_count),
//               backgroundColor: [
//                 'red',
//                 'blue',
//                 'yellow',
//                 'green',
//                 'pruple',
//                 'orange',
//                 // 'rgba(255, 99, 132, 0.6)',   'Red',
//                 // 'rgba(54, 162, 235, 0.6)',    Blue
//                 'rgba(255, 206, 86, 0.6)',   // Yellow
//                 'rgba(75, 192, 192, 0.6)',   // Green
//                 'rgba(153, 102, 255, 0.6)',  // Purple
//                 'rgba(255, 159, 64, 0.6)',   // Orange
//                 'rgba(199, 199, 199, 0.6)'   // Grey
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(199, 199, 199, 1)'
//               ],
//               borderWidth: 2,
//             },
//           ],
//         };

//         setChartData(chartData);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Yearly Student Strength',
//       },
//     },
//   };

//   return (
//     <div style={{ margin: "auto" }}>
//       {chartData && <Doughnut data={chartData} options={options} />}
//     </div>
//   );
// };

// export default StudentStrengthChart;

