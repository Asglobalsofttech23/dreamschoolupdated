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
    <Box sx={{ width: '100%',ml: { xs: 0, md: 1 },height:'50px',textAlign:'center',marginTop:'10px',color:'blue',backgroundColor:'pink'}}>
      <h1>Dream Public School</h1>
    </Box>
  );
}



// import React from 'react';
// import Box from '@mui/material/Box';

// export default function Search() {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         ml: { xs: 0, md: 1 },
//         height: 'auto',
//         textAlign: 'center',
//         marginTop: '10px',
//         color: 'black',
//         backgroundColor: 'linear-gradient(red,yellow)',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', margin: 0 }}>
//         Dream Public School
//       </h1>
//     </Box>
//   );
// }
