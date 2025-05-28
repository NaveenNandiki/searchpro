const suggestions = [
    "react tutorial",
    "react hooks examples",
    "react native vs flutter",
    "react performance optimization",
    "react state management",
    "react router dom",
    "react query tutorial",
    "react typescript guide",
    "react best practices",
    "react testing library"
  ];
  
  const suggestionsBox = document.getElementById("suggestionsBox");
  const searchInput = document.getElementById("searchInput");
  
  function clearSearch() {
    searchInput.value = "";
    suggestionsBox.style.display = "none";
  }
  
  function filterSuggestions() {
    const value = searchInput.value.toLowerCase();
    const filtered = suggestions.filter(item =>
      item.toLowerCase().includes(value)
    );
  
    if (value === "" || filtered.length === 0) {
      suggestionsBox.style.display = "none";
      return;
    }
  
    suggestionsBox.innerHTML = filtered
      .map(item => `<div class="suggestion-item">🔍 ${item}</div>`)
      .join("");
  
    suggestionsBox.style.display = "block";
  }
  