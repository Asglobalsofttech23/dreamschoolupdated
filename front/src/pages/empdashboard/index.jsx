// import React, { useEffect, useState } from 'react';
// import { Grid, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import config from '../../config';
// import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import TeacherProfile from './TeacherProfile';

// export default function DashboardDefault() {
//   const [studentsCount, setStudentsCount] = useState(0);
//   const [staffsCount, setStaffsCount] = useState({});
//   const [chartData, setChartData] = useState([]);
//   const staff_id = sessionStorage.getItem('staff_id')

//   useEffect(() => {
//     // Fetching data for Student Attendance
   
//     // Fetching data for Classwise First Mark
//     axios.get(`${config.apiURL}/staffs/getStaffdash/${staff_id}`)
//       .then((res) => {
        
//        setStaffsCount(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching staff:', error);
//       });

//     // Fetching data for Bar Chart
//     axios.get(`${config.apiURL}/dashboard/chartData`)
//       .then((res) => {
//         setChartData(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching chart data:', error);
//       });
//   }, []);

//   return (
//     <Grid container spacing={1} sx={{ backgroundColor: 'lightblue', padding: 1, borderRadius: 2 }}>


//       {/* Profile section */}
//       <Grid item xs={12} md={6} container justifyContent="center">
//         <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <TeacherProfile  data={staffsCount[0]}sx={{ width: '100%', height: '100%' }} />
//         </Box>
//       </Grid>

    
//     </Grid>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { Grid, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import config from '../../config';
// import { IoLogIn, IoLogOut } from 'react-icons/io5';
// import TeacherProfile from './TeacherProfile';

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
//     backgroundColor: "#9EA0D8 ", // Initial color
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
//   }
// };

// export default function DashboardDefault() {
//   const [studentsCount, setStudentsCount] = useState(0);
//   const [staffsCount, setStaffsCount] = useState([]);
//   const [totalRevenue, setTotalRevenue] = useState(null);
//   const [chartData, setChartData] = useState([]);
//   const staff_id = sessionStorage.getItem('staff_id')

//   useEffect(() => {
//     // Fetching data for Staff Dashboard
//     axios.get(`${config.apiURL}/staffs/getStaffdash/${staff_id}`)
//       .then((res) => {
//         setStaffsCount(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching staff:', error);
//       });

//     // Fetching data for Total Revenue
//     axios.get(`${config.apiURL}/dashboard/totalRevenue`)
//       .then((res) => {
//         setTotalRevenue(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching total revenue:', error);
//       });

//     // Fetching data for Bar Chart
//     axios.get(`${config.apiURL}/dashboard/chartData`)
//       .then((res) => {
//         setChartData(res.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching chart data:', error);
//       });
//   }, []);


//   const formatTime = (date) => {
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   const handleAttendance = async (statusn) => {
//     const staff_id = sessionStorage.getItem('staff_id');
//     try {
//       const currentDate = new Date();
//       const formattedTime = formatTime(currentDate);

//       const formData = {
//         staff_id: staff_id,
//         statusn: statusn,
//         entrytime: formattedTime,
//         thatdate: currentDate.toISOString().split('T')[0] // Get date in YYYY-MM-DD format
//       };

//       await axios.post(`${config.apiURL}/staffs/staffattenance`, formData);
//       alert(`${statusn.charAt(0).toUpperCase() + statusn.slice(1)} recorded successfully at ${formattedTime}`);
//     } catch (error) {
//       console.error(`Error recording ${statusn}:`, error);
//       alert(`Failed to record ${statusn}`);
//     }
//   };

//   return (
//     <Grid container spacing={2} sx={{ backgroundColor: 'lightblue', padding: 1, borderRadius: 2, justifyContent: "center" }}>
//       <Grid onClick={() => handleAttendance('entry')} item xs={12} sm={6} md={6} lg={4}>
//         <Box sx={styles.box}>
          
//             <Typography variant="h6" sx={{ mb: 1 }}>Entry</Typography>
          
//           <IoLogIn style={styles.icon} />
//           <Typography variant="h4" sx={{ mt: 1, color: "green" }}></Typography>
//         </Box>
//       </Grid>

//       <Grid onClick={() => handleAttendance('exit')}item xs={12} sm={6} md={6} lg={4}>
//         <Box sx={styles.box}>
          
//             <Typography variant="h6" sx={{ mb: 1 }}>Exit</Typography>
         
//           <IoLogOut style={styles.icon} />
//           <Typography variant="h4" sx={{ mt: 1, color: "white" }}></Typography>
//         </Box>
//       </Grid>

//       <Grid item xs={12} md={17} lg={12} container justifyContent="center" alignItems="center" marginTop='-100px'>
//         <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           {staffsCount.length > 0 ? (
//             <TeacherProfile data={staffsCount[0]} sx={{ width: '100%', height: '100%' }} />
//           ) : (
//             <Typography>Loading...</Typography>
//           )}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }



import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import TeacherProfile from './TeacherProfile';

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
    backgroundColor:"black",
    color: 'white',
    top: '20px',
    right: '10px'
  }
};

