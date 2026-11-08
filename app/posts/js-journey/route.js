// app/posts/js-journey/route.js
// Serves the blog post as a normal Next.js route at /posts/js-journey
export const dynamic = 'force-static';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>My Journey Learning JavaScript: Mistakes, Breakthroughs and Lessons | WamiriX</title>
<meta name="description" content="From confusing callbacks to finally understanding async/await — an honest account of learning JavaScript as a self-driven computer science student in Nigeria.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f6f4;--ink:#1a1a1a;--mid:#555;--soft:#777;--rule:#e0ddd8;--green:#2d6a4f;--bad:#a8402f;
--serif:"Cormorant Garamond",Georgia,serif;--sans:"DM Sans",system-ui,sans-serif;--mono:"JetBrains Mono",ui-monospace,Menlo,Consolas,monospace}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);font-weight:300;font-size:1.06rem;line-height:1.85}
.page{opacity:0;transform:translateY(16px);animation:in .8s ease .1s forwards}
@keyframes in{to{opacity:1;transform:none}}
:focus-visible{outline:2px solid var(--green);outline-offset:3px}

nav{display:flex;position:sticky;top:0;z-index:1000;justify-content:space-between;align-items:center;padding:2rem 4rem;background:var(--bg);border-bottom:1px solid var(--rule)}
.logo{font-family:var(--serif);font-size:1.4rem;font-weight:600;letter-spacing:.05em;color:var(--ink);text-decoration:none}
.links{display:flex;gap:2.5rem;list-style:none}
.links a{text-decoration:none;color:var(--mid);font-size:.85rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;transition:color .2s}
.links a:hover,.links a.on{color:var(--ink)}

