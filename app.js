const GAMES = [
  {slug:"monopoly-go",name:"Monopoly GO!",category:"Board",resource:"Dice",secondary:null,tagline:"Roll, build and explore a playful board-world experience.",colors:["#ff5b5f","#f7c948"],badge:"Popular",vibe:"Board-city energy with warm red, gold and dice-inspired details."},
  {slug:"travel-town",name:"Travel Town",category:"Merge",resource:"Energy",secondary:null,tagline:"Merge items, travel through colorful locations, and keep your journey moving.",colors:["#16a9ff","#7ce6c6"],badge:"Trending",vibe:"Bright coastal travel tones, breezy blues and relaxed adventure styling."},
  {slug:"gossip-harbor",name:"Gossip Harbor",category:"Merge",resource:"Energy",secondary:null,tagline:"A cozy harbor mystery with merging, stories, and seaside charm.",colors:["#ff4f9a","#ffb17a"],badge:"Hot",vibe:"Warm harbor sunset colors with soft story-driven details."},
  {slug:"coin-master",name:"Coin Master",category:"Casual",resource:"Spins",secondary:null,tagline:"Spin, build, and raid through a colorful village adventure.",colors:["#8b5cf6","#ffc857"],badge:"Popular",vibe:"Deep violet, gold highlights and a playful treasure-inspired mood."},
  {slug:"match-masters",name:"Match Masters",category:"Puzzle",resource:"Coins",secondary:null,tagline:"Competitive matching with bright boards, boosters, and quick battles.",colors:["#5b7cff","#ff4fd8"],badge:"Trending",vibe:"Competitive neon puzzle styling with electric blue and magenta."},
  {slug:"tasty-travel",name:"Tasty Travel",category:"Merge",resource:"Energy",secondary:null,tagline:"A colorful food-and-travel merge journey with a cheerful atmosphere.",colors:["#ff8a3d","#ffcc66"],badge:"New",vibe:"Warm food-and-travel palette with orange, cream and cheerful highlights."},
  {slug:"ea-fc-mobile",name:"EA SPORTS FC Mobile",category:"Sports",resource:"Gems",secondary:null,tagline:"Football squads, events, and competitive mobile play.",colors:["#16c784","#0b5cff"],badge:"Sports",vibe:"Stadium-inspired green and deep blue with sharper competitive styling."},
  {slug:"sm27",name:"SM27",category:"Sports",resource:"Money",secondary:null,tagline:"A football-management style experience focused on squads, tactics, and progress.",colors:["#16a3ff","#42d392"],badge:"Manager",vibe:"Tactical dashboard feel with cool blues and management-focused details."},
  {slug:"roblox",name:"Roblox",category:"Creative",resource:"Robux",secondary:null,tagline:"Explore user-created worlds, social experiences, and imaginative play.",colors:["#1b2330","#00a6ff"],badge:"Creative",vibe:"Clean block-inspired dark styling with crisp blue accents."},
  {slug:"pokemon-go",name:"Pokémon GO",category:"Adventure",resource:"PokéCoins",secondary:null,tagline:"Outdoor exploration, collecting, raids, and location-based discovery.",colors:["#2c7be5","#7ad66d"],badge:"Explore",vibe:"Map and outdoor discovery styling with sky blue and green."},
  {slug:"royal-match",name:"Royal Match",category:"Puzzle",resource:"Coins",secondary:null,tagline:"Bright match-3 levels with castle-themed progression.",colors:["#1f8cff","#ffd257"],badge:"Puzzle",vibe:"Royal blue and gold with castle-inspired polish."},
  {slug:"township",name:"Township",category:"Simulation",resource:"Cash",secondary:null,tagline:"Build a town, grow crops, and develop a relaxed mobile community.",colors:["#22b573","#f9b233"],badge:"Sim",vibe:"Fresh green and harvest gold with a town-building atmosphere."},
  {slug:"family-island",name:"Family Island",category:"Adventure",resource:"Energy",secondary:null,tagline:"Island exploration, crafting, farming, and family adventures.",colors:["#f2994a","#27ae60"],badge:"Adventure",vibe:"Tropical orange and island green with a warm exploration feel."},
  {slug:"gardenscapes",name:"Gardenscapes",category:"Puzzle",resource:"Coins",secondary:null,tagline:"Match-3 puzzles paired with garden restoration and story moments.",colors:["#25b85a","#65c8ff"],badge:"Puzzle",vibe:"Fresh garden greens and clear sky blues."},
  {slug:"homescapes",name:"Homescapes",category:"Puzzle",resource:"Coins",secondary:null,tagline:"Puzzle levels and home renovation in a light story-driven format.",colors:["#ff8c42","#61b5ff"],badge:"Puzzle",vibe:"Warm home colors mixed with bright blue renovation styling."},
  {slug:"whiteout-survival",name:"Whiteout Survival",category:"Strategy",resource:"Gems",secondary:null,tagline:"A frozen survival strategy world with city-building and alliances.",colors:["#79c8ff","#d7f5ff"],badge:"Strategy",vibe:"Cold ice blues, frosted surfaces and survival-focused atmosphere."},
  {slug:"rise-of-kingdoms",name:"Rise of Kingdoms",category:"Strategy",resource:"Gems",secondary:null,tagline:"Civilization strategy, map exploration, alliances, and large-scale battles.",colors:["#b7863c","#f2c66d"],badge:"Strategy",vibe:"Bronze, gold and fortress-inspired strategy styling."},
  {slug:"dice-dreams",name:"Dice Dreams",category:"Board",resource:"Rolls",secondary:null,tagline:"A colorful dice-and-kingdom board adventure.",colors:["#8f63ff","#4ed8ff"],badge:"Board",vibe:"Dreamy violet and aqua with playful dice elements."},
  {slug:"brawl-stars",name:"Brawl Stars",category:"Action",resource:"Gems",secondary:null,tagline:"Fast multiplayer battles with colorful arenas and varied modes.",colors:["#ff4e45","#ffcd3c"],badge:"Action",vibe:"Punchy red and yellow with a fast arena feel."},
  {slug:"clash-of-clans",name:"Clash of Clans",category:"Strategy",resource:"Gems",secondary:null,tagline:"Village building, clan play, upgrades, and strategic attacks.",colors:["#e67e22","#8e44ad"],badge:"Strategy",vibe:"Warm fortress orange with deep clan-purple accents."},
  {slug:"candy-crush-saga",name:"Candy Crush Saga",category:"Puzzle",resource:"Gold Bars",secondary:null,tagline:"Classic colorful match-3 puzzle progression.",colors:["#ff4fa3","#5cd6ff"],badge:"Puzzle",vibe:"Bright candy pink and sky blue with a soft playful finish."},
  {slug:"last-war-survival",name:"Last War: Survival",category:"Strategy",resource:"Diamonds",secondary:null,tagline:"Base progression, squads, and survival strategy.",colors:["#f04f3d","#ffc046"],badge:"Strategy",vibe:"High-contrast survival red and hazard gold with bunker-like details."}
];

