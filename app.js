const GAMES = [
  {slug:"monopoly-go",name:"Monopoly GO!",category:"Board",resource:"Dice",secondary:"Stickers",tagline:"Roll, build and explore a playful board-world experience.",colors:["#ff5b5f","#f7c948"],badge:"Popular",vibe:"Board-city energy with warm red, gold and dice-inspired details."},
  {slug:"travel-town",name:"Travel Town",category:"Merge",resource:"Energy",secondary:"Coins",tagline:"Merge items, travel through colorful locations, and keep your journey moving.",colors:["#16a9ff","#7ce6c6"],badge:"Trending",vibe:"Bright coastal travel tones, breezy blues and relaxed adventure styling."},
  {slug:"gossip-harbor",name:"Gossip Harbor",category:"Merge",resource:"Energy",secondary:"Coins",tagline:"A cozy harbor mystery with merging, stories, and seaside charm.",colors:["#ff4f9a","#ffb17a"],badge:"Hot",vibe:"Warm harbor sunset colors with soft story-driven details."},
  {slug:"coin-master",name:"Coin Master",category:"Casual",resource:"Spins",secondary:"Coins",tagline:"Spin, build, and raid through a colorful village adventure.",colors:["#8b5cf6","#ffc857"],badge:"Popular",vibe:"Deep violet, gold highlights and a playful treasure-inspired mood."},
  {slug:"match-masters",name:"Match Masters",category:"Puzzle",resource:"Boosters",secondary:"Coins",tagline:"Competitive matching with bright boards, boosters, and quick battles.",colors:["#5b7cff","#ff4fd8"],badge:"Trending",vibe:"Competitive neon puzzle styling with electric blue and magenta."},
  {slug:"tasty-travel",name:"Tasty Travel",category:"Merge",resource:"Energy",secondary:"Coins",tagline:"A colorful food-and-travel merge journey with a cheerful atmosphere.",colors:["#ff8a3d","#ffcc66"],badge:"New",vibe:"Warm food-and-travel palette with orange, cream and cheerful highlights."},
  {slug:"ea-fc-mobile",name:"EA SPORTS FC Mobile",category:"Sports",resource:"FC Points",secondary:"Coins",tagline:"Football squads, events, and competitive mobile play.",colors:["#16c784","#0b5cff"],badge:"Sports",vibe:"Stadium-inspired green and deep blue with sharper competitive styling."},
  {slug:"sm27",name:"SM27",category:"Sports",resource:"Credits",secondary:"Boosts",tagline:"A football-management style experience focused on squads, tactics, and progress.",colors:["#16a3ff","#42d392"],badge:"Manager",vibe:"Tactical dashboard feel with cool blues and management-focused details."},
  {slug:"roblox",name:"Roblox",category:"Creative",resource:"Robux",secondary:"Items",tagline:"Explore user-created worlds, social experiences, and imaginative play.",colors:["#1b2330","#00a6ff"],badge:"Creative",vibe:"Clean block-inspired dark styling with crisp blue accents."},
  {slug:"pokemon-go",name:"Pokémon GO",category:"Adventure",resource:"PokéCoins",secondary:"Items",tagline:"Outdoor exploration, collecting, raids, and location-based discovery.",colors:["#2c7be5","#7ad66d"],badge:"Explore",vibe:"Map and outdoor discovery styling with sky blue and green."},
  {slug:"royal-match",name:"Royal Match",category:"Puzzle",resource:"Coins",secondary:"Boosters",tagline:"Bright match-3 levels with castle-themed progression.",colors:["#1f8cff","#ffd257"],badge:"Puzzle",vibe:"Royal blue and gold with castle-inspired polish."},
  {slug:"township",name:"Township",category:"Simulation",resource:"Cash",secondary:"Coins",tagline:"Build a town, grow crops, and develop a relaxed mobile community.",colors:["#22b573","#f9b233"],badge:"Sim",vibe:"Fresh green and harvest gold with a town-building atmosphere."},
  {slug:"family-island",name:"Family Island",category:"Adventure",resource:"Energy",secondary:"Rubies",tagline:"Island exploration, crafting, farming, and family adventures.",colors:["#f2994a","#27ae60"],badge:"Adventure",vibe:"Tropical orange and island green with a warm exploration feel."},
  {slug:"gardenscapes",name:"Gardenscapes",category:"Puzzle",resource:"Coins",secondary:"Boosters",tagline:"Match-3 puzzles paired with garden restoration and story moments.",colors:["#25b85a","#65c8ff"],badge:"Puzzle",vibe:"Fresh garden greens and clear sky blues."},
  {slug:"homescapes",name:"Homescapes",category:"Puzzle",resource:"Coins",secondary:"Boosters",tagline:"Puzzle levels and home renovation in a light story-driven format.",colors:["#ff8c42","#61b5ff"],badge:"Puzzle",vibe:"Warm home colors mixed with bright blue renovation styling."},
  {slug:"whiteout-survival",name:"Whiteout Survival",category:"Strategy",resource:"Gems",secondary:"Speedups",tagline:"A frozen survival strategy world with city-building and alliances.",colors:["#79c8ff","#d7f5ff"],badge:"Strategy",vibe:"Cold ice blues, frosted surfaces and survival-focused atmosphere."},
  {slug:"rise-of-kingdoms",name:"Rise of Kingdoms",category:"Strategy",resource:"Gems",secondary:"Speedups",tagline:"Civilization strategy, map exploration, alliances, and large-scale battles.",colors:["#b7863c","#f2c66d"],badge:"Strategy",vibe:"Bronze, gold and fortress-inspired strategy styling."},
  {slug:"dice-dreams",name:"Dice Dreams",category:"Board",resource:"Rolls",secondary:"Coins",tagline:"A colorful dice-and-kingdom board adventure.",colors:["#8f63ff","#4ed8ff"],badge:"Board",vibe:"Dreamy violet and aqua with playful dice elements."},
  {slug:"brawl-stars",name:"Brawl Stars",category:"Action",resource:"Gems",secondary:"Coins",tagline:"Fast multiplayer battles with colorful arenas and varied modes.",colors:["#ff4e45","#ffcd3c"],badge:"Action",vibe:"Punchy red and yellow with a fast arena feel."},
  {slug:"clash-of-clans",name:"Clash of Clans",category:"Strategy",resource:"Gems",secondary:"Gold",tagline:"Village building, clan play, upgrades, and strategic attacks.",colors:["#e67e22","#8e44ad"],badge:"Strategy",vibe:"Warm fortress orange with deep clan-purple accents."},
  {slug:"candy-crush-saga",name:"Candy Crush Saga",category:"Puzzle",resource:"Gold Bars",secondary:"Boosters",tagline:"Classic colorful match-3 puzzle progression.",colors:["#ff4fa3","#5cd6ff"],badge:"Puzzle",vibe:"Bright candy pink and sky blue with a soft playful finish."},
  {slug:"last-war-survival",name:"Last War: Survival",category:"Strategy",resource:"Diamonds",secondary:"Speedups",tagline:"Base progression, squads, and survival strategy.",colors:["#f04f3d","#ffc046"],badge:"Strategy",vibe:"High-contrast survival red and hazard gold with bunker-like details."}
];

