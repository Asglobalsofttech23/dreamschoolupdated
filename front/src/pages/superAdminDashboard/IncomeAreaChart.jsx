// import React, { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';
// import './Chart.css';
// import config from '../../config';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const StudentStrengthChart = () => {
//   const [chartData, setChartData] = useState(null);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${config.apiURL}/students/studentscount`); // Replace with your API endpoint
//         const data = response.data;
//      console.log(data)
//         // Process the data into the format expected by Chart.js
//         const chartData = {
//           labels: data.map(item => item.year),
//           datasets: [
//             {
//               label: 'Student Strength',
//               data: data.map(item => item.student_count),
//               backgroundColor: 'rgba(75, 192, 192, 0.5)',
//               borderColor: 'black',
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
//       {chartData && <Bar data={chartData} options={options} />}
//     </div>
//   );
// };

// export default StudentStrengthChart;

// // import React, { useState, useEffect } from 'react';
// // import { Doughnut } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';
// // import axios from 'axios';
// // import './Chart.css';
// // import config from '../../config';

// // ChartJS.register(CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

// // const StudentStrengthChart = () => {
// //   const [chartData, setChartData] = useState(null);

// //   // Fetch data from backend
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(`${config.apiURL}/students/studentscount`); // Replace with your API endpoint
// //         const data = response.data;
// //         console.log(data);

// //         // Process the data into the format expected by Chart.js
// //         const chartData = {
// //           labels: data.map(item => item.year),
// //           datasets: [
// //             {
// //               label: 'Student Strength',
// //               data: data.map(item => item.student_count),
// //               backgroundColor: [
// //                 'red',
// //                 'blue',
// //                 'yellow',
// //                 'green',
// //                 'pruple',
// //                 'orange',
// //                 // 'rgba(255, 99, 132, 0.6)',   'Red',
// //                 // 'rgba(54, 162, 235, 0.6)',    Blue
// //                 'rgba(255, 206, 86, 0.6)',   // Yellow
// //                 'rgba(75, 192, 192, 0.6)',   // Green
// //                 'rgba(153, 102, 255, 0.6)',  // Purple
// //                 'rgba(255, 159, 64, 0.6)',   // Orange
// //                 'rgba(199, 199, 199, 0.6)'   // Grey
// //               ],
// //               borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)',
// //                 'rgba(199, 199, 199, 1)'
// //               ],
// //               borderWidth: 2,
// //             },
// //           ],
// //         };

// //         setChartData(chartData);
// //       } catch (error) {
// //         console.error('Error fetching data: ', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const options = {
// //     responsive: true,
// //     plugins: {
// //       legend: {
// //         position: 'top',
// //       },
// //       title: {
// //         display: true,
// //         text: 'Yearly Student Strength',
// //       },
// //     },
// //   };

// //   return (
// //     <div style={{ margin: "auto" }}>
// //       {chartData && <Doughnut data={chartData} options={options} />}
// //     </div>
// //   );
// // };

// // export default StudentStrengthChart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chart from 'react-apexcharts';
import { TextField, Avatar, Divider, Button, CardActions, CardContent } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import config from '../../config';
import moment from 'moment';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const FeeCollectionDashboard = ({ isLoading }) => {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const orangeDark = theme.palette.secondary[800];

  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        id: 'support-chart',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: true
        },
        y: {
          formatter: (value, { seriesIndex, dataPointIndex, w }) => {
            return `Total ${value}`;
          },
          title: {
            formatter: (seriesName, { seriesIndex, dataPointIndex, w }) => {
              return w.config.xaxis.categories[dataPointIndex];
            }
          }
        },
        marker: {
          show: false
        }
      },
      xaxis: {
        categories: []
      }
    }
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [feeData, setFeeData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiURL}/feeLogs/feeCollectionDashboard?date=${currentDate}`);
        const data = response.data;
        const names = data.map(item => item.stu_name);
        const totalAmounts = data.map(item => parseFloat(item.total_amount) || 0);
        const total = totalAmounts.reduce((acc, curr) => acc + curr, 0);

        setTotalAmount(total);
        setFeeData(data.map(item => ({
          ...item,
          total_amount: parseFloat(item.total_amount) || 0,
          remainingfee: parseFloat(item.remainingfee) || 0
        })));

        setChartData(prevState => ({
          ...prevState,
          series: [{
            name: 'Total Amount',
            data: totalAmounts
          }],
          options: {
            ...prevState.options,
            xaxis: {
              categories: names
            },
            colors: [orangeDark],
            tooltip: {
              theme: 'light',
              y: {
                formatter: (value) => `Total ${value}`,
                title: {
                  formatter: (seriesName, { seriesIndex, dataPointIndex, w }) => {
                    return w.config.xaxis.categories[dataPointIndex];
                  }
                }
              }
            }
          }
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentDate]);

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: { theme: 'light' }
    };
    ApexCharts.exec('support-chart', 'updateOptions', newSupportChart);
  }, [orangeDark, chartData.options]);

  return (
    <>
      <Card sx={{ bgcolor: 'secondary.light' }}>
        <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
          <Grid item xs={12} display='flex' justifyContent='end'>
            <TextField
              label="Date"
              type="date"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              sx={{ backgroundColor: '#fff', borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="subtitle1" sx={{ color: 'secondary.dark' }}>
                  Total Amount
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" sx={{ color: 'grey.800' }}>
                  {totalAmount.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={205}
        />
      </Card>

      <MainCard content={false}>
        <CardContent>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Fee Details
              </Typography>
            </Grid>
            {feeData.map((student, index) => (
              <Grid item xs={12} key={index}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item xs={6} sm={8}>
                        <Typography variant="subtitle1" color="inherit">
                          {student.stu_name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              {student.total_amount.toFixed(2)}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '5px',
                                bgcolor: student.remainingfee > 0 ? 'error.light' : 'success.light',
                                color: student.remainingfee > 0 ? 'error.dark' : 'success.dark',
                                ml: 2
                              }}
                            >
                              <ChevronRightOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: student.remainingfee > 0 ? 'error.dark' : 'success.dark' }}
                    >
                      {student.remainingfee > 0 ? 'Remaining' : 'Paid'} {student.payingfee} / Balance {student.remainingfee}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
          <Button size="small" disableElevation>
            View All
            <ChevronRightOutlinedIcon />
          </Button>
        </CardActions>
      </MainCard>
    </>
  );
};

FeeCollectionDashboard.propTypes = {
  isLoading: PropTypes.bool
};

export default FeeCollectionDashboard;
