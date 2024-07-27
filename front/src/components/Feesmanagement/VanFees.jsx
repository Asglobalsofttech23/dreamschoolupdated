import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';
import axios from 'axios';
import config from '../../config'; // Ensure you have the correct path to your config file

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

const VanStudent = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [clsData, setClsData] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [loading, setLoading] = useState(false); // State for loading

  useEffect(() => {
    fetchClasses(); // Fetch class data on component mount
    fetchVanStudents(); // Initial fetch of all van students
  }, []);

  useEffect(() => {
    // Filter students whenever selectedClass changes
    if (selectedClass) {
      const filtered = students.filter(student => student.cls_id == selectedClass);
      setStudents(filtered);
    //   setSelectedClass('')
    }
  }, [selectedClass]);

  const fetchVanStudents = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const response = await axios.get(`${config.apiURL}/vanstudents`);
      setStudents(response.data);
    } catch (err) {
      console.log("Error fetching van students:", err);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${config.apiURL}/clsAndSec/getClass`);
      setClsData(response.data);
    } catch (err) {
      console.log("Error fetching Class data", err);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClass(classId); // Update selected class ID
  };

  const handleAddStudent = () => {
    // Logic to handle adding a student can go here
  };

  const filteredStudents = students.filter(student =>
    student.stu_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddStudent}>
        Add Student
      </Button>
      <FormControl variant="outlined" style={{ minWidth: 120, marginRight: 16 }}>
        <InputLabel>Class</InputLabel>
        <Select
          value={selectedClass}
          onChange={handleClassChange}
          label="Class"
        >
          {clsData.map((cls) => (
            <MenuItem key={cls.cls_id} value={cls.cls_id}>{cls.cls_name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="outlined"
        label="Search by Name"
        onChange={handleSearchChange}
        style={{ marginBottom: 16 }}
      />
      {loading ? ( // Show loading indicator while data is being fetched
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                {/* <TableCell>Aadhar</TableCell> */}
                <TableCell>Gender</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>Van</TableCell>
                {/* Add more columns as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.stu_id}>
                  <TableCell>{student.stu_id}</TableCell>
                  <TableCell>{student.stu_name}</TableCell>
                  {/* <TableCell>{student.stu_aadhar}</TableCell> */}
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{formatDate(student.dob)}</TableCell>
                  <TableCell>{student.van_student}</TableCell>
                  {/* Add more cells as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default VanStudent;