.wrap{max-width:40rem;margin:0 auto;padding:0 1.5rem}
.back{display:inline-block;margin:3rem 0 0;font-size:.85rem;color:var(--soft);text-decoration:none}
.back:hover{color:var(--ink)}
.head{padding:2.2rem 0 2.5rem;border-bottom:1px solid var(--rule)}
.tag{font-size:.78rem;color:var(--green);font-weight:500;margin-bottom:1.1rem}
h1{font-family:var(--serif);font-weight:300;font-size:clamp(2.4rem,6.5vw,3.8rem);line-height:1.08;color:#111}
.dek{font-size:1.12rem;color:var(--mid);margin:1.4rem 0 1.6rem}
.meta{font-size:.82rem;color:var(--soft)}
.sketch{display:block;width:100%;height:auto;margin:2.5rem 0}

article{padding-bottom:2rem}
article p{margin-bottom:1.5rem}
article h2{font-family:var(--serif);font-weight:400;font-size:clamp(1.8rem,4.5vw,2.3rem);line-height:1.15;margin:3.5rem 0 1.2rem;color:#111}
h3{font-family:var(--serif);font-weight:600;font-size:1.45rem;line-height:1.2;margin:2.8rem 0 .8rem;padding-top:1.6rem;border-top:1px solid var(--rule);color:#111}
code{font-family:var(--mono);font-size:.84em;background:#ecebe7;padding:.1em .35em;border-radius:3px}
pre{font-family:var(--mono);font-size:.84rem;line-height:1.7;background:#fff;border:1px solid var(--rule);padding:1rem 1.2rem;margin:1.2rem 0 1.4rem;overflow-x:auto;color:#222}
pre .c{color:#8b8b8b}pre .bad{color:var(--bad)}pre .ok{color:var(--green)}
.fix{padding-left:1rem;border-left:2px solid var(--green);color:var(--mid);margin-bottom:1.5rem}
.pull{font-family:var(--serif);font-style:italic;font-weight:300;font-size:clamp(1.6rem,4vw,2.1rem);line-height:1.3;margin:3rem 0;padding:1.6rem 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);color:#111}
.cap{font-size:.8rem;color:var(--soft);text-align:center;margin-top:-1.6rem;margin-bottom:2rem}

ol.lessons{list-style:none;margin:1rem 0 2.5rem;border-top:1px solid var(--rule)}
ol.lessons li{padding:1.1rem 0;border-bottom:1px solid var(--rule)}
ol.lessons b{font-family:var(--serif);font-weight:600;font-size:1.25rem;display:block;line-height:1.3;color:#111}
.end{margin:3.5rem 0 1rem}

footer{border-top:1px solid var(--rule);padding:2rem 4rem;display:flex;justify-content:space-between;align-items:center;margin-top:3rem}
footer p{font-size:.78rem;color:#aaa;letter-spacing:.05em}
@media (max-width:768px){
 nav{padding:1.5rem}.links{gap:1.5rem}
 footer{padding:1.5rem;flex-direction:column;gap:.5rem;text-align:center}
}
@media (prefers-reduced-motion:reduce){.page{animation:none;opacity:1;transform:none}}
</style>
</head>
<body>
<div class="page">

<nav>
  <a href="/" class="logo">WamiriX</a>
  <ul class="links">
    <li><a href="/">Home</a></li>
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/blog" class="on">Blog</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<main class="wrap">
  <a class="back" href="/blog">&larr; Back to all writing</a>

  <header class="head">
    <p class="tag">Personal</p>
    <h1>My Journey Learning JavaScript: Mistakes, Breakthroughs and Lessons</h1>
    <p class="dek">From confusing callbacks to finally understanding async/await — an honest account of learning JavaScript as a self-driven computer science student in Nigeria.</p>
    <p class="meta">WamiriX, November 2026. 6 min read.</p>
  </header>

  <svg class="sketch" viewBox="0 0 520 190" role="img" aria-label="A hand-drawn bug standing on a line of code, looking confused">
    <g fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 160 H500" stroke="#e0ddd8" stroke-width="1.5"/>
      <path d="M40 160 h60 M112 160 h30 M154 160 h90 M360 160 h70 M442 160 h40" stroke="#1a1a1a" stroke-width="1.2" opacity=".35"/>
      <ellipse cx="260" cy="118" rx="38" ry="30"/>
      <path d="M260 88 V148"/>
      <circle cx="260" cy="72" r="17"/>
      <path d="M250 58 Q244 40 232 34 M270 58 Q276 40 288 34"/>
      <circle cx="254" cy="70" r="2.4" fill="#1a1a1a"/><circle cx="267" cy="70" r="2.4" fill="#1a1a1a"/>
      <path d="M254 80 q6 -4 12 0"/>
      <path d="M226 110 L200 98 M224 122 L196 124 M230 138 L206 154 M294 110 L320 98 M296 122 L324 124 M290 138 L314 154"/>
      <path d="M248 112 a6 6 0 1 1 0.1 0 M272 128 a5 5 0 1 1 0.1 0" stroke="#2d6a4f"/>
    </g>
    <g font-family="DM Sans, sans-serif" font-size="14" fill="#555">
      <text x="338" y="58" font-style="italic">"...but it worked yesterday."</text>
    </g>
    <path d="M334 62 q-14 6 -24 14" fill="none" stroke="#555" stroke-width="1.2" stroke-linecap="round"/>
  </svg>

  <article>
    <p>Three years ago, around 2023, I knew exactly two things about building websites: HTML and CSS. And I will be honest, I only liked one of them. HTML made sense to me. You put things in boxes and the boxes behaved. CSS asked me to be creative with design, and that has never been my strongest muscle.</p>

    <p>So when I found out that JavaScript could make a page actually <em>do</em> things, respond, calculate, remember, I was hooked. What I did not know was how often it would also make me want to close my laptop and stare at a wall.</p>

    <p>This is the story of that journey: how I learned, the bugs that humbled me, and the one conversation that made things click. If you are a self-driven student somewhere in Nigeria wondering whether you are the only one struggling, you are not.</p>

    <h2>How I actually learned</h2>

    <p>I started with YouTube, like most of us. Then I moved to online documentation, which felt like a foreign language at first and then, slowly, like a map. Along the way I had real people too: mentors who sat with me, looked at my screen, and said, “No, that is not what your code is doing.”</p>

    <p>Mostly, though, it was commitment and discipline. JavaScript is frustrating, and motivation does not survive frustration. Showing up on the days you do not feel like it does. Projects were where everything finally stuck, because a tutorial can lie to you, but your own broken app cannot.</p>

    <h2>Five bugs I will never forget</h2>

    <p>Every JavaScript learner keeps a private museum of mistakes. These are the exhibits from mine.</p>

    <h3>The two equals signs that lied</h3>
    <p>My if-statements kept passing when they had no business passing. Loose equality quietly converts types behind your back, so a string and a number can be “equal”.</p>
<pre><span class="bad">"5" == 5</span>    <span class="c">// true, JavaScript converted the type for me</span>
<span class="ok">"5" === 5</span>   <span class="c">// false, different types, different things</span></pre>
    <p class="fix">Lesson: use <code>===</code> by default. Make type conversion something I choose, not something that happens to me.</p>

    <h3>undefined, everywhere</h3>
    <p>A variable I was sure had a value kept answering “undefined”, and then crashed the whole script. I was reading data before it existed, or from the wrong place.</p>
<pre>const user = {};
console.log(user.name);        <span class="c">// undefined</span>
console.log(user.name.first);  <span class="bad">// TypeError</span></pre>
    <p class="fix">Lesson: <code>console.log</code> the data first, and check its shape before touching it.</p>

    <h3>The loop that ate my laptop</h3>
    <p>My browser tab froze and the fan started sounding like a small aircraft. The loop condition could never become false.</p>
<pre><span class="bad">let i = 0;
while (i &lt; 10) {
  console.log(i);
  <span class="c">// no i++ ... forever</span>
}</span></pre>
    <p class="fix">Lesson: before running any loop, ask what changes each round so it can end.</p>

    <svg class="sketch" viewBox="0 0 520 130" role="img" aria-label="A laptop with a circular arrow on the screen and sweat drops">
      <g fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="190" y="20" width="140" height="80" rx="6"/>
        <path d="M170 100 H350 L342 114 H178 Z"/>
        <path d="M236 60 a24 24 0 1 1 24 24" stroke="#2d6a4f"/>
        <path d="M260 84 l-3 -9 M260 84 l9 -3" stroke="#2d6a4f"/>
        <path d="M160 40 q-7 10 0 18 q7 -8 0 -18 M362 30 q-7 10 0 18 q7 -8 0 -18" stroke="#555"/>
      </g>
    </svg>
    <p class="cap">My laptop, trying its best.</p>

    <h3>var, scope and the three 3s</h3>
    <p>Every callback in my loop saw the same number. <code>var</code> shares one variable across the whole loop, while <code>let</code> gives each round its own.</p>
<pre><span class="bad">for (var i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 100);
}  <span class="c">// 3, 3, 3</span></span>

<span class="ok">for (let i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 100);
}  <span class="c">// 0, 1, 2</span></span></pre>
    <p class="fix">Lesson: stop guessing about scope and learn how it actually works.</p>

    <h3>The missing await</h3>
    <p>I was staring at <code>Promise { &lt;pending&gt; }</code> when I wanted my data. The function returned a promise and I never waited for it.</p>
<pre><span class="bad">const data = fetchUsers();
console.log(data);</span>   <span class="c">// Promise { &lt;pending&gt; }</span>

<span class="ok">const data = await fetchUsers();
console.log(data);</span>   <span class="c">// the actual users</span></pre>
    <p class="fix">Lesson: <code>await</code> it, inside an <code>async</code> function.</p>

    <h2>The callback pyramid</h2>

    <p>Then came callbacks. The idea is simple: pass a function in, and it runs later. In practice, my code slowly drifted to the right until it looked like a staircase to nowhere. Every step depended on the one before it, every error needed its own handling, and I could no longer say with confidence what ran first.</p>

    <svg class="sketch" viewBox="0 0 520 190" role="img" aria-label="Nested callbacks drawn as a staircase of boxes moving right">
      <g fill="none" stroke="#1a1a1a" stroke-width="1.6" stroke-linejoin="round">
        <rect x="20" y="14" width="480" height="34" rx="3"/>
        <rect x="60" y="58" width="440" height="34" rx="3"/>
        <rect x="100" y="102" width="400" height="34" rx="3"/>
        <rect x="140" y="146" width="360" height="30" rx="3" stroke="#2d6a4f"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="13" fill="#1a1a1a">
        <text x="34" y="36">getUser(function (user) {</text>
        <text x="74" y="80">getPosts(user, function (posts) {</text>
        <text x="114" y="124">getComments(posts, function (c) {</text>
        <text x="154" y="166" fill="#2d6a4f">...and it keeps going</text>
      </g>
    </svg>

    <h2>The breakthrough</h2>

    <p>The first real click did not come from a video or a documentation page. It came from a mentor, my CTO. Watching someone experienced slow down and trace what runs, and when, did more for me in one sitting than weeks of copying examples.</p>

    <p class="pull">Async code stopped being magic and became a question I could answer: what am I waiting for, and what happens after it arrives?</p>

    <p>Once that mental model landed, async/await felt like someone had switched the lights on. Same logic as the pyramid, written the way I actually think:</p>

<pre><span class="bad">// before
getUser(id, (user) =&gt; {
  getPosts(user, (posts) =&gt; {
    render(posts);
  });
});</span>

<span class="ok">// after
async function showPosts(id) {
  const user  = await getUser(id);
  const posts = await getPosts(user);
  render(posts);
}</span></pre>

    <h2>What I would tell my 2023 self</h2>

    <ol class="lessons">
      <li><b>Read the error message first.</b>It is usually telling you exactly where to look.</li>
      <li><b>Build things, even ugly things.</b>Projects teach what tutorials cannot.</li>
      <li><b>Find a mentor.</b>One person tracing your code with you can save weeks.</li>
      <li><b>Be consistent, not heroic.</b>Small daily practice beats the occasional all-nighter.</li>
      <li><b>Make friends with console.log.</b>And later, with the debugger.</li>
      <li><b>Frustration means you are learning.</b>It is not proof that you are not cut out for this.</li>
    </ol>

    <h2>Still learning, still debugging</h2>
    <p>I am not done. New bugs arrive every week, and I have made peace with that. If you are learning JavaScript right now, from a hostel room at FUNAAB or anywhere else, keep going. Your future self will laugh at today’s bugs the way I laugh at mine.</p>
    <p class="end">What was your most embarrassing JavaScript bug? I would love to hear it.</p>
  </article>
</main>

<footer>
  <p>© 2026 WamiriX. All rights reserved.</p>
  <p>Built with ❤️</p>
</footer>

</div>
</body>
</html>
`;

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}