export default function DashboardDefault() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(null);
  const [chartData, setChartData] = useState([]);
  const navigate = useNavigate();
  const staff_id = sessionStorage.getItem('staff_id')

  useEffect(() => {
    // Fetching data for Staff Dashboard
    axios.get(`${config.apiURL}/staffs/getStaffdash/${staff_id}`)
      .then((res) => {
        setStaffsCount(res.data);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
      });

    // Fetching data for Total Revenue
    axios.get(`${config.apiURL}/dashboard/totalRevenue`)
      .then((res) => {
        setTotalRevenue(res.data);
      })
      .catch((error) => {
        console.error('Error fetching total revenue:', error);
      });

    // Fetching data for Bar Chart
    axios.get(`${config.apiURL}/dashboard/chartData`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
      });
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleAttendance = async (statusn) => {
    const staff_id = sessionStorage.getItem('staff_id');
    try {
      const currentDate = new Date();
      const formattedTime = formatTime(currentDate);

      const formData = {
        staff_id: staff_id,
        statusn: statusn,
        entrytime: formattedTime,
        thatdate: currentDate.toISOString().split('T')[0] // Get date in YYYY-MM-DD format
      };

      await axios.post(`${config.apiURL}/staffs/staffattenance`, formData);
      alert(`${statusn.charAt(0).toUpperCase() + statusn.slice(1)} recorded successfully at ${formattedTime}`);
    } catch (error) {
      console.error(`Error recording ${statusn}:`, error);
      alert(`Failed to record ${statusn}`);
    }
  };

  const handleLogout = () => {
    // Clear the token or any other authentication data
    sessionStorage.removeItem('authToken'); // Adjust according to your token key
    sessionStorage.clear();
    navigate('/', { replace: true });
    window.location.reload();
  };

  return (
    <Grid container spacing={2} sx={{ backgroundColor: 'lightblue', padding: 1, borderRadius: 2, justifyContent: "center", position: 'relative' }}>
      {/* <Button onClick={handleLogout} variant="contained" sx={styles.logoutButton}>
        Logout
      </Button> */}
      <Grid onClick={() => handleAttendance('entry')} item xs={12} sm={6} md={6} lg={2.5} sx={{ cursor: 'pointer' }}>
  <Box sx={styles.box}>
    <Typography variant="h6" sx={{ mb: 1 }}>Entry</Typography>
    <IoLogIn style={styles.icon} />
    <Typography variant="h4" sx={{ mt: 1, color: "green" }}></Typography>
  </Box>
</Grid>

<Grid onClick={() => handleAttendance('exit')} item xs={12} sm={6} md={6} lg={2.5} sx={{ cursor: 'pointer' }}>
  <Box sx={styles.box}>
    <Typography variant="h6" sx={{ mb: 1 }}>Exit</Typography>
    <IoLogOut style={styles.icon} />
    <Typography variant="h4" sx={{ mt: 1, color: "white" }}></Typography>
  </Box>
</Grid>


      <Grid item xs={12} md={17} lg={12} container justifyContent="center" alignItems="center" marginTop='-100px'>
        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {staffsCount.length > 0 ? (
            <TeacherProfile data={staffsCount[0]} sx={{ width: '100%', height: '100%' }} />
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
