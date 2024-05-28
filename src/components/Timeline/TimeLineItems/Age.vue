<template>
    <div class="age-indicator">
      <span>{{ age }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "AgeIndicator",
    props: {
      age: {
        type: Number,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .age-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px; /* Adjust width as needed */
    height: 50px;
    border-radius: 50%; /* Create a circle */
    background-color: #ddd; /* Set background color */
    /* Add other styles for border, text color, etc. */
  }
  
  .age-indicator span {
    font-size: 16px; /* Adjust font size */
    font-weight: bold; /* Make text bold */
  }
  </style>