const CONFIG = {
  lockerUrl: "https://YOUR-ADBLUEMEDIA-LOCKER-URL.example/offer",
  siteName: "Ludora",
  defaultMember: ""
};

const app = document.getElementById("app");
const qp = () => new URLSearchParams(location.search);
const currentS1 = () => qp().get("s1") || CONFIG.defaultMember || "";

function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[m]);}
function asset(slug){return `assets/games/${slug}.svg`;}
function setQuery(obj={}){
  const p=new URLSearchParams();
  const s1=currentS1();
  if(s1)p.set("s1",s1);
  Object.entries(obj).forEach(([k,v])=>v!==undefined&&v!==null&&v!==""&&p.set(k,v));
  history.pushState({},"",location.pathname+(p.toString()?`?${p}`:""));
  render();
  window.scrollTo({top:0,behavior:"smooth"});
}
function route(name){name==="home"?setQuery({}):setQuery({page:name});}
function goGame(slug){const g=GAMES.find(x=>x.slug===slug);if(!g)return;setQuery({game:slug,s2:slug});}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),2700);}

function gameCard(g,index=0){
  return `<article class="game-card" data-game="${esc(g.slug)}" tabindex="0" role="button" aria-label="Open ${esc(g.name)}">
    <div class="game-art"><span class="game-rank">${esc(g.badge)}</span><img src="${asset(g.slug)}" alt="${esc(g.name)} themed artwork" loading="lazy"></div>
    <div class="game-body"><div class="game-title-row"><h3>${esc(g.name)}</h3><span class="game-arrow">→</span></div>
      <div class="meta"><span class="pill">${esc(g.category)}</span><span class="pill">${esc(g.resource)}</span></div>
      <p>${esc(g.tagline)}</p></div>
  </article>`;
}

