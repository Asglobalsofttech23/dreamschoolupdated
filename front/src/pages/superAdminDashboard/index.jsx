// import { useEffect, useState } from 'react';
// import { Grid, Typography, Box, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import axios from 'axios';
// import config from '../../config';
// import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
// import MainCard from 'components/MainCard';
// // import MonthlyBarChart from './MonthlyBarChart';
// import UniqueVisitorCard from './UniqueVisitorCard';
// import { Link } from 'react-router-dom';
// import { PiStudent } from "react-icons/pi";
// import Button from '@mui/material/Button';

// import { IoPeopleSharp } from "react-icons/io5";
// import { IoPerson } from "react-icons/io5";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// export default function SuperDashboardDefault() {
//   const [studentsCount, setStudentsCount] = useState([]);
//   const [staffsCount, setStaffsCount] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState();
//   const [selectedYear,setSelectedYear] = useState('2024-2025')
 
//  const [studentPresent, setStudentPresent] = useState()
//  const [staffPresent,setStaffPresent]=  useState()
//  const [siblingsCount, setSiblingCount] = useState(0);
//  const [siblingsData, setSiblingData] = useState([]);
//  const staffPng = 
//   useEffect(() => {
   
      

//     axios.get(`${config.apiURL}/staffs/getStaffs`)
//       .then((res) => {
//         const count = res.data.length;
//         setStaffsCount(count);
//       })
//       .catch((error) => {
//         console.error('Error fetching staff:', error);
//       });


//       axios.get(`${config.apiURL}/students/getStudentsCount`)
//       .then((res) => {
//         setStudentsCount(res.data.total_count);
       
//       })
//       .catch((error) => {
//         console.error('Error fetching student:', error);
//       });
  
 
//   }, []);
 
   

//   useEffect(()=>{
//     axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
//       .then((res) => {
//         setTotalRevenue(res.data)
//       })
//       .catch((error) => {
//         console.error('Error fetching revenue:', error);
//       });
//   },[])

//   useEffect(() => {
//     axios.get(`${config.apiURL}/students/getSiblings`)
//       .then((res) => {
//         const { siblingsCount, siblingsData } = res.data;
//         setSiblingCount(siblingsCount);
//         setSiblingData(siblingsData);
//       })
//       .catch((error) => {
//         console.error('Error fetching siblings:', error);
//       });
//   }, []);
//   //student present
//   useEffect(()=>{
//     axios.get(`${config.apiURL}`)
//     .then((res)=>{
//       setStudentPresent(res.data)

//     })
//     .catch((error)=>{
//       console.error('Error fetching staff:', error);
//     })
//   },[])


//   //staffPresent
//   useEffect(()=>{
//     axios.get(`${config.apiURL}`)
//     .then((res)=>{
//       setStaffPresent(res.data)

//     })
//     .catch((error)=>{
//       console.error('Error fetching staff:', error);
//     })
//   },[])
//   useEffect(()=>{
//     axios.get(`${config.apiURL}`)
//     .then((res)=>{
//       setStudentPresent(res.data)

//     })
//     .catch((error)=>{
//       console.error('Error fetching staff:', error);
//     })
//   },[])
//   useEffect(()=>{
//     axios.get(`${config.apiURL}`)
//     .then((res)=>{
//       setStudentPresent(res.data)

//     })
//     .catch((error)=>{
//       console.error('Error fetching staff:', error);
//     })
//   },[])

// const handleFeesClick= ()=>{

//   <Link to='/feePendingStu'>
//         <AnalyticEcommerce title="Total siblings"   />
//         </Link>

// }
// const handleTotalStudentClick =()=>{

// }
// const handleTotalStaffClick = ()=>{

// }
// const handleRevenueClick = ()=>{
//   <Link to='/sibStu'>
//   <AnalyticEcommerce title="Total siblings" count={siblingsCount ? `${siblingsCount.siblingsCount}` : "Loading..."}  isLoss color="warning"  />
//   </Link>
// }
//   return (
//     <Grid  container
//     rowSpacing={4.5}
//     columnSpacing={2.75}
//     style={{ background: "linear-gradient(to right,lightblue, pink)" }}>
//       {/* row 1 */}
//       <Grid item xs={12} sx={{ mb: -2.25 }}>
//         <Typography variant="h5" >Dashboard</Typography>
//       </Grid>


