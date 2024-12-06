import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LinearProgressBar = ({
  isActive = false,
  interval = 500,
  step = 10,
  maxProgress = 100,
  onComplete,
  width = "100%",
  currentProgress = 80,
  barBGColor = "#007bff",
  barColor = "#e0e0e0"
}) => {
  const [progress, setProgress] = useState(currentProgress);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === maxProgress) {
          if (onComplete) onComplete();
          return 0;
        }
        const diff = Math.random() * step;
        return Math.min(oldProgress + diff, maxProgress);
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, step, maxProgress, onComplete]);

  return (
    <Box sx={{ width }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
            backgroundColor: barColor, // Background color for the track
            "& .MuiLinearProgress-bar": {
            backgroundColor: barBGColor, // Color for the progress bar
            },
        }}
        />

    </Box>
  );
};

export default LinearProgressBar;
