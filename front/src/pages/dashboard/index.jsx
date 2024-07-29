// // import { useEffect, useState } from 'react';
// // import { Grid, Typography, Box, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// // import axios from 'axios';
// // import config from '../../config';
// // import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
// // import MainCard from 'components/MainCard';
// // // import MonthlyBarChart from './MonthlyBarChart';
// // import UniqueVisitorCard from './UniqueVisitorCard';
// // import { Link } from 'react-router-dom';
// // import { PiStudent } from "react-icons/pi";
// // import Button from '@mui/material/Button';

// // import { IoPeopleSharp } from "react-icons/io5";
// // import { IoPerson } from "react-icons/io5";
// // import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// // export default function DashboardDefault() {
// //   const [studentsCount, setStudentsCount] = useState([]);
// //   const [staffsCount, setStaffsCount] = useState(0);
// //   const [totalRevenue, setTotalRevenue] = useState();
// //   const [selectedYear,setSelectedYear] = useState('2024-2025')
 
// //  const [studentPresent, setStudentPresent] = useState()
// //  const [staffPresent,setStaffPresent]=  useState()
// //  const [siblingsCount, setSiblingCount] = useState(0);
// //  const [siblingsData, setSiblingData] = useState([]);
// //  const staffPng = 
// //   useEffect(() => {
   
      

// //     axios.get(`${config.apiURL}/staffs/getStaffs`)
// //       .then((res) => {
// //         const count = res.data.length;
// //         setStaffsCount(count);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching staff:', error);
// //       });


// //       axios.get(`${config.apiURL}/students/getStudentsCount`)
// //       .then((res) => {
// //         setStudentsCount(res.data.total_count);
       
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching student:', error);
// //       });
  
 
// //   }, []);
 
   

// //   useEffect(()=>{
// //     axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
// //       .then((res) => {
// //         setTotalRevenue(res.data)
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching revenue:', error);
// //       });
// //   },[])

// //   useEffect(() => {
// //     axios.get(`${config.apiURL}/students/getSiblings`)
// //       .then((res) => {
// //         const { siblingsCount, siblingsData } = res.data;
// //         setSiblingCount(siblingsCount);
// //         setSiblingData(siblingsData);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching siblings:', error);
// //       });
// //   }, []);
// //   //student present
// //   useEffect(()=>{
// //     axios.get(`${config.apiURL}`)
// //     .then((res)=>{
// //       setStudentPresent(res.data)

// //     })
// //     .catch((error)=>{
// //       console.error('Error fetching staff:', error);
// //     })
// //   },[])


// //   //staffPresent
// //   useEffect(()=>{
// //     axios.get(`${config.apiURL}`)
// //     .then((res)=>{
// //       setStaffPresent(res.data)

// //     })
// //     .catch((error)=>{
// //       console.error('Error fetching staff:', error);
// //     })
// //   },[])
// //   useEffect(()=>{
// //     axios.get(`${config.apiURL}`)
// //     .then((res)=>{
// //       setStudentPresent(res.data)

// //     })
// //     .catch((error)=>{
// //       console.error('Error fetching staff:', error);
// //     })
// //   },[])
// //   useEffect(()=>{
// //     axios.get(`${config.apiURL}`)
// //     .then((res)=>{
// //       setStudentPresent(res.data)

// //     })
// //     .catch((error)=>{
// //       console.error('Error fetching staff:', error);
// //     })
// //   },[])

// // const handleFeesClick= ()=>{

// //   <Link to='/feePendingStu'>
// //         <AnalyticEcommerce title="Total siblings"   />
// //         </Link>

// // }
// // const handleTotalStudentClick =()=>{

// // }
// // const handleTotalStaffClick = ()=>{

// // }
// // const handleRevenueClick = ()=>{
// //   <Link to='/sibStu'>
// //   <AnalyticEcommerce title="Total siblings" count={siblingsCount ? `${siblingsCount.siblingsCount}` : "Loading..."}  isLoss color="warning"  />
// //   </Link>
// // }
// //   return (
// //     <Grid  container
// //     rowSpacing={4.5}
// //     columnSpacing={2.75}
// //     style={{ background: "linear-gradient(to right,lightblue, pink)" }}>
// //       {/* row 1 */}
// //       <Grid item xs={12} sx={{ mb: -2.25 }}>
// //         <Typography variant="h5" >Dashboard</Typography>
// //       </Grid>


     
// //       <Grid item xs={12} sm={6} md={4} lg={3}>
// //       <Link to='/newAdmission' style={{color:'white',textDecoration:"none"}} className='hover'>
// //   <div
// //     variant="contained"
// //     style={{
// //       backgroundColor: "#5251AC",
// //       fontWeight: "bold",
// //       height: "130px",
// //       width: "250px",
// //       borderRadius: "15px",
// //       padding: "10px",
// //     }}
// //   >
// //     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px",  }}
// //     className='hover'>
        