//       <Grid item xs={12} sm={6} md={4} lg={3}>
//   <div
//     variant="contained"
//     style={{
//       backgroundColor: "#5251AC",
//       fontWeight: "bold",
//       height: "130px",
//       width: "250px",
//       borderRadius: "15px",
//       padding: "10px",
//     }}
//   >
//     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px",  }}
//     onClick={handleFeesClick} className='hover'>
//         <Link to='/addStudent' style={{color:'white',textDecoration:"none"}} className='hover'>
//        New Admission 
//         </Link>
  
//     </span>
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
//       <h2 style={{ marginLeft: "auto", color: "white", height:"30px", width:"50px" }}>{studentsCount}</h2>
//     </div>
//     <div>
//       <p style={{color:"white"}}>This Month</p>
//       <h6 style={{ marginLeft: "auto", color: "white", height:"100px", width:"10px" }}>0</h6>
//     </div>
//   </div>
// </Grid>
   
// <Grid item xs={12} sm={6} md={4} lg={3}>
//   <div
//     variant="contained"
//     style={{
//       backgroundColor: "#6789F5",
//       fontWeight: "bold",
//       height: "130px",
//       width: "250px",
//       borderRadius: "15px",
//       padding: "10px",
//     }}
//   >
//     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}} 
//     onClick={handleTotalStudentClick} className='hover'>
//          <Link to='/allstudents' style={{color:"white",textDecoration:"none"}}>
//          Total Students   </Link>
  
//     </span>
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//       {/* Assuming PiStudent is an icon component */}
//       <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
//       {/* Display the count */}
//       <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>
//         {studentsCount}
//       </h2>
//     </div>
//   </div>
// </Grid>




// <Grid item xs={12} sm={6} md={4} lg={3}>
//   <div
//     variant="contained"
//     style={{
//       backgroundColor: "#9EA0D8",
//       fontWeight: "bold",
//       height: "130px",
//       width: "250px",
//       borderRadius: "15px",
//       padding: "10px",
//     }}
//   >
//     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
//     onClick={handleTotalStaffClick}
//     className='hover'
//     >
//        <Link to='/allstaffs' style={{color:"white",textDecoration:"none"}}> Total staffs
//       </Link>
  
//     </span>
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//       {/* Assuming IoPeopleSharp is an icon component */}
//       <IoPeopleSharp style={{ height: "40px", width: "50px", color: "white" }} />
//       {/* Display the count */}
//       <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>{staffsCount}</h2>
//     </div>
//   </div>
// </Grid>


     

     
// <Grid item xs={12} sm={6} md={4} lg={3}>
//   <div
//     variant="contained"
//     style={{
//       backgroundColor: "#FA8892",
//       fontWeight: "bold",
//       height: "130px",
//       width: "250px",
//       borderRadius: "15px",
//       padding: "10px",
//     }}
//   >
//     <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
//     className='hover' onClick={handleRevenueClick}>
//    <Link to='/sibStu' style={{color:"white",textDecoration:"none"}}> 
//    Total revenue 
//    </Link> 
//     </span>
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//       {/* Assuming RiMoneyRupeeCircleFill is an icon component */}
//       <RiMoneyRupeeCircleFill style={{ height: "40px", width: "50px", color: "white" }} />
//       {/* Display the total revenue amount  */}
//       <h2 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>
//        {totalRevenue ? `${totalRevenue.total_paid_amount}` : "Loading..."} 
//        </h2>
//       <h4 style={{ marginLeft: "10px", marginRight: "10px", color: "white", fontSize: "24px", textAlign: "center" }}>0</h4>
//     </div>
//   </div>
// </Grid>
//       {/* row 2 */}
//       <Grid item xs={12} md={7} lg={8} >
//         {/* <UniqueVisitorCard />/ */}
//       </Grid>
      
    
// {/* bottom 4  */}
  

//     </Grid>
//   );
// }








// Olddddd





// import { useEffect, useState } from 'react';
// import { Grid, Typography, Box, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import axios from 'axios';
// import config from '../../config';
// import { PiStudent } from "react-icons/pi";
// import { IoPeopleSharp, IoPerson } from "react-icons/io5";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { Link, useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { color } from 'framer-motion';

