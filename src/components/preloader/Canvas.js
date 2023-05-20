import React, { useEffect, useRef, useMemo } from 'react';

function RainAnimation() {
   const canvasRef = useRef(null);
   const drops = useMemo(() => [], []);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height - 10;

      function createDrop() {
         const x = Math.random() * width;
         const y = -10;
         const length = Math.random() * 20 + 10;
         const speed = Math.random() * 2 + 1;

         drops.push({ x, y, length, speed });
      }

      function draw() {
         ctx.clearRect(0, 0, width, height);

         for (let i = 0; i < drops.length; i++) {
            const drop = drops[i];

            ctx.beginPath();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1.5;
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.stroke();

            drop.y += drop.speed;

            if (drop.y > height) {
               drops.splice(i, 1);
            }
         }

         requestAnimationFrame(draw);
      }

      setInterval(createDrop, 50);
      draw();
   }, [drops]);

   return <canvas ref={canvasRef} />;
}

export default RainAnimation;
