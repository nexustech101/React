import React, { useRef, useEffect } from "react";

const BarChart = () => {
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
    ctx.lineTo(50, 50);
    ctx.lineTo(550, 50);
    ctx.stroke();

    // Draw the labels
    ctx.font = "12px sans-serif";
    for (let i = 0; i < labels.length; i++) {
      ctx.fillText(labels[i], 60 + i * 70, 370);
    }

    // Draw the bars
    for (let i = 0; i < data.length; i++) {
      const barHeight = (data[i] / max) * 300;
      ctx.fillStyle = "rgba(54, 162, 235, 0.2)";
      ctx.fillRect(60 + i * 70, 50 + (300 - barHeight), 50, barHeight);
      ctx.strokeStyle = "rgba(54, 162, 235, 1)";
      ctx.strokeRect(60 + i * 70, 50 + (300 - barHeight), 50, barHeight);
    }
  }, [data, labels, max]);

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
};

export default BarChart;
