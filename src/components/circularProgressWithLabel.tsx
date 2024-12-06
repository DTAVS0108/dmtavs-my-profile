import React, { useState, useEffect } from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CircularProgressWithLabel = ({
  value,
  size = 40,
  thickness = 4,
  ...props
}: CircularProgressProps & { value: number }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={thickness}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary', fontSize: "8px"}}
        >
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

// Reusable Circular Progress Component
const CircularProgressBar = ({
  interval = 800,
  step = 10,
  maxProgress = 100,
  onComplete,
  size = 40,
  thickness = 4,
  ...props
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= maxProgress) {
          if (onComplete) onComplete();
          return 0;
        }
        return Math.min(prevProgress + step, maxProgress);
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, step, maxProgress, onComplete]);

  return (
    <CircularProgressWithLabel
      value={progress}
      size={size}
      thickness={thickness}
      {...props}
    />
  );
};

export default CircularProgressBar;
