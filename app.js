
const GAMES = [{"slug": "monopoly-go", "name": "Monopoly GO!", "category": "Board", "resource": "Dice", "secondary": "Stickers", "tagline": "Roll, build and explore a playful board-world experience.", "colors": ["#ff5b5f", "#f7c948"], "motif": "dice"}, {"slug": "travel-town", "name": "Travel Town", "category": "Merge", "resource": "Energy", "secondary": "Coins", "tagline": "Merge items, travel through colorful locations, and keep your journey moving.", "colors": ["#15a9ff", "#7ce6c6"], "motif": "suitcase"}, {"slug": "gossip-harbor", "name": "Gossip Harbor", "category": "Merge", "resource": "Energy", "secondary": "Coins", "tagline": "A cozy harbor mystery with merging, stories, and seaside charm.", "colors": ["#ff4f9a", "#ffb17a"], "motif": "harbor"}, {"slug": "coin-master", "name": "Coin Master", "category": "Casual", "resource": "Spins", "secondary": "Coins", "tagline": "Spin, build, and raid through a colorful village adventure.", "colors": ["#8b5cf6", "#ffc857"], "motif": "coin"}, {"slug": "match-masters", "name": "Match Masters", "category": "Puzzle", "resource": "Boosters", "secondary": "Coins", "tagline": "Competitive matching with bright boards, boosters, and quick battles.", "colors": ["#5b7cff", "#ff4fd8"], "motif": "puzzle"}, {"slug": "tasty-travel", "name": "Tasty Travel", "category": "Merge", "resource": "Energy", "secondary": "Coins", "tagline": "A colorful food-and-travel merge journey with a cheerful atmosphere.", "colors": ["#ff8a3d", "#ffcc66"], "motif": "food"}, {"slug": "ea-fc-mobile", "name": "EA SPORTS FC Mobile", "category": "Sports", "resource": "FC Points", "secondary": "Coins", "tagline": "Football squads, events, and competitive mobile play.", "colors": ["#16c784", "#0b5cff"], "motif": "football"}, {"slug": "sm27", "name": "SM27", "category": "Sports", "resource": "Credits", "secondary": "Boosts", "tagline": "A football-management style experience focused on squads, tactics, and progress.", "colors": ["#16a3ff", "#42d392"], "motif": "tactics"}, {"slug": "roblox", "name": "Roblox", "category": "Creative", "resource": "Robux", "secondary": "Items", "tagline": "Explore user-created worlds, social experiences, and imaginative play.", "colors": ["#111827", "#00a6ff"], "motif": "blocks"}, {"slug": "pokemon-go", "name": "Pokémon GO", "category": "Adventure", "resource": "PokéCoins", "secondary": "Items", "tagline": "Outdoor exploration, collecting, raids, and location-based discovery.", "colors": ["#2c7be5", "#7ad66d"], "motif": "map"}, {"slug": "royal-match", "name": "Royal Match", "category": "Puzzle", "resource": "Coins", "secondary": "Boosters", "tagline": "Bright match-3 levels with castle-themed progression.", "colors": ["#1f8cff", "#ffd257"], "motif": "crown"}, {"slug": "township", "name": "Township", "category": "Simulation", "resource": "Cash", "secondary": "Coins", "tagline": "Build a town, grow crops, and develop a relaxed mobile community.", "colors": ["#22b573", "#f9b233"], "motif": "town"}, {"slug": "family-island", "name": "Family Island", "category": "Adventure", "resource": "Energy", "secondary": "Rubies", "tagline": "Island exploration, crafting, farming, and family adventures.", "colors": ["#f2994a", "#27ae60"], "motif": "island"}, {"slug": "gardenscapes", "name": "Gardenscapes", "category": "Puzzle", "resource": "Coins", "secondary": "Boosters", "tagline": "Match-3 puzzles paired with garden restoration and story moments.", "colors": ["#25b85a", "#65c8ff"], "motif": "garden"}, {"slug": "homescapes", "name": "Homescapes", "category": "Puzzle", "resource": "Coins", "secondary": "Boosters", "tagline": "Puzzle levels and home renovation in a light story-driven format.", "colors": ["#ff8c42", "#61b5ff"], "motif": "home"}, {"slug": "whiteout-survival", "name": "Whiteout Survival", "category": "Strategy", "resource": "Gems", "secondary": "Speedups", "tagline": "A frozen survival strategy world with city-building and alliances.", "colors": ["#79c8ff", "#d7f5ff"], "motif": "snow"}, {"slug": "rise-of-kingdoms", "name": "Rise of Kingdoms", "category": "Strategy", "resource": "Gems", "secondary": "Speedups", "tagline": "Civilization strategy, map exploration, alliances, and large-scale battles.", "colors": ["#b7863c", "#f2c66d"], "motif": "fort"}, {"slug": "dice-dreams", "name": "Dice Dreams", "category": "Board", "resource": "Rolls", "secondary": "Coins", "tagline": "A colorful dice-and-kingdom board adventure.", "colors": ["#8f63ff", "#4ed8ff"], "motif": "dice2"}, {"slug": "brawl-stars", "name": "Brawl Stars", "category": "Action", "resource": "Gems", "secondary": "Coins", "tagline": "Fast multiplayer battles with colorful arenas and varied modes.", "colors": ["#ff4e45", "#ffcd3c"], "motif": "star"}, {"slug": "clash-of-clans", "name": "Clash of Clans", "category": "Strategy", "resource": "Gems", "secondary": "Gold", "tagline": "Village building, clan play, upgrades, and strategic attacks.", "colors": ["#e67e22", "#8e44ad"], "motif": "shield"}, {"slug": "candy-crush-saga", "name": "Candy Crush Saga", "category": "Puzzle", "resource": "Gold Bars", "secondary": "Boosters", "tagline": "Classic colorful match-3 puzzle progression.", "colors": ["#ff4fa3", "#5cd6ff"], "motif": "candy"}, {"slug": "last-war-survival", "name": "Last War: Survival", "category": "Strategy", "resource": "Diamonds", "secondary": "Speedups", "tagline": "Base progression, squads, and survival strategy.", "colors": ["#f04f3d", "#ffc046"], "motif": "bunker"}];

