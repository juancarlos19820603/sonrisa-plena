"use strict";
/* ---------- Íconos (SVG creados con DOM, sin innerHTML de datos del usuario) ---------- */
const ICONS={tooth:'M12 4.2C10.4 3 8.6 2.6 7 2.9 4.3 3.4 3 5.6 3.3 8.4c.3 2.6 1.4 4.6 2 7.2.5 2.4.9 5.6 2.8 5.6 1.5 0 1.7-2.6 2.2-4.6.3-1.2.8-1.8 1.7-1.8s1.4.6 1.7 1.8c.5 2 .7 4.6 2.2 4.6 1.9 0 2.3-3.2 2.8-5.6.6-2.6 1.7-4.6 2-7.2.3-2.8-1-5-3.7-5.5-1.6-.3-3.4.1-5 1.3z',cal:'M5.5 4.5h13a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18V7a2.5 2.5 0 0 1 2.5-2.5zM16 2.5v4M8 2.5v4M3 9.5h18',cam:'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3zM12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z',spark:'M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8',shield:'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',check:'M20 6 9 17l-5-5',arrow:'M5 12h14M13 6l6 6-6 6',chev:'m9 18 6-6-6-6',chevl:'m15 18-6-6 6-6',clock:'M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zM12 7v5l3 2',lock:'M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4',user:'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 21a8 8 0 0 1 16 0',mail:'M5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7A2.5 2.5 0 0 1 5 4.5zM3 6l9 7 9-7',pin:'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',phone:'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z',chat:'M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.5 8.5 0 1 1 21 11.5z',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z',star:'m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z',menu:'M4 7h16M4 12h16M4 17h16',search:'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3',copy:'M9 9h11v11H9zM5 15H4V4h11v1',plus:'M12 5v14M5 12h14',moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',sun:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'};
const SVGNS='http://www.w3.org/2000/svg';
function icon(name,color='#0A1A33',size=20){const s=document.createElementNS(SVGNS,'svg');s.setAttribute('width',size);s.setAttribute('height',size);s.setAttribute('viewBox','0 0 24 24');s.setAttribute('fill','none');s.setAttribute('stroke',color);s.setAttribute('stroke-width','1.8');s.setAttribute('stroke-linecap','round');s.setAttribute('stroke-linejoin','round');s.setAttribute('aria-hidden','true');const p=document.createElementNS(SVGNS,'path');p.setAttribute('d',ICONS[name]);s.appendChild(p);return s;}
function paintIcons(root=document){root.querySelectorAll('[data-ic]').forEach(el=>{if(el.firstChild)return;el.style.display='inline-flex';el.appendChild(icon(el.dataset.ic,el.dataset.c||'#0A1A33',+(el.dataset.s||(el.classList.contains('logo')?24:20))));});}
/* helper para crear elementos de forma segura (textContent, nunca innerHTML con datos) */
function h(tag,attrs={},...kids){const e=document.createElement(tag);for(const[k,v]of Object.entries(attrs)){if(k==='class')e.className=v;else if(k==='text')e.textContent=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else if(v!==false&&v!=null)e.setAttribute(k,v===true?'':v);}for(const k of kids.flat()){if(k==null)continue;e.appendChild(typeof k==='string'?document.createTextNode(k):k);}return e;}
const $=s=>document.querySelector(s);
/* Fotos: archivos en /img (antes iban en base64 dentro del HTML). loading="lazy" = se descargan al acercarse */
const imgSrc=k=>'img/'+k+'.jpg';
function pic(key,alt,style){const i=h("img",{class:"cover",alt:alt,loading:"lazy",decoding:"async",style:style||""});i.src=imgSrc(key);return i;}
const fmt=n=>'$'+n.toLocaleString('es-CO');

/* ---------- Datos del consultorio ---------- */
const SERVICIOS=[
 {id:'limpieza',nombre:'Limpieza dental',cat:'Prevención',dur:45,precio:120000,ra:false,ic:'tooth',desc:'Profilaxis y control preventivo cada 6 meses.',pasos:[['Revisión','Evaluamos encías y placa bacteriana.'],['Limpieza','Retiramos sarro con ultrasonido.'],['Pulido','Dejamos la superficie lisa y brillante.'],['Flúor','Aplicamos flúor para proteger el esmalte.']]},
 {id:'ortodoncia',nombre:'Ortodoncia',cat:'Ortodoncia',dur:30,precio:90000,ra:true,ic:'spark',desc:'Brackets y alineadores para una mordida sana.',pasos:[['Valoración','Radiografías y estudio de la mordida.'],['Plan','Elegimos brackets o alineadores.'],['Instalación','Colocamos el tratamiento elegido.'],['Controles','Ajustes mensuales hasta el resultado.']]},
 {id:'blanqueamiento',nombre:'Blanqueamiento',cat:'Estética',dur:60,precio:450000,ra:true,ic:'star',desc:'Tonos más claros con supervisión profesional.',pasos:[['Valoración','Revisamos el esmalte y la sensibilidad.'],['Protección','Aislamos encías y tejidos blandos.'],['Aplicación','Gel blanqueador en sesiones controladas.'],['Control','Seguimiento y recomendaciones de cuidado.']]},
 {id:'endodoncia',nombre:'Endodoncia',cat:'Tratamientos',dur:90,precio:380000,ra:false,ic:'shield',desc:'Tratamiento de conducto para salvar el diente.',pasos:[['Diagnóstico','Radiografía y prueba de sensibilidad.'],['Anestesia','Procedimiento sin dolor.'],['Limpieza del conducto','Retiramos el tejido afectado.'],['Sellado','Protegemos el diente tratado.']]},
 {id:'odontopediatria',nombre:'Odontopediatría',cat:'Niños',dur:40,precio:100000,ra:false,ic:'heart',desc:'Atención amable para los más pequeños.',pasos:[['Juego y confianza','Presentamos el consultorio al niño.'],['Revisión','Control de dientes y hábitos.'],['Prevención','Sellantes y flúor si se requieren.'],['Guía a padres','Recomendaciones de higiene en casa.']]},
 {id:'implantes',nombre:'Implantes dentales',cat:'Tratamientos',dur:60,precio:250000,ra:false,ic:'tooth',desc:'Reemplazo fijo y natural de dientes perdidos.',pasos:[['Valoración 3D','Tomografía para medir hueso y encía.'],['Plan quirúrgico','Definimos la posición ideal del implante.'],['Colocación','Instalamos el implante con anestesia local.'],['Corona','Tras la integración colocamos la corona definitiva.']]},
 {id:'periodoncia',nombre:'Periodoncia',cat:'Prevención',dur:50,precio:180000,ra:false,ic:'heart',desc:'Tratamiento de encías sangrantes o inflamadas.',pasos:[['Diagnóstico','Medimos el estado de cada encía.'],['Raspado','Limpieza profunda bajo la encía.'],['Alisado','Superficies lisas para que la encía sane.'],['Mantenimiento','Controles periódicos para evitar recaídas.']]},
 {id:'diseno-sonrisa',nombre:'Diseño de sonrisa',cat:'Estética',dur:45,precio:150000,ra:true,ic:'spark',desc:'Carillas y diseño digital de tu sonrisa.',pasos:[['Valoración','Fotos y escaneo de tu sonrisa.'],['Diseño digital','Simulamos el resultado contigo.'],['Prueba','Revisas el diseño antes de aprobar.'],['Aplicación','Instalamos las carillas.']]}];
const ODONTOLOGOS=[
 {id:'rios',nombre:'Dra. Camila Ríos',esp:'Estética dental',serv:['blanqueamiento','diseno-sonrisa'],exp:12},
 {id:'correa',nombre:'Dr. Andrés Correa',esp:'Rehabilitación oral',serv:['diseno-sonrisa','limpieza','implantes'],exp:10},
 {id:'villegas',nombre:'Dr. Tomás Villegas',esp:'Implantología',serv:['implantes'],exp:16},
 {id:'restrepo',nombre:'Dra. Valentina Restrepo',esp:'Odontología general',serv:['limpieza','blanqueamiento','periodoncia'],exp:6},
 {id:'cardona',nombre:'Dra. Isabela Cardona',esp:'Periodoncia',serv:['periodoncia'],exp:11},
 {id:'arango',nombre:'Dr. Felipe Arango',esp:'Ortodoncia',serv:['ortodoncia'],exp:15},
 {id:'mejia',nombre:'Dra. Laura Mejía',esp:'Ortodoncia',serv:['ortodoncia'],exp:18},
 {id:'mesa',nombre:'Dr. Julián Mesa',esp:'Endodoncia',serv:['endodoncia'],exp:22},
 {id:'ochoa',nombre:'Dr. Santiago Ochoa',esp:'Endodoncia',serv:['endodoncia'],exp:7},
 {id:'gomez',nombre:'Dra. Sara Gómez',esp:'Odontopediatría',serv:['odontopediatria'],exp:9},
 {id:'zapata',nombre:'Dra. Mariana Zapata',esp:'Odontopediatría',serv:['odontopediatria'],exp:8}];
const docsDe=sid=>ODONTOLOGOS.filter(d=>d.serv.includes(sid));
const HORAS_LV=['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30'];
const HORAS_SAB=['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00'];
const srvById=id=>SERVICIOS.find(s=>s.id===id), docById=id=>ODONTOLOGOS.find(d=>d.id===id);

/* ---------- Almacenamiento: base de datos del artifact (db) con respaldo local ---------- */
const store={mode:'local',db:null,uid:null,admin:false,citas:[],todas:[],ocupados:{}};
const LKEY='sonrisa-plena-citas';
function localLoad(){try{return JSON.parse(localStorage.getItem(LKEY)||'[]');}catch(e){return [];}}
function localSave(a){try{localStorage.setItem(LKEY,JSON.stringify(a));return true;}catch(e){return false;}}
store.citas=localLoad();
function storageText(){return store.mode==='db'?'Tus citas se guardan en la base de datos del sitio, asociadas a tu cuenta: puedes consultarlas desde cualquier dispositivo.':'Tus citas se guardan en este navegador (modo local). Para guardarlas en la nube abre el sitio con tu cuenta de Claude.';}
function refreshStorageNotes(){$('#storage-note').textContent=storageText();$('#storage-note2').textContent=storageText();}
async function initDb(){
 try{
  if(!window.claude||!window.claude.use)return;
  const [db,user]=await Promise.all([window.claude.use('db'),window.claude.use('user')]);
  if(!db||!user)return;
  const uid=await user.id(); if(!uid)return;
  store.db=db;store.uid=uid;store.mode='db';
  try{store.admin=!!(await user.canEdit());}catch(e){store.admin=false;}
  refreshStorageNotes();
  const timer=setTimeout(()=>toast('No se pudo conectar con la base de datos todavía; se muestran los datos locales.'),10000);
  db.doc('agenda/'+uid).onSnapshot(s=>{if(!s.metadata.fromCache)clearTimeout(timer);const d=s.exists?s.data():null;const remote=d&&Array.isArray(d.citas)?d.citas.map(c=>({...c})):[];
    // migrar citas locales a la nube una sola vez
    const local=localLoad().filter(c=>!remote.some(r=>r.codigo===c.codigo));
    store.citas=remote;if(local.length&&!s.metadata.fromCache){store.citas=remote.concat(local);saveMine().then(()=>localSave([]));}
    renderCitas();refreshSlots();},e=>{clearTimeout(timer);fallback();});
  db.collection('ocupacion').onSnapshot(q=>{const o={};q.docs.forEach(d=>{o[d.id]=d.data().slots||{};});store.ocupados=o;refreshSlots();},()=>{});
  if(store.admin){$('#nav-panel').hidden=false;db.collection('agenda').onSnapshot(q=>{const all=[];q.docs.forEach(d=>{const b=d.data();(b.citas||[]).forEach(c=>all.push({...c,_uid:d.id}));});store.todas=all;renderPanel();},()=>{});}
  route();
 }catch(e){fallback();}
}
function fallback(){store.mode='local';store.db=null;refreshStorageNotes();}
let writing=Promise.resolve();
function saveMine(){ // una escritura a la vez por documento
 if(store.mode!=='db'){localSave(store.citas);return Promise.resolve();}
 const body={actualizado:new Date().toISOString(),citas:store.citas};
 writing=writing.then(()=>store.db.doc('agenda/'+store.uid).set(body)).catch(e=>{toast(e&&e.code==='quota_exceeded'?'La base de datos está llena: no se pudo guardar.':'No se pudo guardar en la nube; se guardó en este navegador.');localSave(store.citas);});
 return writing;
}
async function marcarOcupado(fecha,doc,hora,valor){
 const key=doc+'_'+hora.replace(':','');
 if(store.mode!=='db'){return;}
 const cur={...(store.ocupados[fecha]||{})};if(valor)cur[key]=true;else delete cur[key];
 try{await store.db.doc('ocupacion/'+fecha).set({slots:cur});}catch(e){}
}
function slotOcupado(fecha,doc,hora){const key=doc+'_'+hora.replace(':','');if(store.ocupados[fecha]&&store.ocupados[fecha][key])return true;return store.citas.some(c=>c.estado==='programada'&&c.fecha===fecha&&c.hora===hora&&c.odontologo===doc);}

/* ---------- Utilidades ---------- */
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('on'),4000);}
function codigo(){const A='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const r=new Uint32Array(6);crypto.getRandomValues(r);return 'SP-'+Array.from(r,x=>A[x%A.length]).join('');}
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function fechaLarga(s){const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d).toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long',year:'numeric'});}
function horaAmPm(h){const[H,M]=h.split(':').map(Number);return (H>12?H-12:H)+':'+String(M).padStart(2,'0')+(H<12?' a. m.':' p. m.');}
const maskDoc=d=>d?'••••'+String(d).slice(-4):'';
const limpiar=s=>String(s).replace(/[<>]/g,'').replace(/\s+/g,' ').trim();

/* ---------- Router por hash (#nombre) ---------- */
const VISTAS=['inicio','servicios','agendar','mis-citas','panel','nosotros','contacto'];
function route(){
 let r=(location.hash||'#inicio').slice(1);
 let view=r, srv=null;
 if(r.startsWith('servicio-')){srv=srvById(r.slice(9));view=srv?'detalle':'servicios';}
 // #agendar-ID o #agendar?servicio=ID: abre el paso 1 con el servicio ya elegido
 const pre=r.startsWith('agendar-')?r.slice(8):(r.startsWith('agendar?')?new URLSearchParams(r.slice(8)).get('servicio'):null);
 if(r.startsWith('agendar-')||r.startsWith('agendar?')){const s=srvById(pre);if(s){agenda.serv=s.id;$('#f-serv').value=s.id;renderDocs();resetAgenda(false);}view='agendar';}
 if(view==='panel'&&!store.admin)view='mis-citas';
 if(!VISTAS.includes(view)&&view!=='detalle')view='inicio';
 document.querySelectorAll('.view').forEach(v=>v.classList.toggle('on',v.id==='v-'+view));
 document.querySelectorAll('[data-nav]').forEach(a=>a.toggleAttribute('aria-current',a.dataset.nav===view||(view==='detalle'&&a.dataset.nav==='servicios')));
 document.querySelectorAll('[data-nav]').forEach(a=>{if(a.hasAttribute('aria-current'))a.setAttribute('aria-current','page');});
 if(view==='detalle')renderDetalle(srv);
 if(view==='agendar'&&agenda.paso===3&&!r.startsWith('agendar'))resetAgenda(true);
 $('#menu').classList.remove('open');$('#burger').setAttribute('aria-expanded','false');
 // la barra inferior del celular se oculta al agendar (allí el botón principal es "Continuar")
 const mb=$('#mbar');mb.hidden=view==='agendar';ajustarBarra();
 window.scrollTo(0,0);revelar();
 const h1=document.querySelector('.view.on h1, .view.on h2');if(h1){h1.setAttribute('tabindex','-1');h1.focus({preventScroll:true});}
}
window.addEventListener('hashchange',route);
$('#burger').addEventListener('click',()=>{const o=$('#menu').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o);});

