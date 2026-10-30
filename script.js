(() => {
  'use strict';
  const items = Array.isArray(window.COSTA_MENU) ? window.COSTA_MENU : [];
  const $ = (selector) => document.querySelector(selector);
  const categories = [
    ['all','✦','كل المنيو','All items'],
    ['new','✧','جديد كوستا','New arrivals'],
    ['hot','☕','قهوة ساخنة','Hot coffee'],
    ['iced','❄','قهوة مثلجة','Iced coffee'],
    ['espresso','◒','إسبريسو','Espresso'],
    ['chocolate','▣','شوكولاتة','Chocolate'],
    ['refresh','◉','ليمونادة وشاي مثلج','Lemonades & iced tea'],
    ['frappe','✺','فرابيه','Frappes'],
    ['matcha','❦','ماتشا وفواكه','Matcha & coolers'],
    ['juice','◍','عصائر ومشروبات','Juices & drinks'],
    ['tea','♨','شاي','Tea'],
    ['sandwich','▰','ساندوتشات','Sandwiches'],
    ['salads','✿','سلطات','Salads'],
    ['bakery','♧','مخبوزات','Bakery'],
    ['dessert','♡','حلويات','Desserts'],
    ['shop','▤','كوستا بالمنزل','Costa at home'],
  ];
  const T = {
    ar: {
      announcement:'Made with Heart • قهوة على مزاجك، في أي وقت',home:'الرئيسية',browse:'المنيو',newMenu:'الجديد عندنا',story:'عن كوستا',viewOnly:'منيو للعرض فقط',eyebrow:'THE COFFEE YOU LOVE',heroFirst:'كل رشفة',heroEmphasis:'ليها حكاية',heroDesc:'من أول ريحة البن لآخر رشفة، اكتشف مشروبات كوستا والساندوتشات والحلويات، وشوف أسعار كل صنف قبل ما تختار من الفرع.',explore:'اكتشف المنيو',discover:'شوف الجديد',madeNote:'تفاصيل صغيرة تصنع طعم مختلف',feat1:'قهوة على أصولها',feat1d:'من الإسبريسو لأحلى لاتيه',feat2:'انتعاش كل يوم',feat2d:'آيس كوفي وليمونادة وعصائر',feat3:'متعمل بحب',feat3d:'ساندوتشات وحلويات للمزاج',whatsNew:'JUST LANDED',newTitle:'جديد يستاهل التجربة',newDesc:'نكهات جديدة فيها مفاجأة من أول رشفة',viewAllNew:'شوف كل الجديد',menuKicker:'MADE FOR YOUR MOMENTS',menuTitle:'تختار إيه النهارده؟',menuDesc:'شوف كل الأصناف والأسعار والأحجام بسهولة، من غير طلبات أو تسجيل',nothingTitle:'ملقيناش اللي بتدور عليه',nothingDesc:'جرب تبحث باسم تاني أو اختار تصنيف مختلف',reset:'عرض كل المنيو',more:'عرض أصناف أكتر',pricesNote:'الأسعار بالجنيه المصري وفق المنيو المرفق. قد تختلف الأسعار أو يتغير التوافر حسب الفرع. المنيو للعرض فقط ولا يستقبل طلبات.',storyLine1:'القهوة مش مجرد مشروب',storyLine2:'دي لحظة بتحبها',storyDesc:'سواء بتبدأ يومك، بتقابل صحابك، أو محتاج استراحة في نص الزحمة، عند كوستا هتلاقي المشروب اللي على مزاجك.',browseAll:'مشروبات وأكلات وحلويات',browseMenu:'تصفح المنيو',footerDesc:'قهوتك المفضلة، بكل الحب. تصفح الأصناف والأسعار قبل ما تختار.',footerInfo:'منيو رقمي للعرض فقط',footerInfoDesc:'اتفرج على الأصناف والأسعار، واطلب من موظفي الفرع',noOrdering:'لا توجد طلبات أونلاين',demoNote:'المنيو الرقمي',search:'بتدور على حاجة معينة؟',sort0:'ترتيب المنيو',sort1:'الأقل سعرًا',sort2:'الأعلى سعرًا',sort3:'الاسم أ - ي',count:'صنف',from:'يبدأ من',single:'السعر',newBadge:'جديد',newFlavor:'نكهة جديدة',currency:'ج.م',taxNo:'الرقم الضريبي',hotline:'للتوصيل في القاهرة والإسكندرية',branches:'فروعنا'
    },
    en: {
      announcement:'Made with Heart • Your favorite cup, any time',home:'Home',browse:'Our menu',newMenu:'New arrivals',story:'Our story',viewOnly:'View-only menu',eyebrow:'THE COFFEE YOU LOVE',heroFirst:'Every sip',heroEmphasis:'has a story',heroDesc:'Explore Costa drinks, sandwiches and desserts, and check prices before ordering in person at the café.',explore:'Explore menu',discover:"What's new",madeNote:'Little details. Lots of love.',feat1:'Coffee made right',feat1d:'From espresso to your favorite latte',feat2:'Refresh your day',feat2d:'Iced coffee, juices and lemonades',feat3:'Made with heart',feat3d:'Sandwiches, bakes and desserts',whatsNew:'JUST LANDED',newTitle:'Fresh flavors to love',newDesc:'Something new, something delicious.',viewAllNew:'View new arrivals',menuKicker:'MADE FOR YOUR MOMENTS',menuTitle:'What are you craving?',menuDesc:'Browse items, sizes and prices. No online ordering or sign-in.',nothingTitle:'No matches found',nothingDesc:'Try another search or choose a different category.',reset:'View the full menu',more:'Load more items',pricesNote:'Prices in Egyptian pounds are based on the provided menu. Prices and availability may vary by branch. Display-only; orders are not accepted here.',storyLine1:'Coffee is more than a drink',storyLine2:"It's a moment to love",storyDesc:'Starting your day, meeting friends, or taking a break? There is always a Costa drink to match your mood.',browseAll:'Drinks, sandwiches and sweet treats',browseMenu:'Explore menu',footerDesc:'Your favorite cup, made with heart. Browse menu items and prices before your visit.',footerInfo:'Display-only digital menu',footerInfoDesc:'Browse prices here, then order from café staff.',noOrdering:'No online orders',demoNote:'Digital Menu',search:'Search the menu...',sort0:'Menu order',sort1:'Price: low to high',sort2:'Price: high to low',sort3:'Name A–Z',count:'items',from:'From',single:'Price',newBadge:'NEW',newFlavor:'NEW FLAVOR',currency:'EGP',taxNo:'Tax number',hotline:'Delivery in Cairo & Alex.',branches:'Our branches'
    }
  };
  let lang = 'ar', category = 'all', term = '', sort = 'default', limit = 16;
  const imageURL = (key) => (window.COSTA_IMAGES && window.COSTA_IMAGES[key]) || ('assets/' + key + '.webp');
  function msg(key){return T[lang][key] || key;}
  function n(v){return Number(v).toLocaleString('en-US',{maximumFractionDigits:0});}
  function safe(v){return String(v).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function minPrice(item){return Math.min(...Object.values(item.prices));}
  function name(item){return lang==='ar' ? item.ar : item.en;}
  function altName(item){return lang==='ar' ? item.en : item.ar;}
  function label(cat){const c=categories.find(c=>c[0]===cat);return c ? c[lang==='ar'?2:3] : cat;}
  function sizeLabel(code){return ({One:lang==='ar'?'قطعة':'One',S:lang==='ar'?'صغير':'Small',M:lang==='ar'?'وسط':'Medium',L:lang==='ar'?'كبير':'Large',Single:lang==='ar'?'سنجل':'Single',Double:lang==='ar'?'دبل':'Double'})[code]||code;}
  function renderCategories(){
    $('#category-tabs').innerHTML=categories.map(c=>`<button class="category-tab ${category===c[0]?'active':''}" data-category="${c[0]}" type="button" aria-pressed="${category===c[0]}"><span class="category-emoji" aria-hidden="true">${c[1]}</span><span>${safe(label(c[0]))}</span></button>`).join('');
    $('#selected-category-title').textContent=label(category);
  }
  // Folds Arabic spelling variants (أ/إ/ا، ة/ه، ى/ي، tashkeel) so "اسبريسو" finds "إسبريسو".
  function fold(v){return String(v).toLocaleLowerCase().normalize('NFKC').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ة/g,'ه').replace(/[ىئ]/g,'ي').replace(/ؤ/g,'و').replace(/[-–\/&.]/g,' ').replace(/\s+/g,' ').trim();}
  // Drops long vowels so "كابوتشينو" still matches "كابتشينو"; compared per word to avoid false hits.
  function skeletons(v){return fold(v).split(' ').map(w=>w.replace(/[اوي]/g,'')).filter(Boolean);}
  function matches(item,q){
    if(fold(item.ar+' '+item.en).includes(fold(q)))return true;
    const words=skeletons(item.ar+' '+item.en);
    const parts=skeletons(q);
    return parts.length>0 && parts.every(p=>p.length>=3 && words.some(w=>w.startsWith(p)));
  }
  function filtered(){
    let out=items.filter(i=>category==='all' || i.cat===category || i.also===category);
    if(term)out=out.filter(i=>matches(i,term));
    if(sort==='asc')out.sort((a,b)=>minPrice(a)-minPrice(b));
    if(sort==='desc')out.sort((a,b)=>minPrice(b)-minPrice(a));
    if(sort==='az')out.sort((a,b)=>name(a).localeCompare(name(b),lang==='ar'?'ar':'en'));
    return out;
  }
  function priceMarkup(item){
    const prices=Object.entries(item.prices);
    if(prices.length===1) return `<div class="price-simple"><span>${msg('single')}</span><strong>${n(prices[0][1])} <small>${msg('currency')}</small></strong></div>`;
    return `<div class="price-options" role="list" aria-label="${lang==='ar'?'الأسعار حسب الحجم':'Prices by size'}">${prices.map(([size,price])=>`<div class="price-option" role="listitem"><span class="option-size">${safe(sizeLabel(size))}</span><strong>${n(price)}</strong><small>${msg('currency')}</small></div>`).join('')}</div>`;
  }
  function icon(cat){const c=categories.find(c=>c[0]===cat);return c ? c[1] : '◒';}
  function note(item){return item.note ? `<p class="product-note">${safe(item.note[lang])}</p>` : '';}
  function card(item){
    const img=item.img?`<img loading="lazy" alt="${safe(name(item))}" src="${imageURL(item.img)}"${item.cover?' class="cover"':''}>`:`<span class="product-placeholder" aria-hidden="true">${icon(item.also||item.cat)}</span>`;
    return `<article class="product-card" data-product="${item.id}"><div class="product-image">${item.cat==='new'?`<span class="product-chip">${msg('newBadge')}</span>`:''}${img}</div><div class="product-body"><h3>${safe(name(item))}</h3><div class="product-en">${safe(altName(item))}</div>${note(item)}${priceMarkup(item)}</div></article>`;
  }
  function renderMenu(){
    renderCategories();
    const list=filtered();
    $('#results-count').textContent=`${n(list.length)} ${msg('count')}`;
    $('#menu-grid').innerHTML=list.slice(0,limit).map(card).join('');
    $('#load-more').hidden=list.length<=limit;
    $('#empty-state').hidden=list.length!==0;
  }
  function specialCard(item){
    return `<article class="special-card"><div class="special-head"><span class="special-badge">✦ &nbsp; ${msg('newFlavor')}</span><h3>${safe(name(item))}</h3><small>${safe(altName(item))}</small></div><img loading="lazy" src="${imageURL(item.img)}" alt="${safe(name(item))}"><div class="special-bottom"><span><small>${msg('from')}</small><strong>${n(minPrice(item))}<sub>${msg('currency')}</sub></strong></span><a class="round-view" href="#menu" data-new-item="${safe(item.id)}" aria-label="${safe(name(item))}">↗</a></div></article>`;
  }
  function renderSpecials(){$('#new-products').innerHTML=items.filter(i=>i.cat==='new').map(specialCard).join('');}
  function changeCategory(next){category=next;limit=16;renderMenu();}
  function translate(){
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    document.title=lang==='ar'?'Costa Coffee | المنيو الرقمي — للعرض فقط':'Costa Coffee | View-only digital menu';
    document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=msg(el.dataset.t);});
    $('#lang-toggle').innerHTML=lang==='ar'?'EN <span aria-hidden="true">⌄</span>':'ع <span aria-hidden="true">⌄</span>';
    $('#search-input').placeholder=msg('search');
    const select=$('#sort-select');
    for(let i=0;i<4;i++)select.options[i].textContent=msg('sort'+i);
    renderSpecials();renderMenu();
    try{localStorage.setItem('costa-lang',lang);}catch{}
  }
  function bind(){
    $('#category-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(b)changeCategory(b.dataset.category);});
    $('#search-input').addEventListener('input',e=>{term=e.target.value.trim();limit=16;renderMenu();});
    $('#sort-select').addEventListener('change',e=>{sort=e.target.value;limit=16;renderMenu();});
    $('#load-more').addEventListener('click',()=>{limit+=16;renderMenu();});
    $('#reset-search').addEventListener('click',()=>{term='';sort='default';$('#search-input').value='';$('#sort-select').value='default';changeCategory('all');});
    $('#view-new').addEventListener('click',()=>changeCategory('new'));
    $('#new-products').addEventListener('click',e=>{if(e.target.closest('[data-new-item]'))changeCategory('new');});
    $('#lang-toggle').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';translate();});
  }
  function init(){
    $('#year').textContent=new Date().getFullYear();
    try{const storedLang=localStorage.getItem('costa-lang');if(['ar','en'].includes(storedLang))lang=storedLang;}catch{}
    bind();translate();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
