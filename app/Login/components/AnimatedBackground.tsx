'use client';

import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    // Configuração inicial dos círculos
    const circles = [
      { id: 'circle1', speed: 0.2, directionX: 1, directionY: 1 },
      { id: 'circle2', speed: 0.15, directionX: -1, directionY: 1 },
      { id: 'circle3', speed: 0.1, directionX: 1, directionY: -1 },
    ];

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const animateCircles = () => {
      circles.forEach((circle) => {
        const element = document.getElementById(circle.id);

        if (element) {
          // Obtém a posição atual ou define uma inicial
          const currentX = parseFloat(element.style.left) || Math.random() * screenWidth;
          const currentY = parseFloat(element.style.top) || Math.random() * screenHeight;

          // Calcula novas posições com base na direção e velocidade
          const newX = currentX + circle.speed * circle.directionX * 5;
          const newY = currentY + circle.speed * circle.directionY * 5;

          // Verifica os limites da tela e inverte a direção se necessário
          const circleSize = parseInt(element.style.width || "300px", 10); // Tamanho do círculo
          if (newX <= 0 || newX >= screenWidth - circleSize) circle.directionX *= -1;
          if (newY <= 0 || newY >= screenHeight - circleSize) circle.directionY *= -1;

          // Atualiza as posições (com movimento linear e controlado)
          element.style.left = `${newX}px`;
          element.style.top = `${newY}px`;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    // Posiciona os círculos inicialmente
    circles.forEach((circle) => {
      const element = document.getElementById(circle.id);
      if (element) {
        element.style.position = 'absolute';
        element.style.left = `${Math.random() * (screenWidth - 300)}px`; // Inicializa dentro dos limites
        element.style.top = `${Math.random() * (screenHeight - 300)}px`;
      }
    });

    animateCircles();
  }, []);

  return (
    <>
      <div id="circle1" className="absolute w-[600px] h-[600px] rounded-full bg-darkGreen opacity-50 blur-2xl"></div>
      <div id="circle2" className="absolute w-[600px] h-[600px] rounded-full bg-Green opacity-50 blur-2xl"></div>
      <div id="circle3" className="absolute w-[600px] h-[600px] rounded-full bg-lightGreen opacity-50 blur-2xl"></div>
    </>
  );
};

export default AnimatedBackground;