const CONFIG = {
  lockerUrl: "https://YOUR-ADBLUEMEDIA-LOCKER-URL.example/offer",
  siteName: "Ludora",
  defaultMember: ""
};

const app = document.getElementById("app");
const qp = () => new URLSearchParams(location.search);
const currentS1 = () => qp().get("s1") || CONFIG.defaultMember || "";

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[m]);
}
function asset(slug) { return `assets/games/${slug}.svg`; }
function setQuery(obj={}) {
  const p = new URLSearchParams();
  const s1 = currentS1();
  if (s1) p.set("s1", s1);
  Object.entries(obj).forEach(([k,v]) => v !== undefined && v !== null && v !== "" && p.set(k,v));
  history.pushState({}, "", location.pathname + (p.toString()?`?${p}`:""));
  render();
  window.scrollTo({top:0, behavior:"smooth"});
}
function route(name) {
  if(name==="home") setQuery({});
  else setQuery({page:name});
}
function goGame(slug) {
  const g = GAMES.find(x=>x.slug===slug); if(!g) return;
  setQuery({game:slug, s2:slug});
}
function toast(msg) {
  const el=document.getElementById("toast"); el.textContent=msg; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove("show"),2600);
}
function gameCard(g) {
  return `<article class="game-card" data-game="${esc(g.slug)}" tabindex="0" role="button" aria-label="Open ${esc(g.name)}">
    <img src="${asset(g.slug)}" alt="${esc(g.name)} themed artwork" />
    <div class="game-body"><h3>${esc(g.name)}</h3>
      <div class="meta"><span class="pill">${esc(g.category)}</span><span class="pill">${esc(g.resource)}</span></div>
      <p>${esc(g.tagline)}</p><div class="open-row"><span>Explore</span><span>→</span></div>
    </div></article>`;
}
function home() {
  const featured = GAMES.slice(0,8);
  const more = GAMES.slice(8,16);
  return `<div class="shell">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">✦ MULTI-GAME DISCOVERY HUB</span>
        <h1>More Play.<br><span class="gradient-text">More Moments.</span></h1>
        <p>Explore popular mobile games, browse game-specific content paths, and continue to available partner offers through one clean experience.</p>
        <div class="hero-search"><input id="heroSearch" placeholder="Search your favorite game..." /><button class="primary" id="heroSearchBtn">Search Games</button></div>
        <div class="trust-row"><div class="trust"><i>✓</i><span>Clean & transparent flow</span></div><div class="trust"><i>⌁</i><span>Mobile-first experience</span></div><div class="trust"><i>↗</i><span>One partner-offer gateway</span></div></div>
      </div>
    </section>

    <section class="section"><div class="section-head"><div><h2>Featured Games</h2><p>Distinct themes for each game — no duplicated artwork.</p></div><button class="link-btn" data-route="games">See all →</button></div>
      <div class="game-grid">${featured.map(gameCard).join("")}</div></section>

    <section class="section"><div class="section-head"><div><h2>Explore More</h2><p>More genres, more audiences, one scalable structure.</p></div></div>
      <div class="game-grid">${more.map(gameCard).join("")}</div></section>

    <section class="section banner"><div><h3>Your favorite games, all in one place.</h3><p>Every title gets its own visual language while staying inside the Ludora brand system.</p></div><button class="primary" data-route="games">Browse Games</button></section>
  </div>`;
}
function gamesPage() {
  const cats=["All",...new Set(GAMES.map(g=>g.category))];
  return `<div class="shell"><div class="page-title"><span class="eyebrow">GAME LIBRARY</span><h1>Explore Ludora</h1><p>Search by title or filter by category. Each game page uses its own colors, artwork and content options.</p></div>
    <div class="filters"><input class="search-inline" id="librarySearch" placeholder="Search games..." />${cats.map((c,i)=>`<button class="category-btn ${i===0?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div id="libraryGrid" class="game-grid">${GAMES.map(gameCard).join("")}</div></div>`;
}
function gamePage(g) {
  const [c1,c2]=g.colors;
  const amounts = g.resource.toLowerCase().includes("energy") ? ["100","250","500","1,000"] :
                  g.resource.toLowerCase().includes("dice") || g.resource.toLowerCase().includes("roll") ? ["500","1,000","2,500","5,000"] :
                  g.resource.toLowerCase().includes("point") ? ["500","2,500","5,000","12,000"] :
                  ["250","1,000","2,500","5,000"];
  return `<div class="shell game-page" style="--accent:${c1};--accent2:${c2}">
    <section class="game-hero"><img src="${asset(g.slug)}" alt="${esc(g.name)} artwork" />
      <div class="game-hero-content"><button class="back-btn" data-route="games">← Back to Games</button><h1>${esc(g.name)}</h1><p>${esc(g.tagline)}</p>
        <div class="meta"><span class="pill">${esc(g.category)}</span><span class="pill">${esc(g.resource)}</span><span class="pill">${esc(g.secondary)}</span></div>
      </div></section>
    <div class="game-layout">
      <section class="option-card"><h2>Choose what you want to explore</h2><p class="micro">Your selection is used to personalize the next step. It does not guarantee delivery of in-game currency or items.</p>
        <div class="tabs"><button class="tab active" data-res="${esc(g.resource)}">${esc(g.resource)}</button><button class="tab" data-res="${esc(g.secondary)}">${esc(g.secondary)}</button></div>
        <div class="amount-grid">${amounts.map((a,i)=>`<button class="amount ${i===1?"selected":""}" data-amount="${a}"><strong>${a}</strong><span>${esc(g.resource)}</span></button>`).join("")}</div>
        <button class="cta-full" id="continueBtn">Continue →</button>
        <div class="notice">Ludora is an independent discovery portal. We do not directly add currency, items, or progress to third-party game accounts. Partner offers have their own eligibility and completion requirements.</div>
      </section>
      <aside class="info-card"><h3>About this page</h3><div class="check-list"><div><b>✓</b><span>Unique theme for ${esc(g.name)}</span></div><div><b>✓</b><span>Mobile-first responsive layout</span></div><div><b>✓</b><span>Tracking-ready with <code>s1</code> and <code>s2</code></span></div><div><b>✓</b><span>Single AdBlueMedia locker destination</span></div></div></aside>
    </div>
  </div>`;
}
function verifyPage(g) {
  const p=qp(); const resource=p.get("resource")||g.resource; const amount=p.get("amount")||"";
  return `<div class="shell"><div class="verify-wrap"><div class="verify-card">
    <div class="lock-badge">↗</div><span class="eyebrow">PARTNER OFFER STEP</span><h1>Continue to available offers</h1>
    <p>You selected a ${esc(g.name)} content path. Continue to the partner offer page to see what is currently available in your region.</p>
    <div class="summary-box"><div class="summary-row"><span>Game</span><span>${esc(g.name)}</span></div><div class="summary-row"><span>Selection</span><span>${esc(resource)}${amount?` · ${esc(amount)}`:""}</span></div>${currentS1()?`<div class="summary-row"><span>Member ID</span><span>${esc(currentS1())}</span></div>`:""}</div>
    <button class="primary" style="width:100%" id="lockerBtn">Continue to Partner Offers →</button>
    <button class="back-btn" style="margin-top:12px" data-game="${esc(g.slug)}">← Change selection</button>
    <p class="micro">Partner offers are operated by third parties. Read the offer requirements before participating. Availability varies by location, device, and eligibility.</p>
  </div></div></div>`;
}
function faqPage() {
  const qas=[
    ["What is Ludora?","Ludora is an independent multi-game discovery portal that organizes game-specific content paths and links users to available partner offers."],
    ["Does Ludora directly give in-game currency or items?","No. Ludora does not directly add currency, items, progress, or other assets to third-party game accounts."],
    ["Why do game pages look different?","Each title has a unique visual system—artwork, colors and content emphasis—while the core Ludora navigation and tracking flow stays consistent."],
    ["How does the member tracking work?","Your public link can carry s1 as a member identifier. When a visitor chooses a game, Ludora adds s2 using that game's slug before the visitor continues to the single partner-offer URL."],
    ["Are partner offers the same everywhere?","No. Offer availability and eligibility can vary by country, device, age, and partner requirements."]
  ];
  return `<div class="shell"><div class="page-title"><span class="eyebrow">HELP</span><h1>Frequently Asked Questions</h1></div><div class="faq-list">${qas.map(([q,a])=>`<div class="faq-item"><button class="faq-q">${q}<span>+</span></button><div class="faq-a">${a}</div></div>`).join("")}</div></div>`;
}
function aboutPage() {
  return `<div class="shell"><div class="page-title"><span class="eyebrow">ABOUT LUDORA</span><h1>One brand. Many games.</h1><p>Ludora is designed as a scalable multi-game hub with a clean, consistent core and a distinct visual identity for every game.</p></div>
  <article class="static-card"><h2>Brand idea</h2><p>The name “Ludora” is a coined brand name that evokes the Latin roots around <em>ludus</em> and <em>ludere</em>—game and play—combined with a smooth, premium-sounding ending.</p><h2>Design principles</h2><p>Mobile first, fast to scan, distinct game art, transparent calls to action, and a single reusable tracking flow for member traffic.</p></article></div>`;
}
function termsPage() {
  return `<div class="shell"><div class="page-title"><span class="eyebrow">LEGAL</span><h1>Terms of Service</h1></div><article class="static-card">
    <p>By using Ludora you agree to use the site lawfully and to review any third-party offer requirements before participating.</p>
    <h2>Independent service</h2><p>Ludora is not affiliated with, endorsed by, or sponsored by the publishers, developers, or trademark owners of the games referenced on this site. Game names may be used only to identify the relevant game content.</p>
    <h2>No guarantee of game assets</h2><p>Ludora does not directly provide, inject, generate, or add in-game currency, items, progress, or account benefits. Any partner promotion is governed by its own terms and availability.</p>
    <h2>Third-party offers</h2><p>Partner pages may collect information or require actions under their own terms and privacy policies. Users should read those terms before participating.</p>
    <h2>Eligibility</h2><p>Users are responsible for meeting age, regional, device, and other requirements that apply to any partner offer.</p>
  </article></div>`;
}
function privacyPage() {
  return `<div class="shell"><div class="page-title"><span class="eyebrow">LEGAL</span><h1>Privacy Policy</h1></div><article class="static-card">
    <p>Ludora is designed to minimize data collection on the landing page. The site may read URL parameters such as <code>s1</code> and <code>s2</code> for attribution and navigation.</p>
    <h2>Tracking parameters</h2><p><code>s1</code> may represent a member or traffic-source identifier. <code>s2</code> identifies the selected game. These values can be forwarded to the configured partner URL.</p>
    <h2>Third parties</h2><p>When you leave Ludora for a partner site, that site's privacy policy applies. Review it before submitting personal information.</p>
    <h2>Cookies</h2><p>This static version of Ludora does not require cookies for core navigation. If you later add analytics, consent and disclosure should be implemented as required by applicable law.</p>
  </article></div>`;
}
function render() {
  const p=qp(), slug=p.get("game"), page=p.get("page"), step=p.get("step");
  if(slug) {
    const g=GAMES.find(x=>x.slug===slug);
    if(!g) { app.innerHTML=gamesPage(); bind(); return; }
    app.innerHTML = step==="verify" ? verifyPage(g) : gamePage(g);
  } else if(page==="games") app.innerHTML=gamesPage();
  else if(page==="faq") app.innerHTML=faqPage();
  else if(page==="about") app.innerHTML=aboutPage();
  else if(page==="terms") app.innerHTML=termsPage();
  else if(page==="privacy") app.innerHTML=privacyPage();
  else app.innerHTML=home();
  bind();
  document.getElementById("year").textContent=new Date().getFullYear();
}
function bind() {
  document.querySelectorAll("[data-route]").forEach(el=>el.onclick=()=>route(el.dataset.route));
  document.querySelectorAll("[data-game]").forEach(el=>{
    el.onclick=()=>goGame(el.dataset.game);
    el.onkeydown=e=>{if(e.key==="Enter"||e.key===" ") goGame(el.dataset.game)};
  });
  document.querySelectorAll(".game-card").forEach(el=>{
    el.onclick=()=>goGame(el.dataset.game);
    el.onkeydown=e=>{if(e.key==="Enter"||e.key===" ") goGame(el.dataset.game)};
  });
  const heroSearch=document.getElementById("heroSearch");
  const heroSearchBtn=document.getElementById("heroSearchBtn");
  if(heroSearchBtn) heroSearchBtn.onclick=()=>openSearch(heroSearch?.value||"");
  if(heroSearch) heroSearch.onkeydown=e=>{if(e.key==="Enter") openSearch(heroSearch.value)};
  const librarySearch=document.getElementById("librarySearch");
  if(librarySearch) librarySearch.oninput=()=>filterLibrary();
  document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{
    document.querySelectorAll("[data-cat]").forEach(x=>x.classList.remove("active")); b.classList.add("active"); filterLibrary(b.dataset.cat);
  });
  document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");
    document.querySelectorAll(".amount span").forEach(s=>s.textContent=t.dataset.res);
  });
  document.querySelectorAll(".amount").forEach(a=>a.onclick=()=>{document.querySelectorAll(".amount").forEach(x=>x.classList.remove("selected"));a.classList.add("selected")});
  const cont=document.getElementById("continueBtn");
  if(cont) cont.onclick=()=>{
    const g=GAMES.find(x=>x.slug===qp().get("game"));
    const res=document.querySelector(".tab.active")?.dataset.res||g.resource;
    const amt=document.querySelector(".amount.selected")?.dataset.amount||"";
    setQuery({game:g.slug,s2:g.slug,step:"verify",resource:res,amount:amt});
  };
  const locker=document.getElementById("lockerBtn");
  if(locker) locker.onclick=()=>{
    const g=GAMES.find(x=>x.slug===qp().get("game")); if(!g) return;
    if(CONFIG.lockerUrl.includes("YOUR-ADBLUEMEDIA-LOCKER-URL")) {
      toast("Set your AdBlueMedia locker URL in app.js → CONFIG.lockerUrl");
      return;
    }
    const u=new URL(CONFIG.lockerUrl, location.href);
    if(currentS1()) u.searchParams.set("s1",currentS1());
    u.searchParams.set("s2",g.slug);
    location.href=u.toString();
  };
  document.querySelectorAll(".faq-q").forEach(q=>q.onclick=()=>q.closest(".faq-item").classList.toggle("open"));
}
function filterLibrary(cat) {
  const q=(document.getElementById("librarySearch")?.value||"").toLowerCase().trim();
  const active=cat || document.querySelector("[data-cat].active")?.dataset.cat || "All";
  const list=GAMES.filter(g=>(active==="All"||g.category===active) && (!q||`${g.name} ${g.category} ${g.resource}`.toLowerCase().includes(q)));
  document.getElementById("libraryGrid").innerHTML=list.map(gameCard).join("");
  bind();
}
function openSearch(initial="") {
  const modal=document.getElementById("searchModal"); modal.hidden=false;
  const input=document.getElementById("globalSearch"); input.value=initial; updateSearch(initial); setTimeout(()=>input.focus(),50);
}
function updateSearch(q="") {
  const s=q.toLowerCase().trim();
  const list=GAMES.filter(g=>!s||`${g.name} ${g.category}`.toLowerCase().includes(s)).slice(0,10);
  document.getElementById("searchResults").innerHTML=list.map(g=>`<button class="search-result" data-search-game="${g.slug}"><img src="${asset(g.slug)}" alt=""><span><strong>${esc(g.name)}</strong><small>${esc(g.category)} · ${esc(g.resource)}</small></span></button>`).join("");
  document.querySelectorAll("[data-search-game]").forEach(b=>b.onclick=()=>{closeSearch();goGame(b.dataset.searchGame)});
}
function closeSearch(){document.getElementById("searchModal").hidden=true}
document.getElementById("searchButton").onclick=()=>openSearch();
document.getElementById("closeSearch").onclick=closeSearch;
document.getElementById("searchModal").onclick=e=>{if(e.target.id==="searchModal") closeSearch()};
document.getElementById("globalSearch").oninput=e=>updateSearch(e.target.value);
function openDrawer(){document.getElementById("drawer").classList.add("open");document.getElementById("drawer").setAttribute("aria-hidden","false");document.getElementById("drawerBackdrop").hidden=false}
function closeDrawer(){document.getElementById("drawer").classList.remove("open");document.getElementById("drawer").setAttribute("aria-hidden","true");document.getElementById("drawerBackdrop").hidden=true}
document.getElementById("menuButton").onclick=openDrawer;document.getElementById("moreButton").onclick=openDrawer;document.getElementById("closeDrawer").onclick=closeDrawer;document.getElementById("drawerBackdrop").onclick=closeDrawer;
document.getElementById("drawer").addEventListener("click",e=>{if(e.target.matches("[data-route]")) closeDrawer()});
window.addEventListener("popstate",render);
render();