/* ---------- Servicios ---------- */
function cardServicio(s,compact){
 // Tarjeta del inicio: ícono, nombre, "desde $" y enlace directo al paso 1 con el servicio preseleccionado
 if(compact)return h('a',{class:'card srv-card rv',href:'#agendar-'+s.id,'aria-label':'Agendar '+s.nombre+', desde '+fmt(s.precio)},h('span',{class:'icbox'},icon(s.ic,'#7A5B24',24)),h('h3',{text:s.nombre}),h('p',{class:'muted',text:s.desc,style:'font-size:.95rem'}),h('span',{class:'desde'},'Desde ',h('b',{text:fmt(s.precio)})),h('span',{class:'go'},'Agendar',icon('arrow','#0A1A33',18)));
 if(false)return h('a',{class:'card shadow mini',href:'#servicio-'+s.id,style:'text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:10px;padding:0;overflow:hidden'},h('div',{class:'media',style:'height:170px'},pic(s.id,'Foto del servicio '+s.nombre),h('span',{class:'tagic'},icon(s.ic,'#0A1A33',22))),h('div',{style:'padding:4px 22px 22px;display:flex;flex-direction:column;gap:8px'},h('h3',{text:s.nombre}),h('p',{class:'muted',text:s.desc,style:'font-size:15px'}),h('span',{style:'color:var(--azul);font-weight:600;display:flex;gap:6px;align-items:center'},'Ver más',icon('arrow','#0A1A33',18))));
 return h('article',{class:'card shadow srv rv'},h('div',{class:'media',style:'height:190px'},pic(s.id,'Foto del servicio '+s.nombre),h('span',{class:'tagic'},icon(s.ic,'#0A1A33',22))),h('div',{class:'body'},
  h('div',{style:'display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap'},h('h3',{text:s.nombre}),null),
  h('div',{class:'muted',style:'display:flex;gap:6px;align-items:center;font-size:15px'},icon('clock','#5B6577',18),(s.id==='ortodoncia'||s.id==='diseno-sonrisa'?'Valoración ':'')+s.dur+' min'),
  h('div',{style:'display:flex;justify-content:space-between;align-items:flex-end;margin-top:auto;gap:12px'},h('div',{},h('div',{class:'muted',style:'font-size:13px',text:'Desde'}),h('div',{class:'price',text:fmt(s.precio)})),h('a',{class:'btn primary sm',href:'#servicio-'+s.id,text:'Ver detalle'}))));
}
let filtro='Todos';
function renderServicios(){
 const f=$('#filtros');f.replaceChildren();['Todos','Prevención','Estética','Ortodoncia','Tratamientos','Niños'].forEach(c=>f.appendChild(h('button',{class:'chip','aria-pressed':String(c===filtro),text:c,onclick:()=>{filtro=c;renderServicios();}})));
 $('#srv-list').replaceChildren(...SERVICIOS.filter(s=>filtro==='Todos'||s.cat===filtro).map(s=>cardServicio(s)));
 $('#home-srv').replaceChildren(...SERVICIOS.map(s=>cardServicio(s,true)));revelar();
}
function renderDetalle(s){
 const box=$('#detalle');
 box.replaceChildren(h('div',{class:'crumb'},h('a',{href:'#inicio',text:'Inicio'}),' / ',h('a',{href:'#servicios',text:'Servicios'}),' / '+s.nombre),
  h('div',{class:'two',style:'margin-top:16px'},
   h('div',{},h('div',{class:'photo media',style:'height:clamp(220px,34vw,400px)'},pic(s.id,'Foto del servicio '+s.nombre,'border-radius:24px')),h('h1',{text:s.nombre,style:'font-size:clamp(30px,5vw,44px);margin:28px 0 10px'}),h('p',{class:'muted',style:'font-size:18px',text:s.desc+' Atención con control del odontólogo en cada sesión.'}),h('h3',{text:'¿Cómo es el procedimiento?',style:'font-size:22px;margin-top:28px'}),
    h('div',{class:'steps-list'},s.pasos.map((p,i)=>h('div',{style:'display:flex;gap:14px'},h('div',{class:'num',text:String(i+1)}),h('div',{},h('b',{text:p[0]}),h('p',{class:'muted',style:'font-size:15px',text:p[1]})))))),
   h('aside',{class:'card shadow sticky',style:'display:grid;gap:14px'},h('span',{class:'muted',text:'Desde'}),h('div',{class:'price',style:'font-size:34px;margin-top:-10px',text:fmt(s.precio)}),
    h('div',{class:'kv'},h('span',{text:'Duración'}),h('b',{text:s.dur+' min'})),h('div',{class:'kv'},h('span',{text:'Categoría'}),h('b',{text:s.cat})),h('div',{style:'display:grid;gap:10px'},h('span',{class:'muted',text:'Especialistas'}),docsDe(s.id).map(d=>h('div',{style:'display:flex;gap:10px;align-items:center'},h('span',{class:'avatar ph-av',style:'width:40px;height:40px'},pic(d.id,'')),h('span',{},h('b',{text:d.nombre,style:'display:block;font-size:15px'}),h('span',{class:'muted',style:'font-size:13px',text:d.esp}))))),
    h('a',{class:'btn primary block',href:'#agendar-'+s.id},icon('cal','#fff'),'Agendar este servicio'),
    null)));
}

