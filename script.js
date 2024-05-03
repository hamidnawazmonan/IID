document.addEventListener("DOMContentLoaded", function () {
  const filterButton = document.querySelector(".btn-filter");
  const filters = document.querySelector(".filters");
  const caretIcon = document.querySelector(".btn-icon");

  // Add click event listener to filter button
  filterButton.addEventListener("click", function () {
    // Toggle the visibility of filters
    filters.classList.toggle("active");
    // Toggle the rotation of caret icon based on the active class
    caretIcon.classList.toggle("rotate", !filters.classList.contains("active"));
  });

  // Function to set initial button behavior
  function initialButtonBehavior() {
    // If window width is greater than 767px, add 'active' class to filters
    if (window.innerWidth > 768) {
      filters.classList.add("active");
      // Remove 'rotate' class from caret icon
      caretIcon.classList.remove("rotate");
    } else {
      // Otherwise, remove 'active' class from filters and add 'rotate' class to caret icon
      filters.classList.remove("active");
      caretIcon.classList.add("rotate");
    }
  }

  // Call initialButtonBehavior function on DOMContentLoaded event
  initialButtonBehavior();

  // Call initialButtonBehavior function on window resize
  window.addEventListener("resize", initialButtonBehavior);
});

const donut_chart = document.querySelectorAll(".my_chart canvas");
for (dc of donut_chart) {
  new Chart(dc, {
    type: "doughnut",
    data: {
      // labels:["Good", "Bad"],
      datasets: [
        {
          label: "select",
          backgroundColor: ["black", "lightgray"],
          data: [308542, 383257],
        },
      ],
    },
    options: {
      cutout: 12.5,
      borderWidth: 0,
    },
  });
}
