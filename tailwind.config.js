module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gris: {
          claro: '#f3f4f6',
          medio: '#9ca3af',
          oscuro: '#374151',
        },
        plomo: {
          claro: '#e5e7eb',
          medio: '#6b7280',
          oscuro: '#111827',
        },
      },
    },
  },
  plugins: [],
};