// //        New Enquiry Admission 
       
  
// //     </span>
// //     <div style={{ display: "flex", alignItems: "center",justifyContent: "center"  }}>
// //       <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
// //       {/* <h2 style={{ marginLeft: "auto", color: "white", height:"30px", width:"50px" }}>{studentsCount}</h2> */}
// //     </div>
// //     <div>
// //       {/* <p style={{color:"white"}}>This Month</p> */}
// //       <h6 style={{ marginLeft: "auto", color: "white", height:"100px", width:"10px" }}></h6>
// //     </div>
// //   </div></Link>
// // </Grid>
   
// // <Grid item xs={12} sm={6} md={4} lg={3}>
// // <Link to='/StudentsBooking' style={{color:"white",textDecoration:"none"}}>
// //   <div
// //     variant="contained"
// //     style={{
// //       backgroundColor: "#6789F5",
// //       fontWeight: "bold",
// //       height: "130px",
// //       width: "250px",
// //       borderRadius: "15px",
// //       padding: "10px",
// //     }}
// //   >
// //     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}} 
// //     onClick={handleTotalStudentClick} className='hover'>
         
// //          Booking Students   
  
// //     </span>
// //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //       {/* Assuming PiStudent is an icon component */}
// //       <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
// //       {/* Display the count */}
// //       <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>
// //         {/* {studentsCount} */}
// //       </h2>
// //     </div>
// //   </div></Link>
// // </Grid>




// // <Grid item xs={12} sm={6} md={4} lg={3}>
// // <Link to='/allstudentlist' style={{color:"white",textDecoration:"none"}}>
// //   <div
// //     variant="contained"
// //     style={{
// //       backgroundColor: "#9EA0D8",
// //       fontWeight: "bold",
// //       height: "130px",
// //       width: "250px",
// //       borderRadius: "15px",
// //       padding: "10px",
// //     }}
// //   >
// //     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
// //     onClick={handleTotalStaffClick}
// //     className='hover'
// //     >
// //         New  Admissions
      
  
// //     </span>
// //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //       {/* Assuming IoPeopleSharp is an icon component */}
// //       <IoPeopleSharp style={{ height: "40px", width: "50px", color: "white" }} />
// //       {/* Display the count */}
// //       <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>{studentsCount}</h2>
// //     </div>
// //   </div></Link>
// // </Grid>


     

// // {/*      
// // <Grid item xs={12} sm={6} md={4} lg={3}>
// //   <div
// //     variant="contained"
// //     style={{
// //       backgroundColor: "#FA8892",
// //       fontWeight: "bold",
// //       height: "130px",
// //       width: "250px",
// //       borderRadius: "15px",
// //       padding: "10px",
// //     }}
// //   >
// //     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
// //     className='hover' onClick={handleRevenueClick}>
// //    <Link to='/sibStu' style={{color:"white",textDecoration:"none"}}> 
// //    Total revenue 
// //    </Link> 
// //     </span>
// //     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //       {/* Assuming RiMoneyRupeeCircleFill is an icon component */}
// //       {/* <RiMoneyRupeeCircleFill style={{ height: "40px", width: "50px", color: "white" }} /> */}
// //       {/* Display the total revenue amount  
// //       <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>
// //        {totalRevenue ? `${totalRevenue.total_paid_amount}` : "Loading..."} 
// //        </h2>
// //       <h4 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}></h4>
// //     </div>
// //   </div>
// // </Grid> */}
// //       {/* row 2 */}
// //       <Grid item xs={12} md={7} lg={8} >
// //         {/* <UniqueVisitorCard /> */}
// //       </Grid>
      
    
// // {/* bottom 4  */}
  

// //     </Grid>
// //   );
// // }










// // =======================================================================================//




// import { useEffect, useState } from 'react';
// import { Grid, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import config from '../../config';
// import UniqueVisitorCard from './UniqueVisitorCard';
// import SmallCalendar from './SmallCalender'; // Import the new calendar component
// import { Link } from 'react-router-dom';
// import { PiStudent } from "react-icons/pi";
// import { IoPeopleSharp } from "react-icons/io5";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// // Register all necessary components for Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function DashboardDefault() {
//   const [studentsCount, setStudentsCount] = useState(0);
//   const [staffsCount, setStaffsCount] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState(null);
//   const [selectedYear, setSelectedYear] = useState('2024-2025');
//   const [lineChartData, setLineChartData] = useState({ labels: [], values: [] });

