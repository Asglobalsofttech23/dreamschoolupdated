import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function ClassList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(`${config.apiURL}/clsAndSec/getclass`)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("Error fetching classes:", err);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {classes.map((cls) => (
        <Grid item xs={12} sm={6} md={4} key={cls.cls_id}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                {cls.cls_name}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/viewStudents/${cls.cls_id}`} style={{ textDecoration: 'none' }}>
                <Button size="small" color="primary">View Student Details</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ClassList;