// const styles = {
//   box: {
//     fontWeight: "bold",
//     height: "130px",
//     width: "100%",
//     borderRadius: "15px",
//     padding: "10px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     transition: "transform 0.3s, background-color 0.3s",
//     backgroundColor: "#9EA0D8", // Initial color
//     "&:hover": {
//       transform: "scale(1.05)",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//       backgroundColor: "#FFC0CB" // Color on hover
//     }
//   },
//   link: {
//     color: 'white',
//     textDecoration: "none"
//   },
//   icon: {
//     height: "70px",
//     width: "70px",
//     color: "blue"
//   },
//   logoutButton: {
//     position: 'absolute',
//     backgroundColor:"black",
//     color: 'white',
//     top: '35px',
//     right: '10px',
//     zIndex: 1000 // Ensure it stays on top
//   }
// };

// export default function SuperDashboardDefault() {
//   const [studentsCount, setStudentsCount] = useState(0);
//   const [staffsCount, setStaffsCount] = useState(0);
//   const [totalRevenue, setTotalRevenue] = useState(0);
//   const [selectedYear, setSelectedYear] = useState('2024-2025');
//   const [studentPresent, setStudentPresent] = useState(0);
//   const [staffPresent, setStaffPresent] = useState(0);
//   const [siblingsCount, setSiblingCount] = useState(0);
//   const [siblingsData, setSiblingData] = useState([]);
//   const navigate = useNavigate();

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
//         console.error('Error fetching student count:', error);
//       });

//     axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
//       .then((res) => {
//         setTotalRevenue(res.data.total_paid_amount);
//       })
//       .catch((error) => {
//         console.error('Error fetching revenue:', error);
//       });

//     axios.get(`${config.apiURL}/students/getSiblings`)
//       .then((res) => {
//         const { siblingsCount, siblingsData } = res.data;
//         setSiblingCount(siblingsCount);
//         setSiblingData(siblingsData);
//       })
//       .catch((error) => {
//         console.error('Error fetching siblings:', error);
//       });

//     axios.get(`${config.apiURL}/students/present`)
//       .then((res) => {
//         setStudentPresent(res.data.present_count);
//       })
//       .catch((error) => {
//         console.error('Error fetching student present count:', error);
//       });

//     axios.get(`${config.apiURL}/staffs/present`)
//       .then((res) => {
//         setStaffPresent(res.data.present_count);
//       })
//       .catch((error) => {
//         console.error('Error fetching staff present count:', error);
//       });
//   }, [selectedYear]);

//   const handleFeesClick = () => {
//     // Define actions for handleFeesClick
//   };

//   const handleTotalStudentClick = () => {
//     // Define actions for handleTotalStudentClick
//   };

//   const handleTotalStaffClick = () => {
//     // Define actions for handleTotalStaffClick
//   };

//   const handleRevenueClick = () => {
//     // Define actions for handleRevenueClick
//   };

//   const handleLogout = () => {
//     // Clear the token or any other authentication data
//     sessionStorage.removeItem('authToken'); // Adjust according to your token key
//     sessionStorage.clear();
//     navigate('/', { replace: true });
//     window.location.reload();
//   };

//   return (
//     <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
//       <Button onClick={handleLogout} variant="contained"  sx={styles.logoutButton}>
//         Logout
//       </Button>

