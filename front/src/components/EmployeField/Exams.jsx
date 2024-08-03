import React, { useState, useEffect } from 'react';
import { Button, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config';

function Exams() {
  const [examNames, setExamNames] = useState([]);
  const [selectedExam, setSelectedExam] = useState('');
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    // Fetch exam names on component mount
    axios.get(`${config.apiURL}/students/getexamsalloc`)
      .then((res) => {
        setExamNames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [examNames,examData,selectedExam]);

  const handleExamSelect = (event) => {
    setSelectedExam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Find the selected exam object using exam name
    const selectedExamObject = examNames.find(exam => exam.exam_name === selectedExam);
    console.log(selectedExamObject);
    if (selectedExamObject) {
      // Fetch data from backend based on selected exam_id
      axios.get(`${config.apiURL}/students/examdata/${selectedExamObject.exam_id}`)
        .then((res) => {
          setExamData(res.data);
          console.log('Exam data:', res.data);
        })
        .catch((err) => {
          console.error('Error fetching exam data:', err);
        });
    } else {
      console.error('Selected exam not found in examNames array.');
    }
  };

  return (
    <div>
      <h1>Exams</h1>
      <Link to="/markallocstud">
        <Button variant="contained" color="primary">Add Marks</Button>
      </Link>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <Select
          value={selectedExam}
          onChange={handleExamSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Select exam' }}
          style={{ marginRight: '10px' }}
        >
          <MenuItem value="" disabled>Select Exam</MenuItem>
          {examNames.map((examName) => (
            <MenuItem key={examName.exam_id} value={examName.exam_name}>
              {examName.exam_name}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" color="primary">
          Get Exam Data
        </Button>
      </form>

      {examData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {/* Adjust the table headers according to your examData structure */}
                {Object.keys(examData[0]).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {examData.map((dataRow, index) => (
                <TableRow key={index}>
                  {Object.values(dataRow).map((value, idx) => (
                    <TableCell key={idx}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
          No Data Available
        </Typography>
      )}
    </div>
  );
}

export default Exams;