//   useEffect(() => {
//     axios.get(`${config.apiURL}/staffs/getStaffs`)
//       .then((res) => {
//         setStaffsCount(res.data.length);
//       })
//       .catch((error) => {
//         console.error('Error fetching staff:', error);
//       });

//     axios.get(`${config.apiURL}/students/getStudentsCount`)
//       .then((res) => {
//         setStudentsCount(res.data.total_count);
//       })
//       .catch((error) => {
//         console.error('Error fetching students:', error);
//       });
//   }, []);

//   useEffect(() => {
//     axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
//       .then((res) => {
//         setTotalRevenue(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching revenue:', error);
//       });
//   }, [selectedYear]);

//   useEffect(() => {
//     axios.get(`${config.apiURL}/dashboard/monthlyData`)
//       .then((res) => {
//         setLineChartData({
//           labels: res.data.labels,
//           values: res.data.values
//         });
//       })
//       .catch((error) => {
//         console.error('Error fetching line chart data:', error);
//       });
//   }, []);

//   const chartData = {
//     labels: lineChartData.labels,
//     datasets: [
//       {
//         label: 'New Admission',
//         data: lineChartData.values.map(item => item.newAdmissions),
//         backgroundColor: 'rgba(0, 0, 255, 0.2)',
//         borderColor: 'blue',
//         borderWidth: 1,
//       },
//       {
//         label: 'Total Students',
//         data: lineChartData.values.map(item => item.totalStudents),
//         backgroundColor: 'rgba(0, 255, 0, 0.2)',
//         borderColor: 'green',
//         borderWidth: 1,
//       }
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             return `${context.dataset.label}: ${context.raw}`;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Month',
//         },
//         stacked: true, // Stacked bar chart
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Count',
//         },
//         stacked: true, // Stacked bar chart
//       },
//     },
//   };

//   return (
//     <Grid container rowSpacing={4.5} columnSpacing={2.75} style={{ background: "linear-gradient(to right,lightblue, pink)" }}>
//       <Grid item xs={12} sx={{ mb: -2.25 }}>
//         <Typography variant="h5">Dashboard</Typography>
//       </Grid>

//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box
//           sx={{
//             backgroundColor: "#5251AC",
//             fontWeight: "bold",
//             height: "130px",
//             width: "100%",
//             borderRadius: "15px",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             transition: "transform 0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
//             }
//           }}
//         >
//           <Link to='/addStudent' style={{ color: 'white', textDecoration: "none" }}>
//             <Typography variant="h6" sx={{ mb: 1 }}>New Admission</Typography>
//           </Link>
//           <PiStudent style={{ height: "70px", width: "70px", color: "white" }} />
//           <Typography variant="h4" sx={{ mt: 1, color: "white" }}>{studentsCount}</Typography>
//         </Box>
//       </Grid>

//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box
//           sx={{
//             backgroundColor: "#6789F5",
//             fontWeight: "bold",
//             height: "130px",
//             width: "100%",
//             borderRadius: "15px",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             transition: "transform 0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
//             }
//           }}
//         >
//           <Link to='/allstudents' style={{ color: 'white', textDecoration: "none" }}>
//             <Typography variant="h4" sx={{ mb: 1 }}>Total Students</Typography>
//           </Link>
//           <PiStudent style={{ height: "70px", width: "70px", color: "white" }} />
//           <Typography variant="h4" sx={{ mt: 1, color: "white" }}>{studentsCount}</Typography>
//         </Box>
//       </Grid>

//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box
//           sx={{
//             backgroundColor: "#9EA0D8",
//             fontWeight: "bold",
//             height: "130px",
//             width: "100%",
//             borderRadius: "15px",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             transition: "transform 0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
//             }
//           }}
//         >
//           <Link to='/allstaffs' style={{ color: 'white', textDecoration: "none" }}>
//             <Typography variant="h4" sx={{ mb: 1 }}>Total Staffs</Typography>
//           </Link>
//           <IoPeopleSharp style={{ height: "70px", width: "70px", color: "white" }} />
//           <Typography variant="h4" sx={{ mt: 1, color: "white" }}>{staffsCount}</Typography>
//         </Box>
//       </Grid>

//       <Grid item xs={12} sm={6} md={4} lg={3}>
//         <Box
//           sx={{
//             backgroundColor: "#FA8892",
//             fontWeight: "bold",
//             height: "130px",
//             width: "100%",
//             borderRadius: "15px",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             transition: "transform 0.3s",
//             "&:hover": {
//               transform: "scale(1.05)",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
//             }
//           }}
//         >
//           <Link to='/sibStu' style={{ color: 'white', textDecoration: "none" }}>
//             <Typography variant="h6" sx={{ mb: 1 }}>Total Revenue</Typography>
//           </Link>
//           <RiMoneyRupeeCircleFill style={{ height: "70px", width: "70px", color: "white" }} />
//           <Typography variant="h4" sx={{ mt: 1, color: "white" }}>
//             {totalRevenue ? `${totalRevenue.total_paid_amount}` : "Loading..."}
//           </Typography>
//         </Box>
//       </Grid>

