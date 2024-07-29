import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../../config';
import { Grid, Card, CardContent, Typography, TextField, Box } from '@mui/material';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

function ViewStudents() {
  const { classId } = useParams(); // Extract classId from URL
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [className, setClassName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`${config.apiURL}/students/${classId}`)
      .then((res) => {
        setStudents(res.data);
        setFilteredStudents(res.data);
      })
      .catch((err) => {
        console.log("Error fetching students:", err);
      });
    
    axios.get(`${config.apiURL}/clsAndSec/getClass/${classId}`)
      .then((res) => {
        console.log("Class data response:", res.data); // Log the entire response
        if (res.data && res.data.length > 0) {
          setClassName(res.data[0].cls_name); // Access the first element of the array
        } else {
          console.log("cls_name not found in the response");
        }
      })
      .catch((err) => {
        console.log("Error fetching class name:", err);
      });
  }, [classId]);

  useEffect(() => {
    const results = students.filter(student =>
      student.stu_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(results);
  }, [searchTerm, students]);

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {className} Students
        </Typography>
        <TextField
          label="Search by name"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={2}>
        {filteredStudents.map((student) => (
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
                  Section: {student.sec}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  DOB: {formatDate(student.dob)}
                </Typography>
                {/* Add more fields as needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ViewStudents;
