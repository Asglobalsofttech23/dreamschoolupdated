// import React, { useEffect } from 'react';
// import { Grid, Paper, Typography, Avatar } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledPaper = styled(Paper)({
//     padding: '16px',
//     textAlign: 'center',
//     borderRadius: '8px',
//     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     '&:hover': {
//         transform: 'scale(1.05)',
//         boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
//     },
//     width: '100%',
//     height: '100%',
// });

// const StyledAvatar = styled(Avatar)({
//     width: '150px',
//     height: '150px',
//     margin: '0 auto 10px',
//     border: '2px solid #d7d1de',
//     transition: 'transform 0.3s, box-shadow 0.3s',
//     '&:hover': {
//         boxShadow: '0px 4px 10px rgba(63, 81, 181, 0.5)',
//         transform: 'scale(1.1)',
//     },
// });

// const detailStyle = {
//     textAlign: 'left',
//     marginTop: '10px',
//     lineHeight: '1.6',
// };

// function TeacherProfile({ data }) {
//     useEffect(() => {
//         console.log('TeacherProfile data:', data);
//     }, [data]);

//     if (!data) {
//         return <Typography>Loading...</Typography>;
//     }

//     return (
//         <Grid item xs={12} md={7} lg={8}>
//             <StyledPaper>
//                 <h5>Profile</h5>
//                 <StyledAvatar src={data.staff_img} alt={data.staff_name} />
//                 <Typography variant="h6">{data.staff_name}</Typography>
//                 <div style={detailStyle}>
//                     <Typography variant="body2"><strong>Qualification:</strong> {data.qualification}</Typography>
//                     <Typography variant="body2"><strong>Experience:</strong> {data.experience}</Typography>
//                     <Typography variant="body2"><strong>Email:</strong> {data.email}</Typography>
//                     <Typography variant="body2"><strong>Gender:</strong> {data.gender}</Typography>
//                     <Typography variant="body2"><strong>Address:</strong> {data.address}</Typography>
//                     <Typography variant="body2"><strong>Mobile:</strong> {data.mobile}</Typography>
                    
//                 </div>
//             </StyledPaper>
//         </Grid>
//     );
// }

// export default TeacherProfile;






import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Email, LocationOn, Phone, School, Work } from '@mui/icons-material';
import profile from '../../assets/images/prof.png'

const StyledPaper = styled(Paper)({
    padding: '24px',
    textAlign: 'center',
    borderRadius: '16px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
    },
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7fa',
});

const StyledAvatar = styled(Avatar)({
    width: '150px',
    height: '150px',
    margin: '0 auto 20px',
    border: '3px solid #d7d1de',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        boxShadow: '0px 4px 10px rgba(63, 81, 181, 0.5)',
        transform: 'scale(1.1)',
    },
});

const DetailContainer = styled('div')({
    textAlign: 'left',
    marginTop: '20px',
    lineHeight: '1.8',
});

const DetailItem = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    '& svg': {
        marginRight: '8px',
        color: 'blue',
    },
});

function TeacherProfile({ data }) {
    useEffect(() => {
        console.log('TeacherProfile data:', data);
    }, [data]);

    if (!data) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} md={7} lg={6}>
                <StyledPaper>
                    <Typography variant="h5" gutterBottom>Profile</Typography>
                    <StyledAvatar src={profile} alt={data.staff_name} />
                    <Typography variant="h6" gutterBottom>{data.staff_name}</Typography>
                    <DetailContainer>
                        <DetailItem variant="body1"><School /> <strong>Qualification:</strong> {data.qualification}</DetailItem>
                        <DetailItem variant="body1"><Work /> <strong>Experience:</strong> {data.experience}</DetailItem>
                        <DetailItem variant="body1"><Email /> <strong>Email:</strong> {data.email}</DetailItem>
                        <DetailItem variant="body1"><span role="img" aria-label="gender">👤</span> <strong>Gender:</strong> {data.gender}</DetailItem>
                        <DetailItem variant="body1"><LocationOn /> <strong>Address:</strong> {data.address}</DetailItem>
                        <DetailItem variant="body1"><Phone /> <strong>Mobile:</strong> {data.mobile}</DetailItem>
                    </DetailContainer>
                </StyledPaper>
            </Grid>
        </Grid>
    );
}

export default TeacherProfile;

