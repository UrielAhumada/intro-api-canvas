function draw_cuadrado() {
    const canvas = document.getElementById("canvas_cuadrado");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = 'red';
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }
}
function draw_path() {
    const canvas = document.getElementById("canvas_path");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(75, 50); // Punto superior del triángulo
        ctx.lineTo(25, 100); // Punto inferior derecho
        ctx.lineTo(125, 100); // Punto inferior izquierdo
        ctx.fill(); // Rellena el triángulo

    }
}
function draw_moveTo() {
    const canvas = document.getElementById("canvas_moveTo");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
      ctx.stroke();
    }
  }
  function draw_lineTo() {
    const canvas = document.getElementById("canvas_lineTo");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      // Triángulo relleno
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();
  
      // Triángulo contorneado
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    }
  }
  function draw_arc() {
    const canvas = document.getElementById("canvas_arc");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          const x = 25 + j * 50; // Coordenada x
          const y = 25 + i * 50; // Coordenada y
          const radius = 20; // Radio del Arco
          const startAngle = 0; // Punto inicial del Círculo
          const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
          const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
    }
  }
  function draw_quadraticCurve() {
    const canvas = document.getElementById("canvas_quadraticCurve");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      // Ejemplo de curvas cuadráticas
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
    }
  }
  function draw_bezierCurve() {
    const canvas = document.getElementById("canvas_bezierCurve");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      // Ejemplo de curvas cúbicas
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
    }
  }
draw_cuadrado();
draw_path();
draw_moveTo();
draw_lineTo();
draw_arc();
draw_quadraticCurve();
draw_bezierCurve();