/* ==========================================
   STUDY KENDRA - KAVERI NAVIGATION
========================================== */

const kaveriChapters = [
   
   {
      title: "📘 Chapter 1: How I Taught My Grandmother to Read",
      url: "class-9-english-kaveri-chapter-1-how-i-taught-my-grandmother-to-read.html"
   },
   
   {
      title: "📖 Poem 1: Bharat, Our Land",
      url: "class-9-english-kaveri-poem-1-bharat-our-land.html"
   },
   
   {
      title: "📘 Chapter 2: The Pot Maker",
      url: "class-9-english-kaveri-chapter-2-the-pot-maker.html"
   },
   
   {
      title: "📖 Poem 2: Gifts of Grace: Honouring Our Vocations ",
      url: "class-9-english-kaveri-poem-2-gifts-of-grace-honouring-our-vocations.html"
   },
   
   {
      title: "📘 Chapter 3: Winds of Change",
      url: "class-9-english-kaveri-chapter-3-winds-of-change.html"
   },
   
   {
      title: "📖 Poem 3: Canvas of Soil",
      url: "class-9-english-kaveri-poem-3-canvas-of-soil.html"
   },
   
   {
      title: "📘 Chapter 4: Vitamin M",
      url: "class-9-english-kaveri-chapter-4-vitamin-m.html"
   },
   
   {
      title: "📖 Poem 4: I Cannot Remember My Mother",
      url: "class-9-english-kaveri-poem-4-i-cannot-remember-my-mother.html"
   },
   
   {
      title: "📘 Chapter 5: The World of Limitless Possibilities",
      url: "class-9-english-kaveri-chapter-5-the-world-of-limitless-possibilities.html"
   },
   
   {
      title: "📖 Poem 5: Nine Gold Medals",
      url: "class-9-english-kaveri-poem-5-nine-gold-medals.html"
   },
   
   {
      title: "📘 Chapter 6: Twin Melodies",
      url: "class-9-english-kaveri-chapter-6-twin-melodies.html"
   },
   
   {
      title: "📖 Poem 6: A Friend Found in Music",
      url: "class-9-english-kaveri-poem-6-a-friend-found-in-music.html"
   },
   
    {
      title: "📘 Chapter 7: Carrier of Words",
      url: "class-9-english-kaveri-chapter-7-carrier-of-words.html"
   },  
  
 {
      title: "📖 Poem 7: Words",
      url: "class-9-english-kaveri-poem-7-words.html"
   }, 
   
   {
      title: "📘 Chapter 8: Follow That Dream",
      url: "class-9-english-kaveri-chapter-8-follow-that-dream.html"
   },  
  
  {
      title: "📖 Poem 8: Believe in Yourself",
      url: "class-9-english-kaveri-poem-8-believe-in-yourself.html"
   },
   
];

document.addEventListener("DOMContentLoaded", () => {
   
   const container = document.getElementById("kaveriNavigation");
   
   if (!container) return;
   
   const currentPage = window.location.pathname.split("/").pop();
   
   let html = `
<section class="more-chapters">

<h2>📚 More Chapters</h2>

<div class="chapter-grid">
`;
   
   kaveriChapters.forEach(item => {
      
      const active = currentPage === item.url ? "active" : "";
      
      html += `
<a href="${item.url}" class="chapter-link ${active}">
${item.title}
</a>
`;
      
   });
   
   html += `
</div>

</section>
`;
   
   container.innerHTML = html;
   
});