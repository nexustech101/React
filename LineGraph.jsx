import React, { useRef, useEffect } from "react";

const LineChart = () => {
  const canvasRef = useRef(null);

  const data = [12, 19, 3, 5, 2, 3, 9];
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const max = Math.max(...data);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the axes
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(550, 350);
    ctx.stroke();

    // Draw the labels
    ctx.font = "12px sans-serif";
    for (let i = 0; i < labels.length; i++) {
      ctx.fillText(labels[i], 60 + i * 70, 370);
    }

    // Draw the lines
    ctx.beginPath();
    ctx.strokeStyle = "rgba(54, 162, 235, 1)";
    ctx.moveTo(60, 50 + (300 - (data[0] / max) * 300));
    for (let i = 1; i < data.length; i++) {
      const x = 60 + i * 70;
      const y = 50 + (300 - (data[i] / max) * 300);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }, [data, labels, max]);

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
};

export default LineChart;
