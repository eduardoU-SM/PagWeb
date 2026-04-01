module.exports = function(eleventyConfig) {
  //REGISTRAMOS EL FILTRO "dateFilter"
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    // Esto convierte la fecha a formato: 1 de abril de 2026
    return new Date(dateObj).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  // Copia la carpeta de assets (CSS, imágenes) al sitio final
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",          // Cambiamos la entrada a la carpeta src
      output: "_site",       // La web generada sigue yendo a _site
      includes: "_includes", // Relativo a la carpeta input (src)
      data: "_data"          // Para tus variables globales
    }
  };
};