/* ---------- Agendamiento ---------- */
const agenda={paso:1,serv:'blanqueamiento',doc:'rios',fecha:null,hora:null,semana:0,ultima:null};
function diasDisponibles(){const out=[];const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+1);while(out.length<24){if(d.getDay()!==0)out.push(new Date(d));d.setDate(d.getDate()+1);}return out;}
const DIAS=diasDisponibles();
function initAgenda(){
 const sel=$('#f-serv');SERVICIOS.forEach(s=>sel.appendChild(h('option',{value:s.id,text:s.nombre+' · '+fmt(s.precio)})));sel.value=agenda.serv;
 sel.addEventListener('change',()=>{agenda.serv=sel.value;renderDocs();refreshSlots();updSum();});
 renderDocs();
 $('#cal-prev').addEventListener('click',()=>{if(agenda.semana>0){agenda.semana--;renderCal();}});
 $('#cal-next').addEventListener('click',()=>{if(agenda.semana<2){agenda.semana++;renderCal();}});
 $('#btn-next').addEventListener('click',siguiente);$('#btn-back').addEventListener('click',()=>irPaso(1));
 $('#ics').addEventListener('click',descargarIcs);
 $('#copiar').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(agenda.ultima.codigo);toast('Código copiado: '+agenda.ultima.codigo);}catch(e){toast('Tu código es '+agenda.ultima.codigo);}});
 renderCal();updSum();
}
function renderDocs(){
 const lista=docsDe(agenda.serv);if(!lista.some(d=>d.id===agenda.doc)){agenda.doc=lista[0].id;agenda.hora=null;}
 $('#doc-title').textContent='Especialistas en '+srvById(agenda.serv).nombre+' ('+lista.length+')';
 $('#doc-list').replaceChildren(...lista.map(d=>h('button',{class:'doc-opt',type:'button','data-doc':d.id,'aria-pressed':String(d.id===agenda.doc),onclick:()=>{agenda.doc=d.id;agenda.hora=null;document.querySelectorAll('.doc-opt').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.doc===d.id)));refreshSlots();updSum();}},h('span',{class:'avatar ph-av'},pic(d.id,'')),h('span',{},h('b',{text:d.nombre,style:'display:block'}),h('span',{class:'muted',style:'font-size:14px',text:d.esp+' · '+d.exp+' años de experiencia'})))));
}
function renderCal(){
 const start=agenda.semana*12;const dias=DIAS.slice(start,start+12);
 const meses=[...new Set(dias.map(d=>d.toLocaleDateString('es-CO',{month:'long',year:'numeric'})))];$('#cal-mes').textContent=meses.join(' – ');
 const cal=$('#cal');cal.replaceChildren(...['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].map(t=>h('div',{class:'dow',text:t})));
 const first=dias[0];const lead=(first.getDay()+6)%7;for(let i=0;i<lead;i++)cal.appendChild(h('div'));
 let prev=null;
 dias.forEach(d=>{if(prev){let gap=Math.round((d-prev)/864e5)-1;for(let i=0;i<gap;i++){const x=new Date(prev);x.setDate(x.getDate()+i+1);cal.appendChild(h('button',{class:'day',disabled:true,'aria-label':'Domingo cerrado',text:String(x.getDate())}));}}
  const k=iso(d);cal.appendChild(h('button',{class:'day',type:'button','aria-pressed':String(k===agenda.fecha),'aria-label':d.toLocaleDateString('es-CO',{weekday:'long',day:'numeric',month:'long'}),text:String(d.getDate()),onclick:()=>{agenda.fecha=k;agenda.hora=null;renderCal();refreshSlots();updSum();}}));prev=d;});
 $('#cal-prev').disabled=agenda.semana===0;$('#cal-next').disabled=agenda.semana===2;
}
function refreshSlots(){
 const box=$('#slots');if(!box)return;
 if(!agenda.fecha){$('#slots-title').textContent='Horarios disponibles';box.replaceChildren(h('p',{class:'muted',text:'Elige una fecha para ver los horarios.'}));return;}
 const[y,m,dd]=agenda.fecha.split('-').map(Number);const dow=new Date(y,m-1,dd).getDay();const horas=dow===6?HORAS_SAB:HORAS_LV;
 $('#slots-title').textContent='Horarios disponibles · '+fechaLarga(agenda.fecha);
 box.replaceChildren(...horas.map(t=>{const oc=slotOcupado(agenda.fecha,agenda.doc,t);return h('button',{class:'slot',type:'button',disabled:oc,'aria-pressed':String(t===agenda.hora),'aria-label':horaAmPm(t)+(oc?' ocupado':''),text:t,onclick:()=>{agenda.hora=t;$('#e-paso1').textContent='';refreshSlots();updSum();}});}));
}
function updSum(){const s=srvById(agenda.serv),d=docById(agenda.doc);
 $('#m-serv').textContent=s.nombre;$('#m-doc').textContent=d.nombre;$('#m-cuando').textContent=agenda.fecha?(fechaLarga(agenda.fecha).split(',').slice(0,2).join(',')+(agenda.hora?' · '+horaAmPm(agenda.hora):'')):'—';
 ['s-fecha','s-hora'].forEach(id=>$('#'+id).classList.toggle('vacio',id==='s-fecha'?!agenda.fecha:!agenda.hora));$('#s-serv').textContent=s.nombre;$('#s-doc').textContent=d.nombre;$('#s-fecha').textContent=agenda.fecha?fechaLarga(agenda.fecha):'—';$('#s-hora').textContent=agenda.hora?horaAmPm(agenda.hora):'—';$('#s-precio').textContent=fmt(s.precio);}
function irPaso(n){agenda.paso=n;$('#paso1').hidden=n!==1;$('#paso2').hidden=n!==2;$('#paso3').hidden=n!==3;$('#aside-sum').hidden=n===3;$('#btn-back').hidden=n!==2;
 $('#btn-next').replaceChildren(n===1?'Continuar':'Confirmar cita',icon(n===1?'arrow':'check','#fff'));
 $('#ag-title').textContent=n===1?'Agenda tu cita':n===2?'Tus datos':'Confirmación';
 // barra de progreso accesible (role=progressbar) + pasos con aria-current
 $('#pbar').setAttribute('aria-valuenow',n);$('#pbar').setAttribute('aria-valuetext','Paso '+n+' de 3');$('#pbar span').style.width=(n/3*100)+'%';
 document.querySelectorAll('#psteps li').forEach((li,i)=>{li.classList.toggle('done',i+1<n);if(i+1===n)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current');});
 $('#mini-sum').hidden=n===3;
 window.scrollTo(0,0);}
function resetAgenda(full){if(full){agenda.fecha=null;agenda.hora=null;['f-nombre','f-doc','f-cel','f-mail','f-coment'].forEach(i=>$('#'+i).value='');$('#f-ley').checked=false;}irPaso(1);renderCal();refreshSlots();updSum();}
const RX={nombre:/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' ]{3,60}$/,doc:/^\d{6,10}$/,cel:/^3\d{9}$/,mail:/^[^\s@<>]+@[^\s@<>]+\.[A-Za-z]{2,}$/};
function setErr(inp,errEl,msg){if(inp)inp.setAttribute('aria-invalid',msg?'true':'false');errEl.textContent=msg||'';return !msg;}
/* Validación en línea: cada campo se revisa al salir de él (blur) y, si ya mostró error, mientras se escribe */
const REGLAS={
 'f-nombre':['e-nombre',v=>{const n=limpiar(v);return RX.nombre.test(n)&&n.split(' ').length>=2?'':'Escribe nombre y apellido (solo letras).';}],
 'f-doc':['e-doc',v=>RX.doc.test(v.trim())?'':'El documento debe tener entre 6 y 10 números.'],
 'f-cel':['e-cel',v=>RX.cel.test(v.trim())?'':'Celular colombiano de 10 dígitos que empiece por 3.'],
 'f-mail':['e-mail',v=>RX.mail.test(v.trim())?'':'Revisa el formato del correo (ej. nombre@correo.com).']};
function validarCampo(id){const[e,fn]=REGLAS[id];const inp=$('#'+id);inp.classList.add('touched');return setErr(inp,$('#'+e),fn(inp.value));}
Object.keys(REGLAS).forEach(id=>{const inp=$('#'+id);
 inp.addEventListener('blur',()=>{if(inp.value.trim())validarCampo(id);});
 inp.addEventListener('input',()=>{if(id==='f-doc'||id==='f-cel')inp.value=inp.value.replace(/\D/g,'');if(inp.getAttribute('aria-invalid')==='true')validarCampo(id);});});
$('#f-ley').addEventListener('change',()=>setErr(null,$('#e-ley'),$('#f-ley').checked?'':'Debes autorizar el tratamiento de datos para agendar.'));
function validarDatos(){
 const n=limpiar($('#f-nombre').value),d=$('#f-doc').value.trim(),c=$('#f-cel').value.trim(),m=$('#f-mail').value.trim();
 let ok=true;
 ok&=setErr($('#f-nombre'),$('#e-nombre'),RX.nombre.test(n)&&n.split(' ').length>=2?'':'Escribe nombre y apellido (solo letras).');
 ok&=setErr($('#f-doc'),$('#e-doc'),RX.doc.test(d)?'':'El documento debe tener entre 6 y 10 números.');
 ok&=setErr($('#f-cel'),$('#e-cel'),RX.cel.test(c)?'':'Celular colombiano de 10 dígitos que empiece por 3.');
 ok&=setErr($('#f-mail'),$('#e-mail'),RX.mail.test(m)?'':'Revisa el formato del correo.');
 ok&=setErr(null,$('#e-ley'),$('#f-ley').checked?'':'Debes autorizar el tratamiento de datos para agendar.');
 if(!ok){const f=document.querySelector('#paso2 [aria-invalid=true]');if(f)f.focus();}
 return ok?{nombre:n,documento:d,celular:c,correo:m.toLowerCase(),comentario:limpiar($('#f-coment').value).slice(0,300),whatsapp:$('#f-wa').checked}:null;
}
let enviando=false;
async function siguiente(){
 if(agenda.paso===1){if(!agenda.fecha||!agenda.hora){$('#e-paso1').textContent='Elige una fecha y una hora para continuar.';return;}$('#e-paso1').textContent='';irPaso(2);$('#f-nombre').focus();return;}
 if(agenda.paso===2){if(enviando)return;const datos=validarDatos();if(!datos)return;
  if(slotOcupado(agenda.fecha,agenda.doc,agenda.hora)){toast('Ese horario acaba de ocuparse. Elige otro.');irPaso(1);refreshSlots();return;}
  enviando=true;$('#btn-next').disabled=true;
  const s=srvById(agenda.serv);
  const cita={codigo:codigo(),servicio:s.id,servicioNombre:s.nombre,odontologo:agenda.doc,odontologoNombre:docById(agenda.doc).nombre,fecha:agenda.fecha,hora:agenda.hora,precio:s.precio,estado:'programada',creada:new Date().toISOString(),...datos};
  store.citas=store.citas.concat([cita]);
  await saveMine();await marcarOcupado(cita.fecha,cita.odontologo,cita.hora,true);
  enviando=false;$('#btn-next').disabled=false;agenda.ultima=cita;renderConfirm(cita);irPaso(3);renderCitas();
  $('#ok-title').focus();}
}
function filaKV(k,v){return h('div',{class:'kv'},h('span',{text:k}),h('b',{text:v}));}
function renderConfirm(c){$('#ok-title').setAttribute('tabindex','-1');$('#ok-detalle').replaceChildren(filaKV('Código de reserva',c.codigo),filaKV('Paciente',c.nombre),filaKV('Servicio',c.servicioNombre),filaKV('Odontólogo',c.odontologoNombre),filaKV('Fecha',fechaLarga(c.fecha)),filaKV('Hora',horaAmPm(c.hora)),filaKV('Dirección','Cra. 43A #1-50, El Poblado'));}

/* ---------- Mis citas: consultar y cancelar ---------- */
let consulta='';
function tarjetaCita(c,opts={}){
 const pas=c.fecha<iso(new Date());
 return h('article',{class:'card shadow cita'},
  h('div',{style:'display:grid;gap:6px;min-width:220px;flex:1'},h('div',{style:'display:flex;gap:10px;align-items:center;flex-wrap:wrap'},h('h3',{text:c.servicioNombre}),h('span',{class:'estado '+c.estado,text:c.estado[0].toUpperCase()+c.estado.slice(1)})),
   h('div',{class:'muted',text:fechaLarga(c.fecha)+' · '+horaAmPm(c.hora)}),h('div',{text:c.odontologoNombre}),
   h('div',{style:'font-size:14px'},h('span',{class:'muted',text:'Paciente: '}),c.nombre+' · Doc. '+maskDoc(c.documento)),
   h('div',{style:'font-size:14px'},h('span',{class:'muted',text:'Código: '}),h('b',{text:c.codigo}))),
  c.estado==='programada'&&!pas&&!opts.soloLectura?h('button',{class:'btn danger sm',onclick:()=>confirmarCancel(c)},'Cancelar cita'):null);
}
function renderCitas(){
 const box=$('#citas');if(!box)return;let lista=[...store.citas].sort((a,b)=>(a.fecha+a.hora.padStart(5,'0')).localeCompare(b.fecha+b.hora.padStart(5,'0')));
 const q=consulta.trim().toUpperCase();
 if(q){lista=lista.filter(c=>c.codigo===q||c.documento===q);}
 if(!lista.length){box.replaceChildren(h('div',{class:'card',style:'text-align:center;padding:40px'},h('p',{class:'muted',text:q?'No encontramos citas con ese código o documento en tu cuenta.':'Todavía no tienes citas agendadas.'}),h('a',{class:'btn primary',href:'#agendar',style:'margin-top:16px'},icon('cal','#fff'),'Agendar mi primera cita')));return;}
 box.replaceChildren(...lista.map(c=>tarjetaCita(c)));
}
$('#buscar').addEventListener('submit',e=>{e.preventDefault();const v=$('#q').value.trim().toUpperCase();if(v&&!/^SP-[A-Z0-9]{6}$/.test(v)&&!RX.doc.test(v)){toast('Escribe un código tipo SP-XXXXXX o un documento de 6 a 10 números.');return;}consulta=v;renderCitas();});
$('#limpiar').addEventListener('click',()=>{consulta='';$('#q').value='';renderCitas();});
let aCancelar=null;const dlg=$('#dlg');
function confirmarCancel(c){aCancelar=c;$('#dlg-t').textContent='¿Cancelar tu cita?';$('#dlg-m').textContent=c.servicioNombre+' · '+fechaLarga(c.fecha)+' · '+horaAmPm(c.hora)+'. Este horario quedará libre para otro paciente.';if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');}
$('#dlg-no').addEventListener('click',()=>dlg.close());
$('#dlg-si').addEventListener('click',async()=>{dlg.close();if(!aCancelar)return;const c=aCancelar;aCancelar=null;store.citas=store.citas.map(x=>x.codigo===c.codigo?{...x,estado:'cancelada'}:x);renderCitas();await saveMine();await marcarOcupado(c.fecha,c.odontologo,c.hora,false);toast('Cita '+c.codigo+' cancelada.');});

/* ---------- Panel del consultorio (solo editores/propietario) ---------- */
function renderPanel(){
 const q=limpiar($('#pq').value).toLowerCase();
 const filas=store.todas.filter(c=>!q||[c.nombre,c.documento,c.codigo].some(v=>String(v).toLowerCase().includes(q))).sort((a,b)=>(a.fecha+a.hora.padStart(5,'0')).localeCompare(b.fecha+b.hora.padStart(5,'0')));
 $('#panel-body').replaceChildren(...filas.map(c=>h('tr',{},h('td',{'data-l':'Fecha',text:c.fecha}),h('td',{'data-l':'Hora',text:c.hora}),h('td',{'data-l':'Paciente',text:c.nombre}),h('td',{'data-l':'Documento',text:c.documento}),h('td',{'data-l':'Servicio',text:c.servicioNombre}),h('td',{'data-l':'Odontólogo',text:c.odontologoNombre}),h('td',{'data-l':'Código',text:c.codigo}),h('td',{'data-l':'Estado'},h('span',{class:'estado '+c.estado,text:c.estado})),
  h('td',{'data-l':''},c.estado==='programada'?h('button',{class:'btn ghost sm',onclick:()=>marcarAtendida(c)},'Marcar atendida'):''))));
 $('#panel-empty').textContent=filas.length?filas.length+' cita(s).':'No hay citas registradas todavía.';
}
$('#pq').addEventListener('input',renderPanel);
async function marcarAtendida(c){const ref=store.db.doc('agenda/'+c._uid);try{const s=await ref.get();if(!s.exists)return;const b=s.data();await ref.set({...b,citas:(b.citas||[]).map(x=>x.codigo===c.codigo?{...x,estado:'atendida'}:x)});toast('Cita '+c.codigo+' marcada como atendida.');}catch(e){toast('No tienes permiso para modificar esta cita.');}}

/* ---------- Nosotros y contacto ---------- */
$('#valores').replaceChildren(...[['heart','Trato humano','Escuchamos y explicamos cada paso del tratamiento.'],['shield','Bioseguridad','Protocolos de esterilización en cada consulta.'],['spark','Tecnología','Agenda en línea y consulta de citas desde el celular.']].map(([i,t,d])=>h('div',{class:'card rv'},h('div',{class:'icbox'},icon(i,'#0A1A33',26)),h('h3',{text:t,style:'margin:16px 0 6px'}),h('p',{class:'muted',text:d}))));
$('#equipo').replaceChildren(...ODONTOLOGOS.map(d=>h('div',{class:'card rv',style:'padding:0;overflow:hidden'},h('div',{class:'media',style:'aspect-ratio:4/5;background:#E9ECF1'},pic(d.id,'Retrato de '+d.nombre+', '+d.esp,'object-position:center 20%')),h('div',{style:'padding:18px'},h('b',{text:d.nombre,style:'font-size:18px;display:block'}),h('span',{class:'muted',text:d.esp+' · '+d.exp+' años'}),h('div',{class:'minichips'},d.serv.map(x=>h('span',{text:srvById(x).nombre})))))));
$('#contacto-info').replaceChildren(...[['pin','Dirección','Cra. 43A #1-50, El Poblado, Medellín'],['phone','Teléfono','(604) 444 0000'],['chat','WhatsApp','+57 300 000 0000'],['clock','Horario','Lun–Vie 7:00–19:00 · Sáb 8:00–13:00']].map(([i,t,d])=>h('div',{class:'card',style:'display:flex;gap:16px;align-items:center'},h('div',{class:'icbox'},icon(i,'#0A1A33',24)),h('div',{},h('b',{text:t}),h('div',{class:'muted',text:d})))));
$('#f-contacto').addEventListener('submit',e=>{e.preventDefault();let ok=true;const n=limpiar($('#c-nombre').value),m=$('#c-mail').value.trim(),t=limpiar($('#c-msg').value);
 ok&=setErr($('#c-nombre'),$('#ce-nombre'),RX.nombre.test(n)?'':'Escribe tu nombre (solo letras).');ok&=setErr($('#c-mail'),$('#ce-mail'),RX.mail.test(m)?'':'Revisa el correo.');ok&=setErr($('#c-msg'),$('#ce-msg'),t.length>=10?'':'Escribe al menos 10 caracteres.');ok&=setErr(null,$('#ce-ley'),$('#c-ley').checked?'':'Debes aceptar la política de datos.');
 if(!ok)return;const okb=$('#c-ok');okb.hidden=false;okb.textContent='Mensaje validado. En este prototipo no se envía correo real: en producción se enviaría a un servidor seguro (HTTPS) del consultorio.';e.target.reset();});

/* =========================================================
   NUEVO EN v2: encabezado, animaciones, carrusel, FAQ, .ics
   ========================================================= */
const MOTION_OK=!matchMedia('(prefers-reduced-motion: reduce)').matches;

/* b) Encabezado que se encoge después de 80 px de scroll (el botón pasa de contorno a relleno vía CSS) */
(function(){const hd=$('#site-header');let tick=false;
 const upd=()=>{hd.classList.toggle('scrolled',window.scrollY>80);tick=false;};
 window.addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});upd();})();

/* Barra fija inferior en celular: el body recibe padding-bottom igual a su alto para no tapar contenido */
function ajustarBarra(){const mb=$('#mbar');const visible=mb&&!mb.hidden&&getComputedStyle(mb).display!=='none';document.documentElement.style.setProperty('--bar-h',visible?mb.offsetHeight+'px':'0px');}
window.addEventListener('resize',ajustarBarra);

/* c) Aparición de tarjetas: IntersectionObserver + 80 ms de retraso entre hermanas de un mismo grupo */
let io=null;
function initAnim(){
 if(!MOTION_OK||!('IntersectionObserver' in window))return;          // sin animación: todo visible desde el inicio
 document.documentElement.classList.add('anim');
 io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{rootMargin:'0px 0px -8% 0px',threshold:.12});
 revelar();
}
function revelar(){
 if(!io)return;
 document.querySelectorAll('[data-stagger]').forEach(g=>{[...g.children].forEach((c,i)=>{if(c.classList.contains('rv'))c.style.setProperty('--d',(i%4)*80+'ms');});});
 document.querySelectorAll('.rv:not(.obs)').forEach(el=>{el.classList.add('obs');io.observe(el);});
}

/* d) Contador animado de la franja de confianza (una sola vez, cuando entra en pantalla) */
(function(){const els=document.querySelectorAll('[data-cuenta]');
 const pinta=(el,v)=>{el.textContent=(el.dataset.pre||'')+Math.round(v).toLocaleString('es-CO');};
 if(!MOTION_OK||!('IntersectionObserver' in window)){els.forEach(el=>pinta(el,+el.dataset.cuenta));return;}
 const ob=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;ob.unobserve(e.target);const el=e.target,fin=+el.dataset.cuenta,t0=performance.now(),dur=1600;
  const paso=t=>{const p=Math.min(1,(t-t0)/dur);pinta(el,fin*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(paso);};pinta(el,0);requestAnimationFrame(paso);}),{threshold:.6});
 els.forEach(el=>ob.observe(el));})();

/* 7. Carrusel de especialistas: scroll-snap nativo + botones; cada diapositiva con aria "n de 11" */
function renderCarrusel(){
 const tr=$('#car-track');
 tr.replaceChildren(...ODONTOLOGOS.map((d,i)=>h('article',{class:'card slide',role:'group','aria-roledescription':'diapositiva','aria-label':(i+1)+' de '+ODONTOLOGOS.length+': '+d.nombre},
  h('div',{class:'media'},pic(d.id,'Retrato de '+d.nombre+', '+d.esp)),
  h('div',{class:'info'},h('b',{text:d.nombre,style:'display:block;font-size:1.05rem'}),h('span',{class:'muted',style:'font-size:.9rem',text:d.esp+' · '+d.exp+' años'})))));
 const paso=()=>{const s=tr.querySelector('.slide');return s?s.getBoundingClientRect().width+20:300;};
 const upd=()=>{$('#car-prev').disabled=tr.scrollLeft<=4;$('#car-next').disabled=tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-4;};
 $('#car-prev').addEventListener('click',()=>tr.scrollBy({left:-paso(),behavior:MOTION_OK?'smooth':'auto'}));
 $('#car-next').addEventListener('click',()=>tr.scrollBy({left:paso(),behavior:MOTION_OK?'smooth':'auto'}));
 tr.addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true});
 tr.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();$('#car-next').click();}if(e.key==='ArrowLeft'){e.preventDefault();$('#car-prev').click();}});
 window.addEventListener('resize',upd);setTimeout(upd,50);
}

