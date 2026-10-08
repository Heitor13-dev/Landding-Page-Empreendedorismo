(function(){
var go=document.getElementById('go'),arc=document.getElementById('arc'),time=document.getElementById('time'),st=document.getElementById('state'),pts=document.getElementById('pts'),run=false,total=1200,left=total,score=340;
go.addEventListener('click',function(){
if(run)return;run=true;go.textContent='Desafio em andamento';st.textContent='mantendo o foco';
var iv=setInterval(function(){
left-=40;if(left<0)left=0;
var m=Math.floor(left/60),s=left%60;time.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;
arc.style.strokeDashoffset=490*(left/total);
if(left===0){clearInterval(iv);score+=50;pts.textContent=score;st.textContent='desafio concluído';go.textContent='Novo desafio';run=false;left=total;arc.style.strokeDashoffset=490;}
},120);
});
var f=document.getElementById('f'),ok=document.getElementById('ok');
f.addEventListener('submit',function(e){e.preventDefault();
try{localStorage.setItem('reconecta_lista','1')}catch(x){}
ok.textContent='Você está na lista. Em breve a ReConecta chega até você.';f.reset();});

var ph=document.getElementById('ph');
if(ph&&matchMedia('(hover:hover)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
ph.parentNode.addEventListener('mousemove',function(e){var r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ph.style.transform='perspective(900px) rotateY('+x*10+'deg) rotateX('+(-y*10)+'deg)'});
ph.parentNode.addEventListener('mouseleave',function(){ph.style.transform=''});}
var hd=document.querySelector('header');
addEventListener('scroll',function(){hd.classList.toggle('sc',scrollY>10)},{passive:true});
var rng=document.getElementById('rng');
function sim(){var m=+rng.value,p=m*7,r=p<300?'Cupom em loja':p<600?'Desconto em curso':p<900?'Vantagem na escola':'Mês premium grátis';
document.getElementById('mv').textContent=m+' min';document.getElementById('sp').textContent=p;document.getElementById('sr').textContent=r;
document.getElementById('sb').style.width=Math.min(100,p/1260*100)+'%';}
rng.addEventListener('input',sim);sim();
var els=document.querySelectorAll('h2,.lead,.card,.pgrid div,.sim,.quote,.final');
els.forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4)*80+'ms'});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});els.forEach(function(el){io.observe(el)})}
else els.forEach(function(el){el.classList.add('in')});
})();