function miniGame(g){return `<div class="mini-game" data-game="${esc(g.slug)}" role="button" tabindex="0"><img src="${asset(g.slug)}" alt=""><span><strong>${esc(g.name)}</strong><small>${esc(g.category)} · ${esc(g.resource)}</small></span></div>`;}

function home(){
  const featured=GAMES.slice(0,8), more=GAMES.slice(8,16);
  const cats=["Board","Merge","Sports","Puzzle","Strategy","Adventure","Creative"];
  return `<div class="shell">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">✦ PLAY • EXPLORE • UNLOCK</span>
        <h1>Your games.<br><span class="gradient-text">One beautiful hub.</span></h1>
        <p>Discover popular mobile titles through a clean, game-specific experience built for fast mobile browsing.</p>
        <div class="hero-actions"><button class="primary" data-route="games">Explore all games</button><button class="secondary-btn" id="heroSearchOpen">Find a game</button></div>
        <div class="hero-search"><span>⌕</span><input id="heroSearch" placeholder="Search Monopoly GO, Travel Town, Roblox..."><button class="primary compact" id="heroSearchBtn">Search</button></div>
        <div class="trust-row"><div class="trust"><i>✓</i><span>Mobile-first</span></div><div class="trust"><i>✓</i><span>Distinct game themes</span></div><div class="trust"><i>✓</i><span>Simple partner-offer flow</span></div></div>
      </div>
      <div class="hero-showcase" aria-hidden="true">
        <div class="hero-gift">🎁</div>
        <div class="show-card one"><img src="${asset("monopoly-go")}" alt=""><div class="show-label"><strong>Monopoly GO!</strong><span>Dice · Board</span></div></div>
        <div class="show-card two"><img src="${asset("ea-fc-mobile")}" alt=""><div class="show-label"><strong>EA SPORTS FC Mobile</strong><span>Football · Sports</span></div></div>
        <div class="show-card three"><img src="${asset("travel-town")}" alt=""><div class="show-label"><strong>Travel Town</strong><span>Energy · Merge</span></div></div>
      </div>
    </section>

    <section class="section"><div class="section-head"><div><h2>Browse by category</h2><p>Jump directly to the type of game you want.</p></div></div>
      <div class="category-strip">${cats.map(c=>`<button class="category-card" data-home-cat="${esc(c)}"><strong>${esc(c)}</strong><span>${GAMES.filter(g=>g.category===c).length} games</span></button>`).join("")}</div>
    </section>

    <section class="section"><div class="section-head"><div><h2>Featured games</h2><p>Every card uses its own artwork and game identity.</p></div><button class="link-btn" data-route="games">View all →</button></div>
      <div class="game-grid">${featured.map(gameCard).join("")}</div>
    </section>

    <section class="section spotlight-grid">
      <div class="spotlight-main"><span class="eyebrow">LUDORA SPOTLIGHT</span><h3>Built to feel like a gaming platform, not a generic landing page.</h3><p>Each title gets its own color system, mood and visual treatment while the navigation stays familiar.</p><button class="primary" data-game="pokemon-go">Explore Pokémon GO</button><div class="spotlight-visual"><img src="${asset("pokemon-go")}" alt=""></div></div>
      <aside class="spotlight-side"><div><span class="mini-label">MORE TO EXPLORE</span><h3>More games, same polished flow.</h3><p>New titles can be added without rebuilding the whole website.</p></div><div class="mini-game-list">${[GAMES[8],GAMES[9],GAMES[10]].map(miniGame).join("")}</div></aside>
    </section>

    <section class="section"><div class="section-head"><div><h2>More games</h2><p>More categories for a wider audience.</p></div></div><div class="game-grid">${more.map(gameCard).join("")}</div></section>

    <section class="section banner"><div><h3>More play. More moments.</h3><p>Choose a game and continue through its own themed Ludora experience.</p></div><button class="primary" data-route="games">Browse all games</button></section>
  </div>`;
}