//       <Grid container rowSpacing={4.5} columnSpacing={2.75} style={{ background: "linear-gradient(to right, lightblue, pink)" }}>
//         <Grid item xs={12} sx={{ mb: -2.25 }}>
//           <Typography variant="h5">Dashboard</Typography>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Link to='/addStudent' style={{ textDecoration: 'none' }}>
//             <Box
//               sx={{
//                 backgroundColor: "#5251AC",
//                 fontWeight: "bold",
//                 height: "130px",
//                 width: "250px",
//                 borderRadius: "15px",
//                 padding: "10px",
//                 color: "white",
//                 cursor: "pointer",
//                 "&:hover": {
//                   backgroundColor: "#3f3b9e",
//                 }
//               }}
//               onClick={handleFeesClick}
//             >
//               <Typography variant="subtitle1" gutterBottom>
//                 New Admission
//               </Typography>
//               <Box display="flex" alignItems="center">
//                 <PiStudent style={{ height: "40px", width: "50px" }} />
//                 <Typography variant="h4" ml="auto">{studentsCount}</Typography>
//               </Box>
//               <Typography variant="body2">This Month</Typography>
//               <Typography variant="h6">0</Typography>
//             </Box>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Link to='/allstudentlist' style={{ textDecoration: 'none' }}>
//             <Box
//               sx={{
//                 backgroundColor: "#6789F5",
//                 fontWeight: "bold",
//                 height: "130px",
//                 width: "250px",
//                 borderRadius: "15px",
//                 padding: "10px",
//                 color: "white",
//                 cursor: "pointer",
//                 "&:hover": {
//                   backgroundColor: "#5677e4",
//                 }
//               }}
//               onClick={handleTotalStudentClick}
//             >
//               <Typography variant="subtitle1" gutterBottom>
//                 Total Students
//               </Typography>
//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <PiStudent style={{ height: "40px", width: "50px" }} />
//                 <Typography variant="h4" mx="10px">{studentsCount}</Typography>
//               </Box>
//             </Box>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Link to='/allstaffs' style={{ textDecoration: 'none' }}>
//             <Box
//               sx={{
//                 backgroundColor: "#9EA0D8",
//                 fontWeight: "bold",
//                 height: "130px",
//                 width: "250px",
//                 borderRadius: "15px",
//                 padding: "10px",
//                 color: "white",
//                 cursor: "pointer",
//                 "&:hover": {
//                   backgroundColor: "#7f81c2",
//                 }
//               }}
//               onClick={handleTotalStaffClick}
//             >
//               <Typography variant="subtitle1" gutterBottom>
//                 Total Staffs
//               </Typography>
//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <IoPeopleSharp style={{ height: "40px", width: "50px" }} />
//                 <Typography variant="h4" mx="10px">{staffsCount}</Typography>
//               </Box>
//             </Box>
//           </Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4} lg={3}>
//           <Link to='/sibStu' style={{ textDecoration: 'none' }}>
//             <Box
//               sx={{
//                 backgroundColor: "#FA8892",
//                 fontWeight: "bold",
//                 height: "130px",
//                 width: "250px",
//                 borderRadius: "15px",
//                 padding: "10px",
//                 color: "white",
//                 cursor: "pointer",
//                 "&:hover": {
//                   backgroundColor: "#f87580",
//                 }
//               }}
//               onClick={handleRevenueClick}
//             >
//               <Typography variant="subtitle1" gutterBottom>
//                 Total Revenue
//               </Typography>
//               <Box display="flex" alignItems="center" justifyContent="center">
//                 <RiMoneyRupeeCircleFill style={{ height: "40px", width: "50px" }} />
//                 <Typography variant="h4" mx="10px">{totalRevenue ? totalRevenue : "Loading..."}</Typography>
//                 <Typography variant="h6">0</Typography>
//               </Box>
//             </Box>
//           </Link>
//         </Grid>

//         {/* Add additional rows or cards here as needed */}
//       </Grid>
//     </Box>
//   );
// }






// ===================================== new ==========================================


import { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import { PiStudent } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import FeeCollectionChart from './IncomeAreaChart';


const styles = {
  box: {
    fontWeight: "bold",
    height: "130px",
    width: "100%",
    borderRadius: "15px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s, background-color 0.3s",
    backgroundColor: "#9EA0D8", // Initial color
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#FFC0CB" // Color on hover
    }
  },
  link: {
    color: 'white',
    textDecoration: "none"
  },
  icon: {
    height: "70px",
    width: "70px",
    color: "blue"
  },
  logoutButton: {
    position: 'absolute',
    backgroundColor: "black",
    color: 'white',
    top: '35px',
    right: '10px',
    zIndex: 1000 // Ensure it stays on top
  }
};

