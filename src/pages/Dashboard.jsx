import React from 'react';
import classes from './dashboard.module.css';
import DashBoardNav from '../components/DashBoard/DashBoardNav';
import Card from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';

import predict from '../assets/predict.jpeg';
import forecast from '../assets/forecast.jpeg';
import status from '../assets/status.jpeg';

export default function Dashboard() {
  const navigate = useNavigate();
  function handleRouter(value) {
    navigate(`/${value}`);
  }
  return (
    <div className={classes.dasCon}>
      <DashBoardNav />
      <div className={classes.cardCon}>
        <Card imgSrc={predict} title="Prediction" onClick={() => handleRouter('prediction')} />
        <Card imgSrc={forecast} title="Forecasting" onClick={() => handleRouter('forecasting')} />
        <Card imgSrc={status} title="Status Report" onClick={() => handleRouter('statusreport')} />
      </div>
    </div>
  )
}