const GAME_IMAGES = {
  "monopoly-go":"https://play-lh.googleusercontent.com/AUGFPG5XqzHukTUDH2mcdOTpEwlDmZ5hUuWPXwu9IcvcyaBTwhV2WJeKKFAj_UA2m05ZxPgJuhrllXIqlW0i=s512",
  "travel-town":"https://play-lh.googleusercontent.com/_YoJBEqLA6qZ0xiulFJWKfubaZmxzyphcW4BwMIXFapkO3ifyuVsnMaLkWQClMPuUnahVtIAtyU_baUHLOdP2A=s512",
  "gossip-harbor":"https://play-lh.googleusercontent.com/HLRg8oInVYJV8Uebxlh1dTH4j7OTBMIWOPZY7A7ryW9UB8K4i7HCOqkGfSLORsK-XzqhnJcJM0mjObVKZYL8zA=s512",
  "coin-master":"https://play-lh.googleusercontent.com/b5QL7lke38opLtJxvaDw1EEyJuaRjzEEL4j4zt5MtYSWz6t6o9DrG6LkH6rA_lNFHBe4cnXEZR0D_q_IW_-rcQ=s512",
  "match-masters":"https://play-lh.googleusercontent.com/lTNpwPOAFpCsEepGiCHbYUcXNtzUvN68SqbcGKgUBFKUx1aMenxQMr1QNtXIVzepSARzZgG-w6qvXY09njTDuA=s512",
  "tasty-travel":"https://cdn.aptoide.com/imgs/c/c/e/cceb82ff117cb1a5b3a62111cb577d50_icon.jpg",
  "ea-fc-mobile":"https://play-lh.googleusercontent.com/NEp-Nq3k_EBZriaPEmAKdqjd2v3UGAhMcSvoOcdrfwZQavolX_-OwQA2TX21LS-A8x8cV15r3J2CFaG-yT2IVX4=s512",
  "sm27":"https://play-lh.googleusercontent.com/nx5zgQM8jG6JZwhHVFbyFFl9zt52uk7Y_QGaEUImaQILY5XUEaIsvb2s1cpt799ZlTcUsWZIscjynhCSZ9lZvIk=s512",
  "roblox":"https://play-lh.googleusercontent.com/QqZj22aXblAyYDxLQw-Gg0ycW0QkKhrDnwqgERZU9BMRXZnMlgXfq-94sikG5mEpt_I0lzZxcUzfLblmQgwYzUE=s512",
  "pokemon-go":"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/49/7e/0f/497e0f5d-28be-1c52-9c88-77d77a5b0ded/Placeholder.mill/1024x1024wd.png",
  "royal-match":"https://play-lh.googleusercontent.com/RBnqZ3q_jjOREX6v49DGe4BzKGNwJMcv8aBNDeDuMRFQdyX6rA7S-k5N39ggj43XeKFGLmxuH1jOYONfbUHmYA=s512",
  "township":"https://play-lh.googleusercontent.com/R57nBnvKx2fcs-Ct1wKW2j85S4f8h2dPsn2L9jO4G0pxZIHRozdwPRZ_tAvT6Kh-P8I7A6CDJFu8cYuvBzccvIU=s512",
  "family-island":"https://dl.memuplay.com/new_market/img/com.MelsoftGames.FamilyIslandFarm.icon.2024-11-23-02-04-00.png",
  "gardenscapes":"https://play-lh.googleusercontent.com/DyprR0O5Osx9CUYp0rG59kj3cGi69rZ5LJXbrp8gKkxKOoGehVzK_YRi6ODYG6-hV9EEZiWVAtubqbvqMvPr=s512",
  "homescapes":"https://play-lh.googleusercontent.com/ft9OqNwpLaL45Jq3YuSYt0wm3y_j-YteTQqfq4Cu2PRWTrkFMuhlmUHmxggNxOP96gxR9Q3ML1Yt87iV3zD5fg=s512",
  "whiteout-survival":"https://cdn.wegame.tech/default-game-webp/whiteout-survival.webp",
  "rise-of-kingdoms":"https://play-lh.googleusercontent.com/HD0DeTH3uY8-4xKW54eH4yViYQtdLMtGKv_EYdAnH75a2-SdRLKZVZOJgxS1BfAug4eqVsVgDs3eoL3YfMU9lg=s512",
  "dice-dreams":"https://www.guvenlioyna.org.tr/uploads/reviewImage/Dice%20Dreams%20.jpg",
  "brawl-stars":"https://play-lh.googleusercontent.com/wEOIM7cYyXkMExNztvFYKHJLPegXp6h81-P_JQQ_9KQvDCWK49m2zpt1mTRXO5bA2qU_Bp4em_nfMsHXmq8Z=s512",
  "clash-of-clans":"https://static.wikia.nocookie.net/logopedia/images/c/cc/Clash_of_Clans_%28App_Icon%29.png/revision/latest?cb=20220625115343",
  "candy-crush-saga":"https://play-lh.googleusercontent.com/JvMhIxuwArVmcMReJQB8PIEB1MIQNMGf9j5i914JtkBrHrA55K-nMUIVlYCa7SXAdHtzLtsycEo6NpXeHFxLwvI=s512",
  "last-war-survival":"https://img.skich.io/games/icons/7d5fe480-a047-443b-936c-0899bf053e1a.jpg"
};