/* 9. Preguntas frecuentes: acordeón accesible (botón con aria-expanded + región con aria-labelledby) */
const FAQ=[
 ['¿Cómo agendo una cita?','Pulsa "Agendar cita", elige el servicio, el especialista, la fecha y la hora, y completa tus datos. Recibes un código de reserva al instante.'],
 ['¿Puedo cancelar o cambiar mi cita?','Sí. En "Mis citas" buscas tu cita con el código o tu documento y la cancelas; el horario queda libre. Luego puedes agendar una nueva.'],
 ['¿Qué medios de pago reciben?','Efectivo, tarjetas débito y crédito y transferencia. El valor final se confirma en la valoración.'],
 ['¿Atienden niños?','Sí. Nuestras odontopediatras atienden desde la primera infancia, con un ambiente pensado para que los niños estén tranquilos.'],
 ['¿Mis datos están seguros?','Solo pedimos lo necesario para la cita, validamos cada campo y tratamos tus datos según la Ley 1581 de 2012. Nunca se muestran a otros pacientes.']];
function renderFaq(){
 $('#faq').replaceChildren(...FAQ.map(([q,a],i)=>{const qid='faq-q'+i,aid='faq-a'+i;
  const btn=h('button',{class:'faq-q',id:qid,type:'button','aria-expanded':'false','aria-controls':aid},h('span',{text:q}),h('span',{class:'pm'},icon('plus','#0A1A33',18)));
  const ans=h('div',{class:'faq-a',id:aid,role:'region','aria-labelledby':qid,hidden:true},h('p',{text:a}));
  btn.addEventListener('click',()=>{const o=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!o));ans.hidden=o;});
  return h('div',{class:'faq-item'},h('h3',{},btn),ans);}));
}