//       <Grid item xs={12} md={7} lg={8}>
//         <UniqueVisitorCard />
//       </Grid>

//       <Grid item xs={12} md={5} lg={4}>
//         <SmallCalendar />
//         <Bar data={chartData} options={chartOptions} style={{ height: '300px', width: '100% ' ,marginTop:'75px'}} />
//       </Grid>
//     </Grid>
//   );
// }

// ============================================================================================



import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import UniqueVisitorCard from './UniqueVisitorCard';
import SmallCalendar from './SmallCalender';
import { Link, useNavigate } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";
import { IoLogOutOutline, IoPeopleSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register all necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardDefault() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [lineChartData, setLineChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios.get(`${config.apiURL}/staffs/getStaffs`)
      .then((res) => {
        setStaffsCount(res.data.length);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
      });

    axios.get(`${config.apiURL}/students/getStudentsCount`)
      .then((res) => {
        setStudentsCount(res.data.total_count);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
      .then((res) => {
        setTotalRevenue(res.data);
      })
      .catch((error) => {
        console.error('Error fetching revenue:', error);
      });
  }, [selectedYear]);

  useEffect(() => {
    axios.get(`${config.apiURL}/dashboard/monthlyData`)
      .then((res) => {
        setLineChartData({
          labels: res.data.labels,
          values: res.data.values
        });
      })
      .catch((error) => {
        console.error('Error fetching line chart data:', error);
      });
  }, []);

  const chartData = {
    labels: lineChartData.labels,
    datasets: [
      {
        label: 'New Admission',
        data: lineChartData.values.map(item => item.newAdmissions),
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        borderColor: 'blue',
        borderWidth: 1,
      },
      {
        label: 'Total Students',
        data: lineChartData.values.map(item => item.totalStudents),
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: 'green',
        borderWidth: 1,
      }
    ],
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token or any other authentication data
    sessionStorage.removeItem('authToken'); // Adjust according to your token key
    sessionStorage.clear()
    navigate('/',{replace:true})
    window.location.reload()
    // Optional: You can also clear other data like user info from localStorage if needed

    // Make an API call to log out from the server if necessary
    // axios.post(`${config.apiURL}/logout`)
    //   .then(() => {
    //     console.log('Logged out successfully');
    //   })
    //   .catch((error) => {
    //     console.error('Error logging out:', error);
    //   })
    //   .finally(() => {
    //     // Redirect to the login page
    //     navigate('/', { replace: true });
    //   });
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        stacked: true,
      },
    },
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} style={{ background: "linear-gradient(to right,lightblue, pink)" }}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h6">Dashboard</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link to='/newAdmission' style={{color:'white',textDecoration:"none"}}>
          <div
            style={{
              backgroundColor: "#5251AC",
              fontWeight: "bold",
              height: "130px",
              width: "250px",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}>
            <h5>  New Enquiry Admission </h5>
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
            </div>
          </div>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link to='/StudentsBooking' style={{color:"white",textDecoration:"none"}}>
          <div
            style={{
              backgroundColor: "#6789F5",
              fontWeight: "bold",
              height: "130px",
              width: "250px",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}>
             <h5> Booking Students </h5>  
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
              <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>
                {/* {studentsCount} */}
              </h2>
            </div>
          </div>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Link to='/allstudentlist' style={{color:"white",textDecoration:"none"}}>
          <div
            style={{
              backgroundColor: "#9EA0D8",
              fontWeight: "bold",
              height: "130px",
              width: "250px",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
              className='hover'
            >
             <h5> New  Admissions</h5>
            </span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IoPeopleSharp style={{ height: "40px", width: "50px", color: "white" }} />
              <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>{studentsCount}</h2>
            </div>
          </div>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div
          onClick={handleLogout}
          style={{
            backgroundColor: "#FF5733",
            fontWeight: "bold",
            height: "130px",
            width: "250px",
            borderRadius: "15px",
            padding: "10px",
            cursor: 'pointer', // Add cursor pointer to indicate clickable element
          }}
        >
          <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px" }}>
         <h5>   Logout </h5>
          </span>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IoLogOutOutline style={{ height: "40px", width: "50px", color: "white" }} />
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>

      <Grid item xs={12} md={5} lg={4}>
        <SmallCalendar />
        <Bar data={chartData} options={chartOptions} style={{ height: '300px', width: '100%', marginTop: '75px' }} />
      </Grid>
    </Grid>
  );
}