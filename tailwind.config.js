/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image': "url('/images/background/Gc-rice-and-chicken.jpeg')",
        'back-image': "url('/images/background/Background.jpg')",
        'image-back': "url('/images/background/salad.jpeg')",
      },
      fontFamily:{
        pop:['Poppins'],
        ant:['Anton'],
        alex:['Alex Brush'],
        arv:['Arvo'],
        archivo:['Archivo Black']
      }
    },
  },
  plugins: [],
}

