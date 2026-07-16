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
    
    {
    title: "Canvas of Soil",
    category: "Poem",
    keywords: "poem 3 kaveri poem 3 canvas of soil",
    link: "chapters/class-9-english-kaveri-poem-3-canvas-of-soil.html"
},

{
    title: "Vitamin-M",
    category: "Chapter",
    keywords: "chapter 4 kaveri chapter 4 class 9 english vitamin m vitamin-m",
    link: "chapters/class-9-english-kaveri-chapter-4-vitamin-m.html"
},

{
    title: "I Cannot Remember My Mother",
    category: "Poem",
    keywords: "poem 4 kaveri poem 4 i cannot remember my mother",
    link: "chapters/class-9-english-kaveri-poem-4-i-cannot-remember-my-mother.html"
},

{
    title: "The World of Limitless Possibilities",
    category: "Chapter",
    keywords: "chapter 5 kaveri chapter 5 class 9 english the world of limitless possibilities",
    link: "chapters/class-9-english-kaveri-chapter-5-the-world-of-limitless-possibilities.html"
},

{
    title: "Nine Gold Medals",
    category: "Poem",
    keywords: "poem 5 kaveri poem 5 nine gold medals",
    link: "chapters/class-9-english-kaveri-poem-5-nine-gold-medals.html"
},

{
    title: "Twin Melodies",
    category: "Chapter",
    keywords: "chapter 6 kaveri chapter 6 class 9 english twin melodies",
    link: "chapters/class-9-english-kaveri-chapter-6-twin-melodies.html"
},

{
    title: "A Friend Found in Music",
    category: "Poem",
    keywords: "poem 6 kaveri poem 6 a friend found in music",
    link: "chapters/class-9-english-kaveri-poem-6-a-friend-found-in-music.html"
},

{
    title: "Carrier of Words",
    category: "Chapter",
    keywords: "chapter 7 kaveri chapter 7 class 9 english carrier of words",
    link: "chapters/class-9-english-kaveri-chapter-7-carrier-of-words.html"
},

{
    title: "Words",
    category: "Poem",
    keywords: "poem 7 kaveri poem 7 words",
    link: "chapters/class-9-english-kaveri-poem-7-words.html"
},

{
    title: "Follow That Dream",
    category: "Chapter",
    keywords: "chapter 8 kaveri chapter 8 class 9 english follow that dream",
    link: "chapters/class-9-english-kaveri-chapter-8-follow-that-dream.html"
},

{
    title: "Believe in Yourself",
    category: "Poem",
    keywords: "poem 8 kaveri poem 8 believe in yourself",
    link: "chapters/class-9-english-kaveri-poem-8-believe-in-yourself.html"
},
    
    
    /* ==========================
       TOOLS
    ========================== */
    
{
    title: "Percentage Calculator",
    category: "Tool",
    keywords: "percentage calculator",
    link: "tools/percentage-calculator.html"
},

{
    title: "CGPA Calculator",
    category: "Tool",
    keywords: "cgpa calculator",
    link: "tools/cgpa-calculator.html"
},

{
    title: "Attendance Calculator",
    category: "Tool",
    keywords: "attendance calculator",
    link: "tools/attendance-calculator.html"
},

{
    title: "Study Timer",
    category: "Tool",
    keywords: "study timer pomodoro timer",
    link: "tools/study-timer.html"
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
