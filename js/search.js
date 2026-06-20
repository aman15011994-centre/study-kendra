/* ==========================================
STUDY KENDRA - SEARCH SYSTEM
========================================== */

const searchData = [
    
    /* ==========================
       SUBJECTS
    ========================== */
    
    {
        title: "English",
        category: "Subject",
        keywords: "class 9 english kaveri",
        link: "class9.html"
    },
    
    {
        title: "Hindi",
        category: "Subject",
        keywords: "class 9 hindi",
        link: "class9.html"
    },
    
    {
        title: "Science",
        category: "Subject",
        keywords: "class 9 science",
        link: "class9.html"
    },
    
    {
        title: "Maths",
        category: "Subject",
        keywords: "class 9 maths mathematics",
        link: "class9.html"
    },
    
    {
        title: "Sanskrit",
        category: "Subject",
        keywords: "class 9 sanskrit",
        link: "class9.html"
    },
    
    {
        title: "Computer",
        category: "Subject",
        keywords: "class 9 computer",
        link: "class9.html"
    },
    
    /* ==========================
       KAVERI CHAPTERS & POEMS
    ========================== */
    
    {
        title: "How I Taught My Grandmother to Read",
        category: "Chapter",
        keywords: "chapter 1 kaveri chapter 1 class 9 english grandmother",
        link: "chapters/class-9-english-kaveri-chapter-1-how-i-taught-my-grandmother-to-read.html"
    },
    
    {
        title: "Bharat Our Land",
        category: "Poem",
        keywords: "poem 1 kaveri poem 1 bharat our land",
        link: "chapters/class-9-english-kaveri-poem-1-bharat-our-land.html"
    },
    
    {
        title: "The Pot Maker",
        category: "Chapter",
        keywords: "chapter 2 kaveri chapter 2 class 9 english pot maker",
        link: "chapters/class-9-english-kaveri-chapter-2-the-pot-maker.html"
    },
    
    {
        title: "Gifts of Grace Honouring Our Vocations",
        category: "Poem",
        keywords: "poem 2 kaveri poem 2 gifts of grace honouring our vocations",
        link: "chapters/class-9-english-kaveri-poem-2-gifts-of-grace-honouring-our-vocations.html"
    },
    
    {
        title: "Winds of Change",
        category: "Chapter",
        keywords: "chapter 3 kaveri chapter 3 class 9 english winds of change",
        link: "chapters/class-9-english-kaveri-chapter-3-winds-of-change.html"
    },
    
    /* ==========================
       TOOLS
    ========================== */
    
    {
        title: "Percentage Calculator",
        category: "Tool",
        keywords: "percentage calculator",
        link: "tools.html"
    },
    
    {
        title: "CGPA Calculator",
        category: "Tool",
        keywords: "cgpa calculator",
        link: "tools.html"
    },
    
    {
        title: "Attendance Calculator",
        category: "Tool",
        keywords: "attendance calculator",
        link: "tools.html"
    },
    
    {
        title: "Study Timer",
        category: "Tool",
        keywords: "study timer pomodoro timer",
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
    
    resultsContainer.style.display = "none";
    
    searchInput.addEventListener("focus", () => {
        showDefaultResults(resultsContainer);
    });
    
    searchInput.addEventListener("input", () => {
        
        const query =
            searchInput.value.trim().toLowerCase();
        
        if (query === "") {
            showDefaultResults(resultsContainer);
            return;
        }
        
        const results = searchData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.keywords.toLowerCase().includes(query)
        );
        
        renderResults(results, resultsContainer);
        
    });
    
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
SHOW RESULTS
========================================== */

function renderResults(results, container) {
    
    container.innerHTML = "";
    container.style.display = "block";
    
    if (results.length === 0) {
        
        container.innerHTML =
            "<div class='search-no-result'>No Results Found</div>";
        
        return;
    }
    
    results.forEach(item => {
        
        const suggestion =
            document.createElement("a");
        
        suggestion.href = item.link;
        suggestion.className = "search-suggestion-item";
        
        suggestion.innerHTML =
            "<span class='suggestion-title'>" + item.title +
            "</span><span class='suggestion-category'>" +
            item.category + "</span>";
        
        container.appendChild(suggestion);
        
    });
    
}

/* ==========================================
DEFAULT RESULTS
========================================== */

function showDefaultResults(container) {
    
    container.innerHTML = "";
    
    searchData.forEach(item => {
        
        const suggestion =
            document.createElement("a");
        
        suggestion.href = item.link;
        suggestion.className = "search-suggestion-item";
        
        suggestion.innerHTML =
            "<span class='suggestion-title'>" + item.title +
            "</span><span class='suggestion-category'>" +
            item.category + "</span>";
        
        container.appendChild(suggestion);
        
    });
    
    container.style.display = "block";
    
}