const GAME_BANNERS = {
  "monopoly-go":"./assets/banners/monopoly-go.jpg?v=20260916b",
  "travel-town":"./assets/banners/travel-town.png?v=20260916b",
  "gossip-harbor":"./assets/banners/gossip-harbor.jpeg?v=20260916b",
  "coin-master":"./assets/banners/coin-master.jpeg?v=20260916b",
  "match-masters":"./assets/banners/match-masters.jpg?v=20260916b",
  "tasty-travel":"https://pg.io/pg-io/store-games/edad1222-ab26-4548-918c-b0a0c481adea/header.jpg",
  "ea-fc-mobile":"https://s25.q4cdn.com/103200307/files/doc_multimedia/KeyArtMobile.jpg",
  "sm27":"https://play-lh.googleusercontent.com/0nryEWneUZOHJfrV5Zbfi7XLt6ie9XBKNTzCsOyXr5E-vr_bidU14YAy3KCyAkXPwVM4EIDgkLF0p3fwwS1H-w=w1024-h576",
  "roblox":"https://store-images.s-microsoft.com/image/apps.47252.13510798883386282.a1e5df65-8dd7-427c-9da9-506afa37b254.f4132380-deee-4518-8bbd-2a9b540046f3",
  "pokemon-go":"https://wallpapercave.com/wp/wp9457676.jpg",
  "royal-match":"https://images.ctfassets.net/vfkpgemp7ek3/3xsU0ImxodgKTK1udEujcU/ff8489a7faec2249ab461c4f0d847b10/Hero.jpg",
  "township":"https://assets.gam3s.gg/Township_Meta_Image_03eed0231f.jpg",
  "family-island":"https://defold.com/images/games/familyisland-full.png",
  "gardenscapes":"https://res09.bignox.com/appcenter/th/2020/05/Gardenscapes.jpg",
  "homescapes":"https://play-lh.googleusercontent.com/Rx0zztLbUCpnCYqzWdipu7bDLChGjaHtdntE4pfot9tfXQNrys08WCfePhdnYpbRc-TaCODK3F7YVLHB71dcCw=w1024-h576",
  "whiteout-survival":"https://i0.wp.com/loxtech-gaming.co.uk/wp-content/uploads/2025/03/whiteout-survival-1715897481610.jpg?fit=2208%2C1242&ssl=1",
  "rise-of-kingdoms":"https://dl.memuplay.com/new_market/img/com.lilithgame.roc.gp.sc0.2021-03-01-20-20-14.jpg",
  "dice-dreams":"https://app.gamedia.jp/lib/i/eyecatch/4847_2.png",
  "brawl-stars":"https://cdn6.aptoide.com/imgs/d/d/4/dd42dfd0456ec0312e7b54232afdd36b_fgraphic.jpg",
  "clash-of-clans":"https://d2u0ktu8omkpf6.cloudfront.net/b80c240db665c9125a09fe9cd8f20f9d1832a940e66b8c59.jpg",
  "candy-crush-saga":"https://store-images.s-microsoft.com/image/apps.52397.13510798882606697.1816f804-e7fd-4295-9275-23dec3563baf.2ef7ec2d-2e37-489e-b6ac-b5f5e44d429c?h=1280",
  "last-war-survival":"https://images.ctfassets.net/vfkpgemp7ek3/1hcC59AL0kW7LQqD0GZTcg/e09901b465e9df2434395c5f55afdc88/Cover_Image.jpg"
};