/* Confirmación: "Añadir al calendario" genera un archivo .ics (estándar iCalendar, RFC 5545) */
function icsEsc(t){return String(t).replace(/\\/g,'\\\\').replace(/;/g,'\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n');}
function icsFecha(fecha,hora,minExtra){ // Medellín = UTC-5 todo el año (sin horario de verano)
 const[y,m,d]=fecha.split('-').map(Number),[H,M]=hora.split(':').map(Number);
 const t=new Date(Date.UTC(y,m-1,d,H+5,M+(minExtra||0)));return t.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');}
async function descargarIcs(){
 const c=agenda.ultima;if(!c)return;const s=srvById(c.servicio);
 const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Sonrisa Plena//Agenda//ES','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT',
  'UID:'+c.codigo+'@sonrisaplena.co','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,''),
  'DTSTART:'+icsFecha(c.fecha,c.hora),'DTEND:'+icsFecha(c.fecha,c.hora,s?s.dur:45),
  'SUMMARY:'+icsEsc('Cita '+c.servicioNombre+' · Sonrisa Plena'),
  'DESCRIPTION:'+icsEsc('Código: '+c.codigo+' · Especialista: '+c.odontologoNombre+'. Llega 10 minutos antes.'),
  'LOCATION:'+icsEsc('Cra. 43A #1-50, El Poblado, Medellín'),
  'BEGIN:VALARM','TRIGGER:-PT2H','ACTION:DISPLAY','DESCRIPTION:Recordatorio de tu cita','END:VALARM','END:VEVENT','END:VCALENDAR'].join('\r\n');
 const nombre='cita-'+c.codigo+'.ics';
 try{ // dentro de claude.ai se usa la capacidad "downloads"; en un servidor normal, un enlace de descarga
  const dl=window.claude&&window.claude.use?await window.claude.use('downloads'):null;
  if(dl){await dl.save({filename:nombre,data:ics,mimeType:'text/calendar'});return;}
 }catch(e){ if(e&&/declin|cancel|reject/i.test(String(e.code||e.message)))return; }
 const url=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));
 const a=h('a',{href:url,download:nombre});document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
 toast('Descargamos '+nombre+': ábrelo para añadir la cita a tu calendario.');
}


