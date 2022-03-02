module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#002c40',
      'cream': '#dbe6dd',
      'deep-purple': '#330561',
      'light-blue': '#5db7de',
      'beige-green': '#bfcc94',
    },
    extend: {
      backgroundImage: theme => ({
        'planets': "url('/src/images/planets.jpg')"
      }),
      fontFamily: {
        'sans': ['Asul', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