const CONFIG = {
  lockerUrl: "https://YOUR-ADBLUEMEDIA-LOCKER-URL.example/offer",
  siteName: "Ludora",
  defaultMember: ""
};

const app = document.getElementById("app");
const qp = () => new URLSearchParams(location.search);
const currentS1 = () => qp().get("s1") || CONFIG.defaultMember || "";

function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[m]);}
function fallbackAsset(slug){return `assets/games/${slug}.svg`;}
function asset(slug){return GAME_IMAGES[slug]||fallbackAsset(slug);}
function bannerAsset(slug){return GAME_BANNERS[slug]||fallbackAsset(slug);}
function gameImage(g,alt="",className=""){return `<img${className?` class="${className}"`:""} src="${asset(g.slug)}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackAsset(g.slug)}'">`;}
function resourceIcon(resource=""){
  const r=resource.toLowerCase();
  if(r.includes("energy"))return "⚡";
  if(r.includes("dice")||r.includes("roll"))return "🎲";
  if(r.includes("coin")||r.includes("gold")||r.includes("cash")||r.includes("credit"))return "🪙";
  if(r.includes("gem")||r.includes("diamond")||r.includes("rub"))return "💎";
  if(r.includes("boost")||r.includes("speed"))return "🚀";
  if(r.includes("spin"))return "🔄";
  if(r.includes("point"))return "⚽";
  if(r.includes("robux"))return "⬡";
  if(r.includes("item"))return "🎒";
  return "✦";
}
function resourceBadge(resource){const robux=resource.toLowerCase().includes("robux");return `<span class="resource-icon${robux?" resource-robux":""}" aria-hidden="true">${robux?"<i></i>":resourceIcon(resource)}</span>`;}
function loadingMessage(g){return g.resource.toLowerCase().includes("energy")?"Preparing energy options":g.resource.toLowerCase().match(/dice|roll/)?"Preparing dice options":`Preparing ${g.resource} options`;}
function gameExperience(category){
  const copy={Board:"Board-building and dice-based progression",Merge:"Merge items to progress through stories and locations",Casual:"Quick sessions with collection and progression",Puzzle:"Puzzle levels with strategic progression",Sports:"Team building and competitive sports gameplay",Creative:"Explore community-created worlds and experiences",Adventure:"Exploration, collection and character progression",Simulation:"Build, manage and expand your own world",Strategy:"Build, upgrade and compete through strategic decisions",Action:"Fast multiplayer action and competitive modes"};
  return copy[category]||"Mobile progression and collection gameplay";
}
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
    <div class="game-art"><span class="game-rank">${esc(g.badge)}</span>${gameImage(g,`${g.name} official game icon`)}</div>
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
    <section class="game-hero"><img class="game-banner-image" src="${bannerAsset(g.slug)}" alt="${esc(g.name)} game banner" loading="eager" decoding="async" fetchpriority="high" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${asset(g.slug)}';this.classList.add('is-fallback')"><div class="game-hero-content"><button class="back-btn" data-route="games">← Back to games</button><div class="game-identity">${gameImage(g,`${g.name} official logo`,"game-page-logo")}<div><span class="mini-label">GAME EXPERIENCE</span><h1>${esc(g.name)}</h1></div></div><p>${esc(g.tagline)}</p><div class="meta"><span class="pill">${esc(g.category)}</span><span class="pill">${esc(g.resource)}</span>${g.secondary?`<span class="pill">${esc(g.secondary)}</span>`:""}</div></div></section>
    <div class="game-layout">
      <section class="option-card"><div class="step-row"><span class="step active"></span><span class="step"></span><span class="step"></span></div><h2>Choose your option</h2><p class="option-copy">Select a content option to personalize the next step. Ludora does not directly add in-game currency or items to third-party accounts.</p>
        <div class="tabs"><button class="tab active" data-res="${esc(g.resource)}">${resourceBadge(g.resource)}${esc(g.resource)}</button>${g.secondary?`<button class="tab" data-res="${esc(g.secondary)}">${resourceBadge(g.secondary)}${esc(g.secondary)}</button>`:""}</div>
        <div class="amount-grid">${amounts.map((a,i)=>`<button class="amount ${i===1?"selected":""}" data-amount="${a}">${resourceBadge(g.resource)}<strong>${a}</strong><span>${esc(g.resource)}</span></button>`).join("")}</div>
        <label class="player-id-field" for="playerId"><span>Player ID / User ID</span><input id="playerId" type="text" inputmode="text" maxlength="32" autocomplete="off" placeholder="Enter your game ID" aria-describedby="playerIdHelp"><small id="playerIdHelp">Use your public in-game ID only. Never enter your password.</small></label>
        <button class="cta-full" id="continueBtn">Continue →</button>
        <div class="notice">Selections on this page are used to personalize the experience. Partner offers have their own requirements, eligibility and availability.</div>
      </section>
      <aside class="info-card"><div class="info-top"><div class="game-mini-icon"><img src="${asset(g.slug)}" alt=""></div><div><span class="mini-label">ABOUT THE GAME</span><h3>${esc(g.name)}</h3></div></div>
        <div class="theme-note"><strong>About ${esc(g.name)}</strong><span>${esc(g.tagline)}</span></div>
        <div class="game-facts"><div><span>Genre</span><strong>${esc(g.category)}</strong></div><div><span>Main resource</span><strong>${resourceIcon(g.resource)} ${esc(g.resource)}</strong></div><div><span>Game experience</span><strong>${esc(gameExperience(g.category))}</strong></div></div>
        <div class="game-about-note">Game names, logos and artwork belong to their respective owners. Ludora is an independent discovery experience.</div>
      </aside>
    </div>
    <div class="profile-loader" id="profileLoader" hidden role="status" aria-live="polite">
      <div class="profile-loader-card">
        <div class="loader-game-icon">${gameImage(g,`${g.name} icon`)}</div>
        <div class="loader-ring" aria-hidden="true"><span>${resourceIcon(g.resource)}</span></div>
        <h3>Checking Player ID</h3>
        <p id="loaderText">Connecting to ${esc(g.name)}...</p>
        <div class="loader-progress"><i></i></div>
        <small>Please wait while Ludora prepares your game options.</small>
      </div>
    </div>
  </div>`;
}

function verifyPage(g){
  const p=qp(),resource=p.get("resource")||g.resource,amount=p.get("amount")||"",player=p.get("player")||"";
  return `<div class="shell"><div class="verify-wrap"><div class="verify-card"><div class="lock-badge">${gameImage(g,`${g.name} official logo`,"offer-game-logo")}</div><span class="eyebrow">PARTNER OFFER STEP</span><h1>Continue to available offers</h1><p>You selected a ${esc(g.name)} content path. Continue to see the partner offers currently available for your region and device.</p>
    <div class="summary-box"><div class="summary-row"><span>Game</span><span>${esc(g.name)}</span></div><div class="summary-row"><span>Player ID</span><span>${esc(player)}</span></div><div class="summary-row"><span>Selection</span><span>${resourceIcon(resource)} ${esc(resource)}${amount?` · ${esc(amount)}`:""}</span></div>${currentS1()?`<div class="summary-row"><span>Member ID</span><span>${esc(currentS1())}</span></div>`:""}</div>
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
  document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");document.querySelectorAll(".amount").forEach(a=>{a.querySelector("span:last-child").textContent=t.dataset.res;const old=a.querySelector(".resource-icon");old.outerHTML=resourceBadge(t.dataset.res);});});
  document.querySelectorAll(".amount").forEach(a=>a.onclick=()=>{document.querySelectorAll(".amount").forEach(x=>x.classList.remove("selected"));a.classList.add("selected");});
  const cont=document.getElementById("continueBtn");if(cont)cont.onclick=()=>{const g=GAMES.find(x=>x.slug===qp().get("game"));if(!g)return;const id=document.getElementById("playerId"),player=id?.value.trim()||"";if(!/^[A-Za-z0-9._#-]{3,32}$/.test(player)){id?.classList.add("invalid");id?.focus();toast("Enter a valid Player ID (3–32 characters)");return;}id.classList.remove("invalid");const res=document.querySelector(".tab.active")?.dataset.res||g.resource;const amt=document.querySelector(".amount.selected")?.dataset.amount||"";const loader=document.getElementById("profileLoader"),copy=document.getElementById("loaderText");loader.hidden=false;document.body.classList.add("loading-profile");cont.disabled=true;setTimeout(()=>{copy.textContent=loadingMessage(g)+"...";},850);setTimeout(()=>{copy.textContent="Options ready";},1750);setTimeout(()=>{document.body.classList.remove("loading-profile");setQuery({game:g.slug,s2:g.slug,step:"verify",resource:res,amount:amt,player});},2400);};
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