export default function SuperDashboardDefault() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [studentPresent, setStudentPresent] = useState(0);
  const [staffPresent, setStaffPresent] = useState(0);
  const [siblingsCount, setSiblingCount] = useState(0);
  const [siblingsData, setSiblingData] = useState([]);
  const navigate = useNavigate();

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
        console.error('Error fetching student count:', error);
      });

    axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
      .then((res) => {
        setTotalRevenue(res.data.total_paid_amount);
      })
      .catch((error) => {
        console.error('Error fetching revenue:', error);
      });

    axios.get(`${config.apiURL}/students/getSiblings`)
      .then((res) => {
        const { siblingsCount, siblingsData } = res.data;
        setSiblingCount(siblingsCount);
        setSiblingData(siblingsData);
      })
      .catch((error) => {
        console.error('Error fetching siblings:', error);
      });

    axios.get(`${config.apiURL}/students/present`)
      .then((res) => {
        setStudentPresent(res.data.present_count);
      })
      .catch((error) => {
        console.error('Error fetching student present count:', error);
      });

    axios.get(`${config.apiURL}/staffs/present`)
      .then((res) => {
        setStaffPresent(res.data.present_count);
      })
      .catch((error) => {
        console.error('Error fetching staff present count:', error);
      });
  }, [selectedYear]);

  const handleFeesClick = () => {
    // Define actions for handleFeesClick
  };

  const handleTotalStudentClick = () => {
    // Define actions for handleTotalStudentClick
  };

  const handleTotalStaffClick = () => {
    // Define actions for handleTotalStaffClick
  };

  const handleRevenueClick = () => {
    // Define actions for handleRevenueClick
  };

  const handleLogout = () => {
    // Clear the token or any other authentication data
    sessionStorage.removeItem('authToken'); // Adjust according to your token key
    sessionStorage.clear();
    navigate('/', { replace: true });
    window.location.reload();
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* <Button onClick={handleLogout} variant="contained" sx={styles.logoutButton}>
        Logout
      </Button> */}

      <Grid container rowSpacing={4.5} columnSpacing={2.75} style={{ background: "linear-gradient(to right, lightblue, pink)" }}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Dashboard</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to='/addStudent' style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                backgroundColor: "#5251AC",
                fontWeight: "bold",
                height: "130px",
                width: "250px",
                borderRadius: "15px",
                padding: "10px",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#3f3b9e",
                }
              }}
              onClick={handleFeesClick}
            >
              <Typography variant="subtitle1" gutterBottom>
                New Admission
              </Typography>
              <Box display="flex" alignItems="center">
                <PiStudent style={{ height: "40px", width: "50px" }} />
                <Typography variant="h4" ml="auto">{studentsCount}</Typography>
              </Box>
              <Typography variant="body2">This Month</Typography>
              <Typography variant="h6">0</Typography>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to='/allstudentlist' style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                backgroundColor: "#6789F5",
                fontWeight: "bold",
                height: "130px",
                width: "250px",
                borderRadius: "15px",
                padding: "10px",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#5677e4",
                }
              }}
              onClick={handleTotalStudentClick}
            >
              <Typography variant="subtitle1" gutterBottom>
                Total Students
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <PiStudent style={{ height: "40px", width: "50px" }} />
                <Typography variant="h4" mx="10px">{studentsCount}</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to='/allstaffs' style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                backgroundColor: "#9EA0D8",
                fontWeight: "bold",
                height: "130px",
                width: "250px",
                borderRadius: "15px",
                padding: "10px",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#7f81c2",
                }
              }}
              onClick={handleTotalStaffClick}
            >
              <Typography variant="subtitle1" gutterBottom>
                Total Staffs
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <IoPeopleSharp style={{ height: "40px", width: "50px" }} />
                <Typography variant="h4" mx="10px">{staffsCount}</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to='' style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                backgroundColor: "#FA8892",
                fontWeight: "bold",
                height: "130px",
                width: "250px",
                borderRadius: "15px",
                padding: "10px",
                color: "white",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f87580",
                }
              }}
              onClick={handleRevenueClick}
            >
              <Typography variant="subtitle1" gutterBottom>
                Total Revenue
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <RiMoneyRupeeCircleFill style={{ height: "40px", width: "50px" }} />
                <Typography variant="h4" mx="10px">{totalRevenue ? totalRevenue : "Loading..."}</Typography>
              </Box>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <FeeCollectionChart />
        </Grid>

        {/* Add additional rows or cards here as needed */}
      </Grid>
    </Box>
  );
}