function gamesPage(){
  const cats=["All",...new Set(GAMES.map(g=>g.category))];
  return `<div class="shell"><div class="page-title"><span class="eyebrow">GAME LIBRARY</span><h1>Explore all games</h1><p>Search by title, filter by category, and open a game to see its own dedicated Ludora theme.</p></div>
    <div class="filters"><input class="search-inline" id="librarySearch" placeholder="Search games...">${cats.map((c,i)=>`<button class="category-btn ${i===0?"active":""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div id="libraryGrid" class="game-grid">${GAMES.map(gameCard).join("")}</div></div>`;
}

function amountsFor(g){
  const r=g.resource.toLowerCase();
  if(r.includes("energy"))return ["100","250","500","1,000"];
  if(r.includes("dice")||r.includes("roll"))return ["500","1,000","2,500","5,000"];
  if(r.includes("point"))return ["500","2,500","5,000","12,000"];
  if(r.includes("robux"))return ["400","800","1,700","4,500"];
  if(r.includes("pokécoin"))return ["100","550","1,200","2,500"];
  return ["250","1,000","2,500","5,000"];
}

function gamePage(g){
  const [c1,c2]=g.colors;const amounts=amountsFor(g);
  return `<div class="shell game-page" data-theme="${esc(g.slug)}" style="--accent:${c1};--accent2:${c2}">
    <section class="game-hero"><img class="game-hero-art" src="${asset(g.slug)}" alt="${esc(g.name)} themed artwork"><div class="game-hero-content"><button class="back-btn" data-route="games">← Back to games</button><h1>${esc(g.name)}</h1><p>${esc(g.tagline)}</p><div class="meta"><span class="pill">${esc(g.category)}</span><span class="pill">${esc(g.resource)}</span><span class="pill">${esc(g.secondary)}</span></div></div></section>
    <div class="game-layout">
      <section class="option-card"><div class="step-row"><span class="step active"></span><span class="step"></span><span class="step"></span></div><h2>Choose your option</h2><p class="option-copy">Select a content option to personalize the next step. Ludora does not directly add in-game currency or items to third-party accounts.</p>
        <div class="tabs"><button class="tab active" data-res="${esc(g.resource)}">${esc(g.resource)}</button><button class="tab" data-res="${esc(g.secondary)}">${esc(g.secondary)}</button></div>
        <div class="amount-grid">${amounts.map((a,i)=>`<button class="amount ${i===1?"selected":""}" data-amount="${a}"><strong>${a}</strong><span>${esc(g.resource)}</span></button>`).join("")}</div>
        <button class="cta-full" id="continueBtn">Continue →</button>
        <div class="notice">Selections on this page are used to personalize the experience. Partner offers have their own requirements, eligibility and availability.</div>
      </section>
      <aside class="info-card"><div class="info-top"><div class="game-mini-icon"><img src="${asset(g.slug)}" alt=""></div><div><span class="mini-label">GAME EXPERIENCE</span><h3>${esc(g.name)}</h3></div></div>
        <div class="theme-note"><strong>Unique visual direction</strong><span>${esc(g.vibe)}</span></div>
        <div class="check-list"><div><b>✓</b><span>Responsive mobile layout</span></div><div><b>✓</b><span>Unique artwork for this game</span></div><div><b>✓</b><span>One consistent Ludora flow</span></div></div>
        <div class="tracking-box">Tracking: <code>s1</code> keeps the member ID and <code>s2=${esc(g.slug)}</code> identifies this game.</div>
      </aside>
    </div>
  </div>`;
}