/* Encabezados animados por tema: cada página interna recibe íconos acordes a su contenido */
const TEMAS={
 servicios:[['tooth','flotar'],['spark','girar'],['tooth','flotar'],['spark','pulso'],['tooth','flotar'],['tooth','flotar']],
 agendar:[['cal','flotar'],['clock','girar'],['cal','flotar'],['clock','flotar'],['check','pulso'],['cal','flotar']],
 citas:[['check','latir'],['cal','flotar'],['check','pulso'],['cal','flotar'],['clock','flotar'],['check','latir']],
 nosotros:[['heart','latir'],['shield','flotar'],['tooth','flotar'],['heart','latir'],['shield','pulso'],['heart','flotar']],
 contacto:[['chat','flotar'],['phone','latir'],['pin','flotar'],['chat','pulso'],['pin','latir'],['chat','flotar']]};
const HX_POS=[[60,14,64],[74,58,40],[86,10,34],[68,70,28],[93,44,52],[52,66,24]];   // [left %, top %, tamaño px]
const HX_DUR={flotar:9,latir:2.4,girar:16,pulso:4};
function decorarEncabezados(){
 document.querySelectorAll('.hdr[data-tema]').forEach(hd=>{
  if(hd.querySelector('.hdr-fx'))return;const fx=h('div',{class:'hdr-fx','aria-hidden':'true'});
  (TEMAS[hd.dataset.tema]||[]).forEach(([k,an],i)=>{const[x,y,s]=HX_POS[i];
   const sv=document.createElementNS(SVGNS,'svg');sv.setAttribute('viewBox','0 0 24 24');
   const relleno=k==='tooth'||k==='heart';const p=document.createElementNS(SVGNS,'path');p.setAttribute('d',ICONS[k]);
   p.setAttribute('fill',relleno?'currentColor':'none');p.setAttribute('stroke','currentColor');p.setAttribute('stroke-width',relleno?'0':'1.8');p.setAttribute('stroke-linecap','round');p.setAttribute('stroke-linejoin','round');sv.appendChild(p);
   sv.style.cssText='left:'+x+'%;top:'+y+'%;width:'+s+'px;height:'+s+'px;animation-name:hx-'+an+';animation-duration:'+(HX_DUR[an]+i*.6)+'s;animation-delay:-'+(i*1.3)+'s'+(an==='girar'?';animation-timing-function:linear':'');
   fx.appendChild(sv);});
  hd.prepend(fx);});
}

