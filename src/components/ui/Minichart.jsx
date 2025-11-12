import { useEffect, useRef } from "react";

export default function MiniChart({ color }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const points = Array.from({ length: 10 }, () => Math.random() * canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    points.forEach((point, index) => {
      const x = (canvas.width / (points.length - 1)) * index;
      index === 0 ? ctx.moveTo(x, point) : ctx.lineTo(x, point);
    });
    ctx.stroke();

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, color + "40");
    gradient.addColorStop(1, color + "00");

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-24 bg-gray-800 rounded-lg"
    />
  );
}