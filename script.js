// Typing effect
const lines = [
  "nmap -sV hedef.com ...",
  "sqlmap --dbs --batch ...",
  "nikto -h hedef.com ...",
  "rapor.pdf oluşturuldu ✔"
];
const el = document.getElementById('typed');
let li = 0, ci = 0, del = false;
(function type(){
  if(!el) return;
  const cur = lines[li];
  el.textContent = cur.slice(0, ci);
  if(!del){ ci++; if(ci > cur.length){ del = true; setTimeout(type, 1300); return; } }
  else { ci--; if(ci === 0){ del = false; li = (li+1)%lines.length; } }
  setTimeout(type, del ? 28 : 55);
})();

// Matrix rain (light)
const c = document.getElementById('matrix'), ctx = c.getContext('2d');
let cols, drops;
function resize(){ c.width = innerWidth; c.height = innerHeight; cols = Math.floor(c.width/18); drops = Array(cols).fill(0); }
resize(); addEventListener('resize', resize);
const chars = '01アイシルベストリス$#/+*';
setInterval(()=>{
  ctx.fillStyle = 'rgba(5,10,8,.12)'; ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = '#00ff88'; ctx.font = '13px monospace';
  drops.forEach((y,i)=>{
    const t = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(t, i*18, y*18);
    if(y*18 > c.height && Math.random() > .975) drops[i]=0;
    drops[i]++;
  });
}, 66);

// Mobile menu
const ham = document.getElementById('hamburger'), mm = document.getElementById('mobileMenu');
ham?.addEventListener('click', ()=> mm.classList.toggle('open'));
mm?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mm.classList.remove('open')));

// Copy handle
document.getElementById('copyBtn')?.addEventListener('click', async (e)=>{
  const t = document.getElementById('tgHandle').textContent.trim();
  try{ await navigator.clipboard.writeText(t); e.target.textContent = 'Kopyalandı ✔'; }
  catch{ e.target.textContent = t; }
  setTimeout(()=> e.target.textContent='Kopyala', 1500);
});

// Deep-link per service: prefill telegram message
document.querySelectorAll('[data-svc]').forEach(a=>{
  a.addEventListener('click', ()=>{
    const svc = a.getAttribute('data-svc');
    const msg = encodeURIComponent(svc + ' + DETAY: ');
    a.href = 'https://t.me/Silvestris0?text=' + msg;
  });
});
