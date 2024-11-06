(function reloadWithAlert() {
    const url = "https://certificacioninternacional.mijp.gob.ve/paginas/CU_login/";  // URL que quieres monitorear
    const youtubeUrl = "https://www.youtube.com/watch?v=ZemZ0krQ9Cc";  // URL de la canción de YouTube
    let attemptCount = 0;  // Contador de intentos fallidos
  
    function getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString();  // Formato de hora legible
    }
  
    function checkPage() {
      // Incrementa el contador de intentos
      attemptCount++;
  
      // Intenta cargar la URL
      fetch(url, { method: "HEAD", mode: "no-cors" })
        .then(() => {
          // Abre el video de YouTube en una nueva pestaña
          window.open(youtubeUrl, "_blank");
          
          // Redirige la página actual a la URL de interés
          window.location.href = url;
  
          // Detiene el ciclo de recarga
          clearInterval(intervalId);
        })
        .catch(() => {
          // Muestra el mensaje en la consola con la hora y el número de intentos
          console.log(`Intentando nuevamente... Hora: ${getCurrentTime()} | Intentos fallidos: ${attemptCount}`);
        });
    }
  
    // Ejecuta checkPage cada 5 segundos
    const intervalId = setInterval(checkPage, 5000);
  })();