function verifyPage(g){
  const p=qp(),resource=p.get("resource")||g.resource,amount=p.get("amount")||"";
  return `<div class="shell"><div class="verify-wrap"><div class="verify-card"><div class="lock-badge">↗</div><span class="eyebrow">PARTNER OFFER STEP</span><h1>Continue to available offers</h1><p>You selected a ${esc(g.name)} content path. Continue to see the partner offers currently available for your region and device.</p>
    <div class="summary-box"><div class="summary-row"><span>Game</span><span>${esc(g.name)}</span></div><div class="summary-row"><span>Selection</span><span>${esc(resource)}${amount?` · ${esc(amount)}`:""}</span></div>${currentS1()?`<div class="summary-row"><span>Member ID</span><span>${esc(currentS1())}</span></div>`:""}</div>
    <button class="primary" style="width:100%" id="lockerBtn">Continue to partner offers →</button><button class="back-btn" style="margin-top:12px" data-game="${esc(g.slug)}">← Change selection</button>
    <p class="micro">Partner offers are operated by third parties. Review each offer's requirements before participating.</p></div></div></div>`;
}

function faqPage(){
  const qas=[
    ["What is Ludora?","Ludora is an independent multi-game discovery portal that gives each supported title its own themed experience and then links users to available partner offers."],
    ["Does Ludora directly give in-game currency or items?","No. Ludora does not directly add currency, items, progress or other assets to third-party game accounts."],
    ["Why does every game look different?","That is intentional. Each game gets its own colors, artwork and atmosphere while the overall navigation and tracking remain consistent."],
    ["How does member tracking work?","A member link can include s1. When a visitor opens a game, Ludora uses s2 for that game's slug. Only s1 and s2 are forwarded to the configured partner URL."],
    ["Are partner offers identical for every visitor?","No. Availability and eligibility can vary by country, device, age and partner requirements."]
  ];
  return `<div class="shell"><div class="page-title"><span class="eyebrow">HELP CENTER</span><h1>Frequently asked questions</h1><p>Simple answers about Ludora, game pages and partner offers.</p></div><div class="faq-list">${qas.map(([q,a])=>`<div class="faq-item"><button class="faq-q">${q}<span>+</span></button><div class="faq-a">${a}</div></div>`).join("")}</div></div>`;
}

