/* ==========================================
   STUDY KENDRA - SEARCH SYSTEM
========================================== */

const searchData = [
    
    // Subjects
    {
        title: "English",
        category: "Subject",
        link: "class9.html"
    },
    {
        title: "Hindi",
        category: "Subject",
        link: "class9.html"
    },
    {
        title: "Science",
        category: "Subject",
        link: "class9.html"
    },
    {
        title: "Maths",
        category: "Subject",
        link: "class9.html"
    },
    {
        title: "Sanskrit",
        category: "Subject",
        link: "class9.html"
    },
    {
        title: "Computer",
        category: "Subject",
        link: "class9.html"
    },
    
    // Chapters
    {
        title: "How I Taught My Grandmother to Read",
        category: "Chapter",
        link: "chapters/class-9-english-kaveri-chapter-1-how-i-taught-my-grandmother-to-read.html"
    },
    {
        title: "Class 9 English Kaveri Chapter 1",
        category: "Chapter",
        link: "chapters/class-9-english-kaveri-chapter-1-how-i-taught-my-grandmother-to-read.html"
    },
    {
        title: "Kaveri Chapter 1",
        category: "Chapter",
        link: "chapters/class-9-english-kaveri-chapter-1-how-i-taught-my-grandmother-to-read.html"
    },
    
    // Tools
    {
        title: "Percentage Calculator",
        category: "Tool",
        link: "tools.html"
    },
    {
        title: "CGPA Calculator",
        category: "Tool",
        link: "tools.html"
    },
    {
        title: "Attendance Calculator",
        category: "Tool",
        link: "tools.html"
    },
    {
        title: "Study Timer",
        category: "Tool",
        link: "tools.html"
    }
    
];

/* ==========================================
   SEARCH START
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    const searchInput =
        document.getElementById("searchInput") ||
        document.getElementById("mainSearchInput");
    
    const resultsContainer =
        document.getElementById("searchResults") ||
        document.getElementById("mainSearchResults");
    
    if (!searchInput || !resultsContainer) return;
    
    // Hide suggestions initially
    resultsContainer.style.display = "none";
    
    // Show suggestions on focus
    searchInput.addEventListener("focus", () => {
        showDefaultResults(resultsContainer);
    });
    
    // Search while typing
    searchInput.addEventListener("input", () => {
        
        const query =
            searchInput.value.trim().toLowerCase();
        
        if (query === "") {
            showDefaultResults(resultsContainer);
            return;
        }
        
        const results = searchData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        
        renderResults(results, resultsContainer);
        
    });
    
    // Hide when clicked outside
    document.addEventListener("click", (e) => {
        
        if (
            e.target !== searchInput &&
            !resultsContainer.contains(e.target)
        ) {
            resultsContainer.style.display = "none";
        }
        
    });
    
});

/* ==========================================
   SHOW SEARCH RESULTS
========================================== */

function renderResults(results, container) {
    
    container.innerHTML = "";
    container.style.display = "block";
    
    if (results.length === 0) {
        
        container.innerHTML =
            "<a>No Results Found</a>";
        
        return;
    }
    
    results.forEach(item => {
        
        const suggestion =
            document.createElement("a");
        
        suggestion.href = item.link;
        
        suggestion.textContent =
            item.title + " (" + item.category + ")";
        
        container.appendChild(suggestion);
        
    });
    
}

/* ==========================================
   DEFAULT SUGGESTIONS
========================================== */

function showDefaultResults(container) {
    
    container.innerHTML = "";
    
    searchData.forEach(item => {
        
        const suggestion =
            document.createElement("a");
        
        suggestion.href = item.link;
        
        suggestion.textContent =
            item.title;
        
        container.appendChild(suggestion);
        
    });
    
    container.style.display = "block";
    
}