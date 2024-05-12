import { Box, Step, StepLabel, Stepper } from '@mui/material';
import * as React from 'react';

const steps = [
  'Chọn đơn hàng',
  'Địa chỉ giao hàng',
  'Đặt hàng',
  'Thanh toán'
];

export default function StepperOrder( {step} ) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}