function aboutPage(){return `<div class="shell"><div class="page-title"><span class="eyebrow">ABOUT LUDORA</span><h1>One brand. Many game worlds.</h1><p>Ludora is designed as a scalable multi-game hub with a polished core and a different visual direction for every title.</p></div><article class="static-card"><h2>Brand idea</h2><p>“Ludora” is a coined brand name inspired by the idea of play, with a smooth premium-sounding ending that works well as an umbrella brand across many games.</p><h2>Design principles</h2><p>Mobile first, fast to scan, distinct game visuals, clear calls to action and a reusable two-parameter attribution flow.</p></article></div>`;}
function termsPage(){return `<div class="shell"><div class="page-title"><span class="eyebrow">LEGAL</span><h1>Terms of Service</h1></div><article class="static-card"><p>By using Ludora you agree to use the site lawfully and to review any third-party offer requirements before participating.</p><h2>Independent service</h2><p>Ludora is not affiliated with, endorsed by or sponsored by the publishers, developers or trademark owners of the games referenced on this site.</p><h2>No guarantee of game assets</h2><p>Ludora does not directly provide, inject, generate or add in-game currency, items, progress or account benefits.</p><h2>Third-party offers</h2><p>Partner pages are governed by their own terms and privacy policies. Users should read those terms before participating.</p><h2>Eligibility</h2><p>Users are responsible for meeting age, regional, device and other requirements that apply to any partner offer.</p></article></div>`;}
function privacyPage(){return `<div class="shell"><div class="page-title"><span class="eyebrow">LEGAL</span><h1>Privacy Policy</h1></div><article class="static-card"><p>Ludora is designed to minimize data collection on the landing page. The site may read URL parameters such as <code>s1</code> and <code>s2</code> for attribution and navigation.</p><h2>Tracking parameters</h2><p><code>s1</code> may represent a member or traffic-source identifier. <code>s2</code> identifies the selected game. These values can be forwarded to the configured partner URL.</p><h2>Third parties</h2><p>When you leave Ludora for a partner site, that site's privacy policy applies.</p><h2>Cookies</h2><p>This static version does not require cookies for core navigation. If analytics are added later, consent and disclosure should be implemented where required.</p></article></div>`;}

function render(){
  const p=qp(),slug=p.get("game"),page=p.get("page"),step=p.get("step");
  if(slug){const g=GAMES.find(x=>x.slug===slug);app.innerHTML=g?(step==="verify"?verifyPage(g):gamePage(g)):gamesPage();}
  else if(page==="games")app.innerHTML=gamesPage();
  else if(page==="faq")app.innerHTML=faqPage();
  else if(page==="about")app.innerHTML=aboutPage();
  else if(page==="terms")app.innerHTML=termsPage();
  else if(page==="privacy")app.innerHTML=privacyPage();
  else app.innerHTML=home();
  bind();document.getElementById("year").textContent=new Date().getFullYear();
}

function bind(){
  document.querySelectorAll("[data-route]").forEach(el=>el.onclick=()=>route(el.dataset.route));
  document.querySelectorAll("[data-game]").forEach(el=>{el.onclick=()=>goGame(el.dataset.game);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();goGame(el.dataset.game);}}});
  document.querySelectorAll(".game-card").forEach(el=>{el.onclick=()=>goGame(el.dataset.game);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();goGame(el.dataset.game);}}});
  document.querySelectorAll("[data-home-cat]").forEach(b=>b.onclick=()=>{setQuery({page:"games",cat:b.dataset.homeCat});});
  const hs=document.getElementById("heroSearch"),hsb=document.getElementById("heroSearchBtn"),hso=document.getElementById("heroSearchOpen");
  if(hsb)hsb.onclick=()=>openSearch(hs?.value||""); if(hso)hso.onclick=()=>openSearch(); if(hs)hs.onkeydown=e=>{if(e.key==="Enter")openSearch(hs.value)};
  const librarySearch=document.getElementById("librarySearch");if(librarySearch)librarySearch.oninput=()=>filterLibrary();
  const initialCat=qp().get("cat")||"All";document.querySelectorAll("[data-cat]").forEach(b=>{if(b.dataset.cat===initialCat){document.querySelectorAll("[data-cat]").forEach(x=>x.classList.remove("active"));b.classList.add("active");} b.onclick=()=>{document.querySelectorAll("[data-cat]").forEach(x=>x.classList.remove("active"));b.classList.add("active");filterLibrary(b.dataset.cat);}}); if(document.getElementById("libraryGrid")&&initialCat!=="All")filterLibrary(initialCat);
  document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelectorAll(".amount span").forEach(s=>s.textContent=t.dataset.res);});
  document.querySelectorAll(".amount").forEach(a=>a.onclick=()=>{document.querySelectorAll(".amount").forEach(x=>x.classList.remove("selected"));a.classList.add("selected");});
  const cont=document.getElementById("continueBtn");if(cont)cont.onclick=()=>{const g=GAMES.find(x=>x.slug===qp().get("game"));if(!g)return;const res=document.querySelector(".tab.active")?.dataset.res||g.resource;const amt=document.querySelector(".amount.selected")?.dataset.amount||"";setQuery({game:g.slug,s2:g.slug,step:"verify",resource:res,amount:amt});};
  const locker=document.getElementById("lockerBtn");if(locker)locker.onclick=()=>{const g=GAMES.find(x=>x.slug===qp().get("game"));if(!g)return;if(CONFIG.lockerUrl.includes("YOUR-ADBLUEMEDIA-LOCKER-URL")){toast("Set your AdBlueMedia locker URL in app.js → CONFIG.lockerUrl");return;}const u=new URL(CONFIG.lockerUrl,location.href);if(currentS1())u.searchParams.set("s1",currentS1());u.searchParams.set("s2",g.slug);location.href=u.toString();};
  document.querySelectorAll(".faq-q").forEach(q=>q.onclick=()=>q.closest(".faq-item").classList.toggle("open"));
}

