import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../../config';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function ViewStudents() {
  const { classId } = useParams(); // Extract classId from URL
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`${config.apiURL}/students/${classId}`)
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log("Error fetching students:", err);
      });
  }, [classId]);

  return (
    <Grid container spacing={2}>
      {students.map((student) => (
        <Grid item xs={12} sm={6} md={4} key={student.stu_id}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                {student.stu_name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Aadhar: {student.stu_aadhar}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Gender: {student.gender}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                DOB: {student.dob}
              </Typography>
              {/* Add more fields as needed */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ViewStudents;
