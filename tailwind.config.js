/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      backgroundImage:{
        'hero-image': "url('/images/bacground/Gc-rice-and-chicken.jpeg')",
        'back-image': "url('/images/background/Background.jpg')",
        'image-back': "url('/images/background/salad.jpeg')",
      },
      fontFamily:{
        pop:['Poppins'],
        ant:['Anton']
      }
    },
  },
  plugins: [],
}