/* Modo oscuro: botón en el encabezado; se recuerda la elección (si el navegador lo permite) y,
   si el usuario no ha elegido, se sigue la preferencia del sistema operativo */
(function(){const btn=$('#tema'),root=document.documentElement,mq=matchMedia('(prefers-color-scheme: dark)');
 const pinta=t=>{root.setAttribute('data-theme',t);const osc=t==='dark';btn.setAttribute('aria-pressed',String(osc));btn.setAttribute('aria-label',osc?'Activar modo claro':'Activar modo oscuro');btn.title=osc?'Modo claro':'Modo oscuro';
  const mc=document.querySelector('meta[name=theme-color]');if(mc)mc.setAttribute('content',osc?'#060E1C':'#0A1A33');};
 let guardado=null;try{guardado=localStorage.getItem('sp-tema');}catch(e){}
 pinta(root.getAttribute('data-theme')||(mq.matches?'dark':'light'));
 btn.addEventListener('click',()=>{const t=root.getAttribute('data-theme')==='dark'?'light':'dark';pinta(t);try{localStorage.setItem('sp-tema',t);}catch(e){}});
 mq.addEventListener&&mq.addEventListener('change',e=>{let g=null;try{g=localStorage.getItem('sp-tema');}catch(_){}if(!g)pinta(e.matches?'dark':'light');});})();
/* ---------- Arranque ---------- */
document.querySelectorAll('img[data-img]').forEach(i=>{i.src=imgSrc(i.dataset.img);});
initAnim();decorarEncabezados();paintIcons();renderCarrusel();renderFaq();renderServicios();initAgenda();refreshSlots();renderCitas();refreshStorageNotes();irPaso(1);route();
initDb();

ajustarBarra();