function filterLibrary(cat){
  const q=(document.getElementById("librarySearch")?.value||"").toLowerCase().trim();
  const active=cat||document.querySelector("[data-cat].active")?.dataset.cat||"All";
  const list=GAMES.filter(g=>(active==="All"||g.category===active)&&(!q||`${g.name} ${g.category} ${g.resource}`.toLowerCase().includes(q)));
  const grid=document.getElementById("libraryGrid");if(!grid)return;grid.innerHTML=list.map(gameCard).join("");
  grid.querySelectorAll(".game-card").forEach(el=>{el.onclick=()=>goGame(el.dataset.game);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();goGame(el.dataset.game);}}});
}

function openSearch(initial=""){const modal=document.getElementById("searchModal");modal.hidden=false;const input=document.getElementById("globalSearch");input.value=initial;updateSearch(initial);setTimeout(()=>input.focus(),60);}
function closeSearch(){document.getElementById("searchModal").hidden=true;}
function updateSearch(q=""){const s=q.toLowerCase().trim();const list=GAMES.filter(g=>!s||`${g.name} ${g.category} ${g.resource}`.toLowerCase().includes(s)).slice(0,10);document.getElementById("searchResults").innerHTML=list.map(g=>`<button class="search-result" data-search-game="${g.slug}"><img src="${asset(g.slug)}" alt=""><span><strong>${esc(g.name)}</strong><small>${esc(g.category)} · ${esc(g.resource)}</small></span></button>`).join("");document.querySelectorAll("[data-search-game]").forEach(b=>b.onclick=()=>{closeSearch();goGame(b.dataset.searchGame);});}
function openDrawer(){document.getElementById("drawer").classList.add("open");document.getElementById("drawer").setAttribute("aria-hidden","false");document.getElementById("drawerBackdrop").hidden=false;}
function closeDrawer(){document.getElementById("drawer").classList.remove("open");document.getElementById("drawer").setAttribute("aria-hidden","true");document.getElementById("drawerBackdrop").hidden=true;}

document.getElementById("searchButton").onclick=()=>openSearch();document.getElementById("mobileSearch").onclick=()=>openSearch();document.getElementById("closeSearch").onclick=closeSearch;document.getElementById("searchModal").onclick=e=>{if(e.target.id==="searchModal")closeSearch();};document.getElementById("globalSearch").oninput=e=>updateSearch(e.target.value);document.getElementById("menuButton").onclick=openDrawer;document.getElementById("moreButton").onclick=openDrawer;document.getElementById("closeDrawer").onclick=closeDrawer;document.getElementById("drawerBackdrop").onclick=closeDrawer;document.getElementById("drawer").addEventListener("click",e=>{if(e.target.matches("[data-route]"))closeDrawer();});window.addEventListener("popstate",render);window.addEventListener("keydown",e=>{if(e.key==="Escape"){closeSearch();closeDrawer();}});render();
