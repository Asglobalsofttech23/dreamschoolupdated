// // material-ui
// import FormControl from '@mui/material/FormControl';
// import InputAdornment from '@mui/material/InputAdornment';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';

// // assets
// import SearchOutlined from '@ant-design/icons/SearchOutlined';

// // ==============================|| HEADER CONTENT - SEARCH ||============================== //

// export default function Search() {
//   return (
//     <Box sx={{ width: '100%',ml: { xs: 0, md: 1 },height:'50px',textAlign:'center',marginTop:'10px',color:'blue',backgroundColor:'pink'}}>
//       <h1>Dream Public School</h1>
//     </Box>
//   );
// }



// // import React from 'react';
// // import Box from '@mui/material/Box';

// // export default function Search() {
// //   return (
// //     <Box
// //       sx={{
// //         width: '100%',
// //         ml: { xs: 0, md: 1 },
// //         height: 'auto',
// //         textAlign: 'center',
// //         marginTop: '10px',
// //         color: 'black',
// //         backgroundColor: 'linear-gradient(red,yellow)',
// //         padding: '20px',
// //         borderRadius: '8px',
// //         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
// //       }}
// //     >
// //       <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', margin: 0 }}>
// //         Dream Public School
// //       </h1>
// //     </Box>
// //   );
// // }








// material-ui
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

// assets
import SearchOutlined from '@ant-design/icons/SearchOutlined';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search() {
  return (
    // <Box sx={{ width: '100%',ml: { xs: 0, md: 1 },height:'50px',textAlign:'center',marginTop:'10px',color:'blue',backgroundColor:'pink'}}>
      
      


<Box 

sx={{
  width: '100%',
  ml: { xs: 0, md: 1 },
  height: '70px',
  textAlign: 'center',
  marginTop: '10px',
  color: 'blue',
  background: 'linear-gradient(to right, #FF7E79, #FFBD70)', // Gradient color
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Increased 3D effect
  fontWeight: 'bold',
  fontSize: '2rem', // Increased font size
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Enhanced text shadow
  transition: 'background 0.3s, transform 0.3s', // Smooth transition for hover effect
  '&:hover': {
    background: 'linear-gradient(to right, #FFBD70, #FF7E79)', // Reverse gradient on hover
    transform: 'scale(1.05)', // Slightly enlarge on hover
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)', // Increase shadow on hover
  }
}}
>


      <h1>Dream Public School</h1>
    </Box>
  );
}
