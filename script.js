/* =====================================================
   JENZYA — UNIFIED JAVASCRIPT  v2.0
   Cleaned · Optimized · Production-Ready
   ===================================================== */
'use strict';

/* ─── Page Detection ──────────────────────────────── */
const PAGE      = document.body.dataset.page || 'men';
const WA_NUMBER = '918278333010';

/* ─── Clean Image Filenames ───────────────────────── */
const IMG = {
  kxPro   : 'jenzya-kx-pro.png',
  air720  : 'jenzya-air-720.png',
  zoom    : 'jenzya-zoom-turbo.png',
  novaMuse : '1.png',
  lunaPulse: '2.png',
  formal1 : 'jenzya-noir-luxe-oxford.png',
  formal2 : 'jenzya-midnight-croc-captoe.png',
  formal3 : 'jenzya-burgundy-slip-on.png',
  formal4 : 'jenzya-royal-brogue.png',
  formal5 : 'jenzya-tan-executive.png',
  formal6 : 'jenzya-croc-prestige.png',
  formal7 : 'jenzya-elite-croc-oxford.png',
  formal8 : 'jenzya-monarch-monk.png',
  // Details
  air720_d1 : 'jenzya-air-720-detail-1.png',
  // Fallbacks to existing asset (detail-2/-3 files are not present in project)
  air720_d2 : 'jenzya-air-720-detail-1.png',
  air720_d3 : 'jenzya-air-720-detail-1.png',
  zoom_d1   : 'jenzya-zoom-turbo-detail-1.png',
  zoom_d2   : 'jenzya-zoom-turbo-detail-2.png',
  zoom_d3   : 'jenzya-zoom-turbo-detail-3.png',
  zoom_d4   : 'jenzya-zoom-turbo-detail-4.png',
};

/* =====================================================
   DATA: HERO SLIDES — MEN'S PAGE
   ===================================================== */
const HERO_SLIDES = [
  { label:"Men's Shoe", title:"New Jenzya <br/>KX Pro",       desc:"The KX Pro celebrates legendary comfort with bold design lines and precision cushioning for the modern athlete.",          img:IMG.kxPro,  alt:"Jenzya KX Pro — Men's Performance Shoe",   tagSub:"AIR JENZYA", tagMain:"X SERIES",    bgText:"AIR<br/>JENZYA", pIndex:0 },
  { label:"Men's Shoe", title:"New Jenzya <br/>Air 720",      desc:"360-degree air cushioning makes every landing feel effortless. Premium suede meets elite performance design.",           img:IMG.air720, alt:"Jenzya Air 720 — Men's Premium Sneaker",   tagSub:"AIR JENZYA", tagMain:"720 SERIES",  bgText:"AIR<br/>720",    pIndex:1 },
  { label:"Men's Shoe", title:"Jenzya <br/>Zoom Turbo",       desc:"Speed is everything. Carbon-fibre propulsion and max energy return for the athlete who refuses to slow down.",           img:IMG.zoom,   alt:"Jenzya Zoom Turbo — Men's Speed Shoe",      tagSub:"JENZYA",     tagMain:"ZOOM TURBO", bgText:"ZOOM<br/>TURBO", pIndex:2 },
  { label:"Women's Shoe", title:"Jenzya <br/>Nova Muse",      desc:"Clean silhouette with confident street energy. Built for style-first comfort that moves all day.",                       img:IMG.novaMuse, alt:"Jenzya Nova Muse — Women's Lifestyle Shoe", tagSub:"JENZYA", tagMain:"NOVA MUSE", bgText:"NOVA<br/>MUSE", pIndex:11 },
  { label:"Women's Shoe", title:"Jenzya <br/>Luna Pulse",     desc:"Feather-light feel with a bold profile. Designed for fast city days and standout nights.",                                  img:IMG.lunaPulse, alt:"Jenzya Luna Pulse — Women's Lifestyle Shoe", tagSub:"JENZYA", tagMain:"LUNA PULSE", bgText:"LUNA<br/>PULSE", pIndex:12 },
];

/* =====================================================
   DATA: HERO SLIDES — WOMEN'S PAGE
   ===================================================== */
const W_SLIDES = [
  { label:"Women's Collection", title:"New Jenzya <br/><span>Air Bloom</span> Elite", desc:"Designed for the woman who moves with intention — light, bold, and undeniably her own.", img:IMG.air720, alt:"Jenzya Air Bloom Elite — Women's Shoe", tagSub:"JENZYA WOMEN", tagMain:"BLOOM SERIES", bgText:"AIR<br/>BLOOM" },
  { label:"Women's Collection", title:"Jenzya <br/><span>Bloom</span> Knit",          desc:"Soft knit construction with adaptive stretch zones. All-day comfort meets street-ready style.", img:IMG.zoom, alt:"Jenzya Bloom Knit — Women's Shoe", tagSub:"JENZYA WOMEN", tagMain:"KNIT SERIES", bgText:"BLOOM<br/>KNIT" },
  { label:"Women's Collection", title:"Jenzya <br/><span>React</span> Grace",         desc:"React foam cushioning in a silhouette built for grace. From the track to the street — effortlessly versatile.", img:IMG.kxPro, alt:"Jenzya React Grace — Women's Shoe", tagSub:"JENZYA WOMEN", tagMain:"REACT SERIES", bgText:"REACT<br/>GRACE" },
  { label:"Women's Collection", title:"Jenzya <br/><span>Nova</span> Muse",           desc:"A fashion-forward everyday pair crafted for soft comfort, premium vibe, and all-day motion.", img:IMG.novaMuse, alt:"Jenzya Nova Muse — Women's Shoe", tagSub:"JENZYA WOMEN", tagMain:"NOVA SERIES", bgText:"NOVA<br/>MUSE" },
  { label:"Women's Collection", title:"Jenzya <br/><span>Luna</span> Pulse",          desc:"Lightweight support with modern contouring so every step feels smooth, stable, and stylish.", img:IMG.lunaPulse, alt:"Jenzya Luna Pulse — Women's Shoe", tagSub:"JENZYA WOMEN", tagMain:"LUNA SERIES", bgText:"LUNA<br/>PULSE" },
];

/* =====================================================
   DATA: PRODUCTS — COLLECTION PAGE
   ===================================================== */
const PRODUCTS = [
  {
    id:1, name:'Jenzya KX Pro', category:"Men's Shoe", colorway:'Triple Black / Gold Pulse', style:'JNZ-KX-001',
    price:1499, originalPrice:null, rating:4.8, reviewCount:128,
    images:[IMG.kxPro, IMG.kxPro, IMG.kxPro, IMG.kxPro, IMG.kxPro], detailImage:IMG.kxPro,
    sizes:[{uk:'6',inStock:true},{uk:'7',inStock:true},{uk:'7.5',inStock:true},{uk:'8',inStock:true},{uk:'8.5',inStock:false},{uk:'9',inStock:true},{uk:'9.5',inStock:true},{uk:'10',inStock:true},{uk:'10.5',inStock:false},{uk:'11',inStock:true}],
    description:'The KX Pro is built for those who refuse to slow down. A precision-engineered midsole delivers explosive energy return with every step, while the seamless knit upper wraps your foot in adaptive comfort. This is the shoe that defines the Jenzya DNA.',
    features:['Proprietary React midsole foam for max energy return','Seamless knit upper with dynamic stretch zones','Reinforced heel cup for secure, lockdown fit','Non-slip outsole with multi-directional traction pattern','Lightweight — weighs under 280g per shoe'],
    reviews:[
      {author:'Rohan M.',   rating:5, date:'March 2026',    verified:true,  text:"Hands down the most comfortable shoes I've worn. The React foam is incredible — feels like walking on clouds."},
      {author:'Arjun S.',   rating:5, date:'February 2026', verified:true,  text:"Super stylish and unreal quality for this price. The triple black colorway goes with everything."},
      {author:'Vijay K.',   rating:4, date:'February 2026', verified:false, text:"Great shoe, runs true to size. Grip on wet surfaces could be better, but for gym use it's perfect."},
      {author:'Priya T.',   rating:5, date:'January 2026',  verified:true,  text:"Bought for my husband — he absolutely loves it. Great build quality and fast delivery."},
      {author:'Karan B.',   rating:5, date:'January 2026',  verified:true,  text:"My third pair of Jenzyaas. The KX Pro is the best one yet. Noticeably lighter than the previous model."}
    ]
  },
  {
    id:2, name:'Air Jenzya 720', category:"Men's Shoe", colorway:'Chalk White / Royal Cobalt', style:'JNZ-720-002',
    price:1799, originalPrice:null, rating:4.9, reviewCount:94,
    images:[IMG.air720, IMG.air720_d1, IMG.air720_d2, IMG.air720_d3], detailImage:IMG.air720,
    sizes:[{uk:'6',inStock:true},{uk:'7',inStock:true},{uk:'7.5',inStock:false},{uk:'8',inStock:true},{uk:'8.5',inStock:true},{uk:'9',inStock:true},{uk:'9.5',inStock:false},{uk:'10',inStock:true},{uk:'10.5',inStock:true},{uk:'11',inStock:false}],
    description:"The Air 720 represents Jenzya at its most elevated. 360-degree air cushioning makes every landing feel effortless, while the premium suede and mesh upper strikes a bold silhouette that commands attention on the track or on the street.",
    features:['360° full-length air cushioning unit','Premium suede and engineered mesh upper','Padded collar with memory foam ankle lining','Herringbone rubber outsole for grip and durability','Comes with two pairs of laces — white and colour-matched'],
    reviews:[
      {author:'Amit R.',     rating:5, date:'March 2026',    verified:true,  text:"The 720s are straight fire. The cobalt blue pops so well. Air cushioning is legit — feels different from regular shoes."},
      {author:'Dev P.',      rating:5, date:'March 2026',    verified:true,  text:"Great value. Packaging was immaculate and delivery was quick. Worth every rupee."},
      {author:'Siddharth N.',rating:5, date:'February 2026', verified:true,  text:"I've tried a lot of Indian sneaker brands. Jenzya is in a different league. The 720 feels premium."},
      {author:'Raju M.',     rating:4, date:'January 2026',  verified:false, text:"Runs slightly large — suggest going half a size down. Quality is great though."},
      {author:'Neha S.',     rating:5, date:'January 2026',  verified:true,  text:"Got these as a gift — they're stunning. Very comfortable right out of the box."}
    ]
  },
  {
    id:3, name:'Jenzya Zoom Turbo', category:"Men's Shoe", colorway:'Volcanic Orange / Jet Black', style:'JNZ-ZT-003',
    price:1299, originalPrice:null, rating:4.7, reviewCount:76,
    images:[IMG.zoom, IMG.zoom_d1, IMG.zoom_d2, IMG.zoom_d3, IMG.zoom_d4], detailImage:IMG.zoom,
    sizes:[{uk:'6',inStock:true},{uk:'7',inStock:true},{uk:'7.5',inStock:true},{uk:'8',inStock:false},{uk:'8.5',inStock:true},{uk:'9',inStock:true},{uk:'9.5',inStock:true},{uk:'10',inStock:false},{uk:'10.5',inStock:true},{uk:'11',inStock:true}],
    description:'Speed is the name of the game with the Zoom Turbo. A carbon-fibre plate embedded in the midsole propels you forward with every stride, while the aggressive outsole pattern bites into any surface for instant traction.',
    features:['Carbon-fibre propulsion plate for explosive speed','High-rebound Zoom Air unit at the forefoot','Breathable mono-mesh upper for ventilation','Aggressive multi-surface outsole pattern','Reflective heel tab for low-light visibility'],
    reviews:[
      {author:'Sahil D.',  rating:5, date:'March 2026',    verified:true,  text:"Fastest shoe I've ever run in. The carbon plate is a game changer. Shaved 30 seconds off my 5K."},
      {author:'Manish P.', rating:4, date:'February 2026', verified:true,  text:"Excellent for running. Not the most comfortable for all-day casual wear, but for sport it's unbeatable."},
      {author:'Ravi T.',   rating:5, date:'January 2026',  verified:false, text:"Orange colorway is stunning in person. Lots of compliments at the gym."},
      {author:'Ankit S.',  rating:4, date:'January 2026',  verified:true,  text:"Solid shoe at this price. The grip is excellent on the track."},
      {author:'Deepak R.', rating:5, date:'December 2025', verified:true,  text:"Bought during the sale. Outstanding value. Would buy again without hesitation."}
    ]
  },
];

/* =====================================================
   DATA: FORMAL PRODUCTS — added to main PRODUCTS array below
   ===================================================== */
const FORMAL_SIZES = [
  {uk:'6',inStock:true},{uk:'7',inStock:true},{uk:'7.5',inStock:true},{uk:'8',inStock:true},
  {uk:'8.5',inStock:true},{uk:'9',inStock:true},{uk:'9.5',inStock:false},{uk:'10',inStock:true},
  {uk:'10.5',inStock:true},{uk:'11',inStock:false}
];

// Append formal products to PRODUCTS
PRODUCTS.push(
  {
    id:4, name:'Jenzya Noir Luxe Oxford', category:"Formal Shoe", colorway:'Triple Black / Gold Accent', style:'JNZ-NL-004',
    price:7999, originalPrice:null, rating:4.9, reviewCount:62,
    images:[IMG.formal1, IMG.formal1, IMG.formal1], detailImage:IMG.formal1,
    sizes:FORMAL_SIZES,
    description:'The Noir Luxe Oxford is the pinnacle of Jenzya formal craftsmanship. Crafted from premium full-grain leather with a hand-polished finish, this shoe commands presence in every boardroom and banquet. The triple-black silhouette with gold accent detailing makes it unmistakably Jenzya.',
    features:['Premium full-grain leather upper with hand-polished finish','Gold-tone eyelets and heel branding','Cushioned leather insole for all-day comfort','Genuine rubber outsole with leather heel block','Comes in a signature Jenzya dust bag and box'],
    reviews:[
      {author:'Rahul A.',  rating:5, date:'March 2026',    verified:true,  text:"Wore these to a wedding — everyone asked where I got them. Absolutely stunning."},
      {author:'Vikram S.', rating:5, date:'February 2026', verified:true,  text:"Premium quality at a great price. The leather feels expensive and the fit is perfect."},
      {author:'Nitin P.',  rating:4, date:'January 2026',  verified:true,  text:"Excellent formal shoe. Goes with everything black. Delivery was fast too."},
    ]
  },
  {
    id:5, name:'Jenzya Midnight Croc Cap-Toe', category:"Formal Shoe", colorway:'Midnight Black / Silver Cap', style:'JNZ-MC-005',
    price:7999, originalPrice:null, rating:4.8, reviewCount:47,
    images:[IMG.formal2, IMG.formal2, IMG.formal2], detailImage:IMG.formal2,
    sizes:FORMAL_SIZES,
    description:'The Midnight Croc Cap-Toe blends a bold crocodile-embossed texture with the timeless elegance of a cap-toe silhouette. The silver toe cap adds a modern edge, making this shoe a statement piece for the contemporary gentleman who refuses to blend in.',
    features:['Crocodile-embossed premium leather upper','Silver-tone cap-toe detailing','Memory foam padded insole for extended wear','Anti-slip rubber outsole','Structured toe box for polished silhouette'],
    reviews:[
      {author:'Aakash M.',  rating:5, date:'March 2026',    verified:true,  text:"The croc texture is stunning in person. Got so many compliments at office."},
      {author:'Suresh D.',  rating:5, date:'February 2026', verified:true,  text:"Bold design that still looks professional. Love the silver cap detail."},
      {author:'Rajiv G.',   rating:4, date:'January 2026',  verified:false, text:"Very good shoe, runs slightly narrow so size up if you have wide feet."},
    ]
  },
  {
    id:6, name:'Jenzya Burgundy Elite Slip-On', category:"Formal Shoe", colorway:'Deep Burgundy / Gold Keeper', style:'JNZ-BE-006',
    price:7999, originalPrice:null, rating:4.7, reviewCount:38,
    images:[IMG.formal3, IMG.formal3, IMG.formal3], detailImage:IMG.formal3,
    sizes:FORMAL_SIZES,
    description:'The Burgundy Elite Slip-On redefines effortless sophistication. A rich deep-burgundy suede upper sits atop a sleek silhouette with a gold loafer keeper — perfect for business dinners, events, or wherever you want to walk in with confidence and no lace-up delay.',
    features:['Deep burgundy suede upper with soft finish','Gold-tone loafer keeper with Jenzya branding','Slip-on design with elastic side gussets','Leather-lined interior for breathability','Stacked leather heel with rubber tip'],
    reviews:[
      {author:'Tarun R.',   rating:5, date:'March 2026',    verified:true,  text:"The burgundy colour is gorgeous — deep, rich, and very premium looking."},
      {author:'Harish N.',  rating:4, date:'February 2026', verified:true,  text:"Very comfortable slip-on. The suede quality is top notch for the price."},
      {author:'Rajan V.',   rating:5, date:'January 2026',  verified:true,  text:"Perfect for parties and dinners. Comfort is great even after 5–6 hours."},
    ]
  },
  {
    id:7, name:'Jenzya Royal Brogue Heritage', category:"Formal Shoe", colorway:'Tan Brown / Cognac Welt', style:'JNZ-RB-007',
    price:7999, originalPrice:null, rating:4.8, reviewCount:55,
    images:[IMG.formal4, IMG.formal4, IMG.formal4], detailImage:IMG.formal4,
    sizes:FORMAL_SIZES,
    description:'The Royal Brogue Heritage is a tribute to classic broguing done with a modern Jenzya touch. Hand-perforated medallion details on the toe and wing-tip edges sit beautifully on a rich tan leather, creating a shoe that works from casual Fridays all the way to formal events.',
    features:['Hand-perforated brogue detailing on toe and wing-tip','Full-grain tan leather with natural grain texture','Goodyear welt-inspired construction for durability','Cork-cushioned footbed moulded to foot shape','Leather and rubber combination outsole'],
    reviews:[
      {author:'Anand K.',   rating:5, date:'March 2026',    verified:true,  text:"The brogue detail is immaculate. Looks like a shoe worth twice the price."},
      {author:'Dev S.',     rating:5, date:'February 2026', verified:true,  text:"Excellent craftsmanship. Wears in beautifully after a few uses."},
      {author:'Sanjay M.',  rating:4, date:'January 2026',  verified:true,  text:"Great tan brogue at this price point. The fit is roomy and comfortable."},
    ]
  },
  {
    id:8, name:'Jenzya Tan Executive Classic', category:"Formal Shoe", colorway:'Caramel Tan / Dark Brown Welt', style:'JNZ-TE-008',
    price:7999, originalPrice:null, rating:4.7, reviewCount:41,
    images:[IMG.formal5, IMG.formal5, IMG.formal5], detailImage:IMG.formal5,
    sizes:FORMAL_SIZES,
    description:'The Tan Executive Classic is the workhorse of the Jenzya formal line — a polished, clean silhouette built for the professional who means business every single day. The caramel tan leather deepens with every polish, developing a unique patina that becomes yours alone.',
    features:['Full-grain caramel tan leather with tight grain','Clean, unadorned Oxford silhouette','Cushioned insole with arch support','Dark brown contrast welt stitching','Durable rubber and leather outsole'],
    reviews:[
      {author:'Pradeep R.',  rating:5, date:'March 2026',    verified:true,  text:"My go-to office shoe now. Comfortable, sharp, and gets better with every wear."},
      {author:'Manish T.',   rating:4, date:'February 2026', verified:true,  text:"Classic look that never goes out of style. Very well built shoe."},
      {author:'Sunil P.',    rating:5, date:'January 2026',  verified:true,  text:"Bought for office and formal events. Perfect for both. Highly recommended."},
    ]
  },
  {
    id:9, name:'Jenzya Croc Texture Prestige', category:"Formal Shoe", colorway:'Deep Black / Gold Sole Edge', style:'JNZ-CP-009',
    price:7999, originalPrice:null, rating:4.9, reviewCount:33,
    images:[IMG.formal6, IMG.formal6, IMG.formal6], detailImage:IMG.formal6,
    sizes:FORMAL_SIZES,
    description:'The Croc Texture Prestige is pure power — a bold all-over crocodile-embossed leather upper in deep black with a signature gold sole edge. This is the shoe that enters the room before you do. Reserved for those moments when you need to make an unforgettable impression.',
    features:['All-over crocodile-embossed leather upper','Signature gold-painted sole edge','Sleek square-toe silhouette for modern look','Plush velvet-lined interior','Non-slip rubber outsole with tread pattern'],
    reviews:[
      {author:'Gaurav M.',  rating:5, date:'March 2026',    verified:true,  text:"This is THE shoe for power dressing. Absolutely loved the gold sole edge detail."},
      {author:'Kunal S.',   rating:5, date:'February 2026', verified:true,  text:"Statement piece. Wore to a client dinner — left a strong impression."},
      {author:'Ravi D.',    rating:5, date:'January 2026',  verified:true,  text:"Quality is unreal for this price. The croc texture feels very premium."},
    ]
  },
  {
    id:10, name:'Jenzya Elite Croc Oxford', category:"Formal Shoe", colorway:'Jet Black / Chrome Eyelets', style:'JNZ-EC-010',
    price:7999, originalPrice:null, rating:4.8, reviewCount:29,
    images:[IMG.formal7, IMG.formal7, IMG.formal7], detailImage:IMG.formal7,
    sizes:FORMAL_SIZES,
    description:'The Elite Croc Oxford marries formal structure with reptilian texture in a balanced, boardroom-ready silhouette. Chrome eyelets catch the light perfectly while the tight croc-embossed leather upper gives this classic shape a fresh, contemporary attitude.',
    features:['Fine-grain croc-embossed leather upper','Chrome-tone eyelets and heel counter','Structured Oxford toe box','Full leather lining for breathability and comfort','Rubber heel block with leather cap'],
    reviews:[
      {author:'Aman R.',    rating:5, date:'March 2026',    verified:true,  text:"Sleek, clean, and very well made. The chrome eyelets are a nice touch."},
      {author:'Nakul B.',   rating:4, date:'February 2026', verified:true,  text:"Good formal Oxford. Quality is better than I expected at this price."},
      {author:'Vivek G.',   rating:5, date:'January 2026',  verified:true,  text:"Perfect for formal meetings. Comfortable right out of the box."},
    ]
  },
  {
    id:11, name:'Jenzya Monarch Double Monk', category:"Formal Shoe", colorway:'Rich Black / Gold Buckles', style:'JNZ-MM-011',
    price:7999, originalPrice:null, rating:4.9, reviewCount:51,
    images:[IMG.formal8, IMG.formal8, IMG.formal8], detailImage:IMG.formal8,
    sizes:FORMAL_SIZES,
    description:'The Monarch Double Monk is the crown jewel of the Jenzya formal collection. Twin gold buckle straps sit across a smooth, polished leather vamp — no laces, no fuss, just pure authority. The double monk silhouette is timeless, versatile, and unmistakably luxurious.',
    features:['Twin gold-tone buckle monk strap closure','Highly polished smooth leather upper','Almond-shaped toe for elegant proportions','Memory foam insole with arch support','Stacked leather heel with rubber tip for grip'],
    reviews:[
      {author:'Aryan K.',   rating:5, date:'March 2026',    verified:true,  text:"Double monk straps look stunning. These are my most complimented shoes ever."},
      {author:'Deven S.',   rating:5, date:'February 2026', verified:true,  text:"The gold buckles are premium quality. No tarnishing even after months of use."},
      {author:'Rohit M.',   rating:5, date:'January 2026',  verified:true,  text:"Worth every rupee. The comfort and style make this my favourite formal shoe."},
    ]
  },
  {
    id:12, name:'Jenzya Nova Muse', category:"Women's Shoe", colorway:'Pearl White / Rose Gold', style:'JNZ-NM-012',
    price:3999, originalPrice:null, rating:4.8, reviewCount:22,
    images:[IMG.novaMuse, IMG.novaMuse, IMG.novaMuse], detailImage:IMG.novaMuse,
    sizes:[{uk:'4',inStock:true},{uk:'5',inStock:true},{uk:'6',inStock:true},{uk:'7',inStock:true},{uk:'8',inStock:true},{uk:'9',inStock:false}],
    description:'Nova Muse is made for women who want premium comfort with an elevated look. The sleek shape, soft cushioning, and clean finish make it an instant everyday favourite.',
    features:['Lightweight upper with breathable inner mesh','Responsive comfort foam for all-day wear','Slip-resistant outsole for city grip','Padded collar for secure and soft fit','Versatile profile for casual and semi-sport looks'],
    reviews:[
      {author:'Megha R.',  rating:5, date:'April 2026', verified:true,  text:'Stylish and very comfortable. Perfect for long shopping days.'},
      {author:'Sana K.',   rating:5, date:'April 2026', verified:true,  text:'Looks premium in person. Cushioning is soft and stable.'},
      {author:'Ritika J.', rating:4, date:'April 2026', verified:false, text:'Great quality and fit. Slightly snug initially but settles well.'},
    ]
  },
  {
    id:13, name:'Jenzya Luna Pulse', category:"Women's Shoe", colorway:'Matte Black / Lilac Glow', style:'JNZ-LP-013',
    price:3999, originalPrice:null, rating:4.9, reviewCount:19,
    images:[IMG.lunaPulse, IMG.lunaPulse, IMG.lunaPulse], detailImage:IMG.lunaPulse,
    sizes:[{uk:'4',inStock:true},{uk:'5',inStock:true},{uk:'6',inStock:true},{uk:'7',inStock:true},{uk:'8',inStock:false},{uk:'9',inStock:true}],
    description:'Luna Pulse blends a bold street-ready attitude with feather-light comfort. Designed to keep pace from morning rush to evening plans without missing style.',
    features:['Feather-light construction with support frame','Shock-absorbing midsole for smoother landings','Durable rubber pods for traction','Soft-touch lining with moisture control','Statement design for standout everyday wear'],
    reviews:[
      {author:'Ananya D.', rating:5, date:'April 2026', verified:true,  text:'Love the design and comfort balance. Super easy to style.'},
      {author:'Pooja M.',  rating:5, date:'April 2026', verified:true,  text:'Very light pair and great grip. Worth the price.'},
      {author:'Nisha V.',  rating:4, date:'April 2026', verified:false, text:'Looks amazing and feels secure. Happy with this purchase.'},
    ]
  }
);

/* =====================================================
   CART
   ===================================================== */
let cart = [];
const CART_STORAGE_KEY = 'jenzya_cart_v1';

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (_) {
    // Silent fallback when storage is unavailable.
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return;
    cart = parsed.filter(item =>
      item &&
      typeof item.name === 'string' &&
      typeof item.price === 'number' &&
      typeof item.qty === 'number' &&
      item.qty > 0
    );
  } catch (_) {
    cart = [];
  }
}

function addToCart(name, price, qty = 1) {
  const safeQty = Number.isFinite(qty) ? Math.max(1, Math.floor(qty)) : 1;
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty += safeQty;
  else cart.push({ name, price, qty: safeQty });
  updateCartUI();
  saveCart();
  showToast(safeQty > 1 ? `${safeQty} × ${name} added to cart!` : `${name} added to cart!`);
  if (PAGE !== 'collection') openCart();
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartUI();
  saveCart();
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(name);
  else {
    updateCartUI();
    saveCart();
  }
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  if (countEl) countEl.textContent = count;
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
  const cartItemsEl = document.getElementById('cartItems');
  if (!cartItemsEl) return;
  if (cart.length === 0) {
    const emptyColor = PAGE === 'women' ? '#FFADC8' : '#ccc';
    cartItemsEl.innerHTML = `<div class="cart-empty"><svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="${emptyColor}" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><p>Your cart is empty</p></div>`;
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty('${item.name}',-1)" aria-label="Decrease">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.name}',1)" aria-label="Increase">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.name}')" aria-label="Remove">✕</button>
    </div>`).join('');
}

function openCart()  { document.getElementById('cartSidebar')?.classList.add('open');    document.getElementById('cartOverlay')?.classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeCart() { document.getElementById('cartSidebar')?.classList.remove('open'); document.getElementById('cartOverlay')?.classList.remove('open'); document.body.style.overflow = ''; }

/* =====================================================
   WHATSAPP
   ===================================================== */
function checkoutViaWhatsApp() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  const lines   = cart.map(i => `• ${encodeURIComponent(i.name)} × ${i.qty} = ₹${(i.price * i.qty).toLocaleString('en-IN')}`).join('%0A');
  const total   = cart.reduce((s, i) => s + i.price * i.qty, 0).toLocaleString('en-IN');
  const section = PAGE === 'women' ? "Women's Collection" : "Men's Collection";
  const msg     = `Hello Jenzya! 👟%0A%0A*${section} Order:*%0A%0A${lines}%0A%0A*Total: ₹${total}*%0A%0APlease confirm my order. Thank you!`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

function buyFormalViaWhatsApp(productName, price) {
  const formatted = Number(price).toLocaleString('en-IN');
  const msg = `Hello Jenzya! 👔%0A%0AI would like to order:%0A%0A*${encodeURIComponent(productName)}*%0APrice: ₹${formatted}%0ACollection: Royal Formal Collection%0A%0APlease confirm availability. Thank you!`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

/* =====================================================
   TOAST
   ===================================================== */
let toastTimer = null;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* =====================================================
   NAVBAR SCROLL
   ===================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
}

/* =====================================================
   HAMBURGER MENU
   ===================================================== */
function initHamburger() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;
  let menuOpen = false;

  function toggleMenu(force) {
    menuOpen = force !== undefined ? force : !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    const [s0, s1, s2] = hamburger.querySelectorAll('span');
    if (menuOpen) {
      s0.style.transform = 'rotate(45deg) translate(5px,5px)';
      s1.style.opacity   = '0';
      s2.style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      [s0, s1, s2].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }

  hamburger.addEventListener('click', () => toggleMenu());
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuOpen) toggleMenu(false); });
}

/* =====================================================
   SEARCH OVERLAY
   ===================================================== */
function initSearch() {
  const searchBtn     = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose   = document.getElementById('searchClose');
  const searchInput   = document.getElementById('searchInput');
  if (!searchBtn) return;
  const closeSearch = () => { searchOverlay?.classList.remove('open'); if (searchInput) searchInput.value = ''; };
  searchBtn.addEventListener('click', () => { searchOverlay?.classList.add('open'); setTimeout(() => searchInput?.focus(), 200); });
  searchClose?.addEventListener('click', closeSearch);
  searchOverlay?.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeCart(); } });
}

/* =====================================================
   CART WIRING
   ===================================================== */
function initCart() {
  loadCart();
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  updateCartUI();
}

/* =====================================================
   BACK TO TOP BUTTON
   ===================================================== */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  const onScroll = () => {
    const shouldShow = window.scrollY > 420;
    btn.classList.toggle('show', shouldShow);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =====================================================
   SCROLL REVEAL
   ===================================================== */
function setupScrollReveal() {
  if (PAGE === 'men') {
    document.querySelectorAll('.section-title, .product-card, .trend-card, .footer-col, .footer-brand')
      .forEach((el, i) => { el.classList.add('scroll-reveal'); el.style.transitionDelay = `${(i % 4) * 0.08}s`; });
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.scroll-reveal, .sr').forEach(el => obs.observe(el));
  setTimeout(() => document.querySelectorAll('.scroll-reveal:not(.visible),.sr:not(.visible)').forEach(el => el.classList.add('visible')), 1500);
}

/* =====================================================
   PAGE TRANSITIONS
   ===================================================== */
function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.id = 'page-transition-overlay';
  document.body.appendChild(overlay);

  document.querySelectorAll('img:not([loading]):not(.hero-shoe-img)').forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') ||
        href.startsWith('http') || href.includes('wa.me') || href.includes('maps.google') || link.target === '_blank') return;
    e.preventDefault();
    overlay.classList.add('out');
    setTimeout(() => { window.location.href = href; }, 280);
  });
}

/* =====================================================
   MEN — HERO SLIDESHOW
   ===================================================== */
let heroSlideIndex = 0;
let heroAutoTimer  = null;

function switchHeroSlide(newIndex) {
  heroSlideIndex = ((newIndex % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length;
  const s = HERO_SLIDES[heroSlideIndex];
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === heroSlideIndex));

  const shoeImg  = document.querySelector('.hero-shoe-img');
  const heroLbl  = document.querySelector('.hero-label');
  const heroTtl  = document.querySelector('.hero-title');
  const heroDesc = document.querySelector('.hero-desc');
  const heroBtn  = document.querySelector('.hero-content .btn-primary');
  const bgTxt    = document.querySelector('.hero-bg-text');
  const tagSub   = document.querySelector('.tag-sub');
  const tagMain  = document.querySelector('.tag-main');
  if (!shoeImg) return;

  shoeImg.style.transition = 'opacity .25s ease,transform .28s ease';
  shoeImg.style.opacity    = '0';
  shoeImg.style.transform  = 'translateX(-55px) rotate(-10deg) scale(.88)';
  [heroLbl, heroTtl, heroDesc].forEach(el => { if (el) { el.style.transition = 'opacity .22s ease,transform .22s ease'; el.style.opacity = '0'; el.style.transform = 'translateY(12px)'; } });

  setTimeout(() => {
    shoeImg.src = s.img; shoeImg.alt = s.alt;
    shoeImg.style.cssText = 'opacity:0;transform:translateX(60px) rotate(-2deg) scale(.9)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      shoeImg.style.cssText = 'transition:opacity .55s ease,transform .65s cubic-bezier(.34,1.56,.64,1);opacity:1;transform:translateX(0) rotate(-5deg) scale(1)';
    }));
    setTimeout(() => { shoeImg.style.cssText = ''; }, 800);
    if (heroLbl)  heroLbl.textContent  = s.label;
    if (heroTtl)  heroTtl.innerHTML    = s.title;
    if (heroDesc) heroDesc.textContent = s.desc;
    if (heroBtn)  heroBtn.onclick      = () => { window.location.href = `collection.html?p=${s.pIndex}`; };
    if (bgTxt)    bgTxt.innerHTML      = s.bgText;
    if (tagSub)   tagSub.textContent   = s.tagSub;
    if (tagMain)  tagMain.textContent  = s.tagMain;
    [heroLbl, heroTtl, heroDesc].forEach(el => { if (el) { el.style.cssText = 'transition:opacity .42s ease .08s,transform .42s ease .08s;opacity:1;transform:translateY(0)'; } });
    setTimeout(() => { [heroLbl, heroTtl, heroDesc].forEach(el => { if (el) el.style.cssText = ''; }); }, 600);
  }, 270);
}

function startHeroAuto() { clearInterval(heroAutoTimer); heroAutoTimer = setInterval(() => switchHeroSlide(heroSlideIndex + 1), 3500); }

/* =====================================================
   MEN — TOP PICKS SLIDER
   Supports: arrows · mouse drag · touch swipe · auto-slide
   ===================================================== */
function initMenPicksSlider() {
  const track       = document.getElementById('picksTrack');
  const prevBtn     = document.getElementById('prevBtn');
  const nextBtn     = document.getElementById('nextBtn');
  const progressBar = document.getElementById('progressBar');
  if (!track) return;

  const GAP        = 24;
  const CARD_W     = 280;
  const STEP       = CARD_W + GAP;
  let   current    = 0;
  const totalCards = track.querySelectorAll('.product-card').length;
  const visible    = () => Math.max(1, Math.floor((track.parentElement.offsetWidth + GAP) / STEP));
  const maxSlide   = () => Math.max(0, totalCards - visible());

  function slideTo(idx, animate = true) {
    current = Math.max(0, Math.min(idx, maxSlide()));
    if (!animate) track.style.transition = 'none';
    track.style.transform = `translateX(-${current * STEP}px)`;
    if (!animate) requestAnimationFrame(() => { track.style.transition = ''; });
    if (progressBar) {
      const pct = maxSlide() === 0 ? 100 : (current / maxSlide()) * 100;
      progressBar.style.width = `${Math.max(20, pct)}%`;
    }
  }

  // Arrow buttons
  nextBtn?.addEventListener('click', () => { slideTo(current + 1); resetAuto(); });
  prevBtn?.addEventListener('click', () => { slideTo(current - 1); resetAuto(); });

  // Auto-slide
  let autoTimer = setInterval(() => slideTo(current >= maxSlide() ? 0 : current + 1), 4000);
  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => slideTo(current >= maxSlide() ? 0 : current + 1), 4000); }

  // Resize
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => slideTo(0, false), 250); }, { passive: true });

  // ── Mouse Drag ──
  let isDragging = false, dragStartX = 0, dragStartSlide = 0;

  track.style.cursor = 'grab';
  track.addEventListener('mousedown', e => {
    isDragging = true; dragStartX = e.clientX; dragStartSlide = current;
    track.style.transition = 'none'; track.style.cursor = 'grabbing';
    resetAuto();
  });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const delta = dragStartX - e.clientX;
    const raw   = Math.max(0, Math.min(dragStartSlide * STEP + delta, maxSlide() * STEP));
    track.style.transform = `translateX(-${raw}px)`;
  });
  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false; track.style.transition = ''; track.style.cursor = 'grab';
    const delta = e.clientX - dragStartX;
    slideTo(Math.abs(delta) > 60 ? (delta < 0 ? dragStartSlide + 1 : dragStartSlide - 1) : dragStartSlide);
  });

  // ── Touch Swipe ──
  let touchStartX = 0, touchSlide = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX; touchSlide = current;
    track.style.transition = 'none'; resetAuto();
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    const delta = touchStartX - e.touches[0].clientX;
    const raw   = Math.max(0, Math.min(touchSlide * STEP + delta, maxSlide() * STEP));
    track.style.transform = `translateX(-${raw}px)`;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    track.style.transition = '';
    const delta = e.changedTouches[0].clientX - touchStartX;
    slideTo(Math.abs(delta) > 50 ? (delta < 0 ? touchSlide + 1 : touchSlide - 1) : touchSlide);
  }, { passive: true });

  // Card click toast
  track.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-add, .btn-wa-formal')) return;
      if (Math.abs(e.clientX - dragStartX) > 8) return;
      const n = card.dataset.name;
      if (n) showToast(`Viewing: ${n}`);
    });
  });

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* =====================================================
   WOMEN — HERO SLIDESHOW
   ===================================================== */
let wSlideIndex = 0;
let wAutoTimer  = null;

function switchWSlide(newIndex) {
  wSlideIndex = ((newIndex % W_SLIDES.length) + W_SLIDES.length) % W_SLIDES.length;
  const s = W_SLIDES[wSlideIndex];
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === wSlideIndex));

  const shoeImg  = document.querySelector('.hero-shoe-img');
  const heroLbl  = document.querySelector('.hero-label');
  const heroTtl  = document.querySelector('.hero-title');
  const heroDesc = document.querySelector('.hero-desc');
  const bgTxt    = document.querySelector('.hero-bg-text');
  const tagSub   = document.querySelector('.tag-sub');
  const tagMain  = document.querySelector('.tag-main');
  if (!shoeImg) return;

  shoeImg.style.cssText = 'transition:opacity .25s ease,transform .28s ease;opacity:0;transform:translateX(-55px) rotate(-10deg) scale(.88)';
  [heroLbl, heroTtl, heroDesc].forEach(el => { if (el) { el.style.transition = 'opacity .22s ease,transform .22s ease'; el.style.opacity = '0'; el.style.transform = 'translateY(12px)'; } });

  setTimeout(() => {
    shoeImg.src = s.img; shoeImg.alt = s.alt;
    shoeImg.style.cssText = 'opacity:0;transform:translateX(60px) rotate(-2deg) scale(.9)';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      shoeImg.style.cssText = 'transition:opacity .55s ease,transform .65s cubic-bezier(.34,1.56,.64,1);opacity:1;transform:translateX(0) rotate(-5deg) scale(1)';
    }));
    setTimeout(() => { shoeImg.style.cssText = ''; }, 800);
    if (heroLbl)  heroLbl.textContent  = s.label;
    if (heroTtl)  heroTtl.innerHTML    = s.title;
    if (heroDesc) heroDesc.textContent = s.desc;
    if (bgTxt)    bgTxt.innerHTML      = s.bgText;
    if (tagSub)   tagSub.textContent   = s.tagSub;
    if (tagMain)  tagMain.textContent  = s.tagMain;
    [heroLbl, heroTtl, heroDesc].forEach(el => { if (el) el.style.cssText = 'transition:opacity .42s ease .08s,transform .42s ease .08s;opacity:1;transform:translateY(0)'; });
    setTimeout(() => { [heroLbl, heroTtl, heroDesc].forEach(el => { if (el) el.style.cssText = ''; }); }, 600);
  }, 320);
}

function startWHeroAuto() { clearInterval(wAutoTimer); wAutoTimer = setInterval(() => switchWSlide(wSlideIndex + 1), 4000); }

/* =====================================================
   WOMEN — PICKS SLIDER (with touch swipe)
   ===================================================== */
function initWomenPicksSlider() {
  const track = document.getElementById('picksTrack');
  const prev  = document.getElementById('prevBtn');
  const next  = document.getElementById('nextBtn');
  const bar   = document.getElementById('progressBar');
  if (!track) return;

  let offset = 0;
  const visibleCount = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 4;
  const maxOffset    = () => Math.max(0, track.children.length - visibleCount());

  function updateSlider() {
    offset = Math.min(offset, maxOffset());
    const cv = visibleCount();
    const cw = (track.parentElement.offsetWidth - 24 * (cv - 1)) / cv;
    track.style.transform = `translateX(-${offset * (cw + 24)}px)`;
    if (bar) bar.style.width = `${maxOffset() > 0 ? (offset / maxOffset()) * 50 + 50 : 100}%`;
  }

  prev?.addEventListener('click', () => { if (offset > 0) { offset--; updateSlider(); } });
  next?.addEventListener('click', () => { if (offset < maxOffset()) { offset++; updateSlider(); } });

  // ── Mouse Drag ──
  let isDragging = false, dragStartX = 0, dragOffset = 0;

  track.style.cursor = 'grab';
  track.addEventListener('mousedown', e => {
    isDragging = true; dragStartX = e.clientX; dragOffset = offset;
    track.style.transition = 'none'; track.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const cv = visibleCount();
    const cw = (track.parentElement.offsetWidth - 24 * (cv - 1)) / cv;
    const delta = dragStartX - e.clientX;
    const raw = Math.max(0, Math.min(dragOffset * (cw + 24) + delta, maxOffset() * (cw + 24)));
    track.style.transform = `translateX(-${raw}px)`;
  });
  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false; track.style.transition = ''; track.style.cursor = 'grab';
    const delta = e.clientX - dragStartX;
    if (Math.abs(delta) > 60) {
      offset = delta < 0 ? Math.min(offset + 1, maxOffset()) : Math.max(offset - 1, 0);
    }
    updateSlider();
  });

  // ── Touch Swipe (real-time) ──
  let tStart = 0, tOffset = 0;
  track.addEventListener('touchstart', e => {
    tStart = e.touches[0].clientX; tOffset = offset;
    track.style.transition = 'none';
  }, { passive: true });
  track.addEventListener('touchmove', e => {
    const cv = visibleCount();
    const cw = (track.parentElement.offsetWidth - 24 * (cv - 1)) / cv;
    const delta = tStart - e.touches[0].clientX;
    const raw = Math.max(0, Math.min(tOffset * (cw + 24) + delta, maxOffset() * (cw + 24)));
    track.style.transform = `translateX(-${raw}px)`;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    track.style.transition = '';
    const delta = tStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      offset = delta > 0 ? Math.min(tOffset + 1, maxOffset()) : Math.max(tOffset - 1, 0);
    }
    updateSlider();
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(updateSlider, 200); }, { passive: true });
  updateSlider();
}

/* =====================================================
   COLLECTION — PRODUCT RENDERING
   ===================================================== */
let currentProductIndex = 0;
let selectedSize        = null;
let qtyVal              = 1;
let isWishlisted        = false;

function renderProduct(index) {
  currentProductIndex = index; selectedSize = null; qtyVal = 1; isWishlisted = false;
  const p    = PRODUCTS[index];
  const hero = document.getElementById('productHero');
  if (!hero) return;
  hero.classList.add('switching');
  setTimeout(() => {
    setMainImage(p.images[0]);
    renderThumbs(p.images);
    document.getElementById('pName').textContent            = p.name;
    document.getElementById('pCategory').textContent        = p.category;
    document.getElementById('pColorway').textContent        = p.colorway;
    document.getElementById('pStyle').textContent           = `Style #: ${p.style}`;
    document.getElementById('pPrice').textContent           = `₹${p.price.toLocaleString('en-IN')}`;
    document.getElementById('pDetailName').textContent      = p.name;
    document.getElementById('pDetailColorway').textContent  = `Shown: ${p.colorway}`;
    document.getElementById('pDetailText').textContent      = p.description;
    document.getElementById('pDetailImg').src               = p.detailImage;
    document.getElementById('pDetailImg').alt               = `${p.name} — Detail View`;
    document.getElementById('qtyDisplay').textContent       = 1;
    document.getElementById('productCounter').textContent   = `${index + 1} / ${PRODUCTS.length}`;
    const origEl  = document.getElementById('pPriceOriginal');
    const badgeEl = document.getElementById('pSaleBadge');
    if (p.originalPrice) {
      origEl.textContent  = `₹${p.originalPrice.toLocaleString('en-IN')}`;
      badgeEl.textContent = `${Math.round((1 - p.price / p.originalPrice) * 100)}% OFF`;
      origEl.style.display = badgeEl.style.display = '';
    } else {
      origEl.style.display = badgeEl.style.display = 'none';
    }
    renderStars('pStars', p.rating);
    document.getElementById('pRatingCount').innerHTML = `<a href="#reviews">${p.reviewCount} Reviews</a>`;
    document.getElementById('pFeatures').innerHTML    = p.features.map(f => `<div class="detail-feature">${f}</div>`).join('');
    renderSizes(p.sizes);
    renderSimilar();
    hero.classList.remove('switching');
  }, 300);
}

function renderThumbs(images) {
  const row = document.getElementById('thumbnailRow');
  if (!row) return;
  row.innerHTML = images.map((src, i) =>
    `<button class="thumb-btn${i === 0 ? ' active' : ''}" onclick="selectThumb(${i},'${src}')" aria-label="View image ${i + 1}"><img src="${src}" alt="Thumbnail ${i + 1}" loading="lazy" decoding="async"/></button>`
  ).join('');
}

function selectThumb(index, src) {
  document.querySelectorAll('.thumb-btn').forEach((b, i) => b.classList.toggle('active', i === index));
  setMainImage(src);
}

function setMainImage(src) {
  const img = document.getElementById('mainProductImg');
  if (!img) return;
  img.style.opacity = '0'; img.style.transform = 'scale(.96)';
  setTimeout(() => {
    img.src = src;
    img.style.transition = 'opacity .4s ease,transform .4s cubic-bezier(.34,1.56,.64,1)';
    img.style.opacity = '1'; img.style.transform = 'scale(1)';
  }, 200);
}

function renderStars(containerId, rating) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = Array.from({ length: 5 }, (_, i) =>
    `<span class="star"${rating < i + 1 ? ' style="color:var(--gray-mid)"' : ''}>★</span>`
  ).join('');
}

function renderSizes(sizes) {
  const grid = document.getElementById('sizeGrid');
  if (!grid) return;
  grid.innerHTML = sizes.map(s =>
    `<button class="size-btn${s.inStock ? '' : ' out-of-stock'}" onclick="${s.inStock ? `selectSize('${s.uk}',this)` : ''}" ${s.inStock ? '' : 'disabled aria-disabled="true"'} title="UK ${s.uk}${s.inStock ? '' : ' — Out of stock'}">${s.uk}</button>`
  ).join('');
}

function selectSize(size, btn) {
  selectedSize = size;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function prevProduct() { renderProduct((currentProductIndex - 1 + PRODUCTS.length) % PRODUCTS.length); }
function nextProduct() { renderProduct((currentProductIndex + 1) % PRODUCTS.length); }

function changeQtyVal(delta) {
  qtyVal = Math.max(1, Math.min(10, qtyVal + delta));
  const d = document.getElementById('qtyDisplay');
  if (d) d.textContent = qtyVal;
}

function handleAddToCart() {
  const p = PRODUCTS[currentProductIndex];
  if (!selectedSize) {
    showToast('Please select a size first!');
    const sg = document.getElementById('sizeGrid');
    if (sg) { sg.style.animation = 'shake .4s ease'; setTimeout(() => sg.style.animation = '', 400); }
    return;
  }
  addToCart(`${p.name} (UK ${selectedSize})`, p.price, qtyVal);
}

function toggleWishlist() {
  isWishlisted = !isWishlisted;
  document.getElementById('wishlistBtn')?.classList.toggle('liked', isWishlisted);
  showToast(isWishlisted ? '❤️ Added to wishlist!' : 'Removed from wishlist');
}

/* =====================================================
   CARD HOVER OVERLAY — Men & Women pages
   Injects "VIEW DETAILS" overlay on clickable card images
   ===================================================== */
(function injectCardHoverStyles() {
  const s = document.createElement('style');
  s.textContent = `
    .card-img-wrap[onclick] { position:relative; overflow:hidden; }
    .card-img-wrap[onclick]::after {
      content:'VIEW DETAILS →';
      position:absolute; inset:0;
      background:rgba(0,0,0,.55);
      color:#FFB800;
      font-family:'Barlow Condensed',sans-serif;
      font-size:13px; font-weight:700; letter-spacing:.15em;
      display:flex; align-items:center; justify-content:center;
      opacity:0; transition:opacity .22s ease;
      pointer-events:none;
    }
    .card-img-wrap[onclick]:hover::after { opacity:1; }
    .card-name[onclick]:hover { text-decoration:underline; text-underline-offset:3px; color:var(--accent,#FFB800); }
  `;
  document.head.appendChild(s);
})();

function renderSimilar() {
  const grid = document.getElementById('similarGrid');
  if (!grid) return;

  const allOtherProducts = PRODUCTS.filter((_, i) => i !== currentProductIndex);
  const cards = allOtherProducts.map(p => {
    const idx    = PRODUCTS.indexOf(p);
    const isFormal = p.category === 'Formal Shoe';
    const badge  = isFormal
      ? `<div class="card-badge" style="background:#1a1a1a;color:#FFB800;font-size:9px;letter-spacing:.1em">FORMAL</div>`
      : '';
    const stars  = '<span class="s-star">★</span>'.repeat(5);
    return `<div class="product-card${isFormal ? ' formal-picks-card' : ''}" onclick="selectSimilarProduct(${idx})" style="cursor:pointer">
      <div class="card-img-wrap">${badge}<img src="${p.images[0]}" alt="${p.name}" class="card-shoe-img" loading="lazy" decoding="async"/></div>
      <div class="card-info">
        <div class="similar-stars">${stars}</div>
        <p class="card-name">${p.name}</p>
        <p class="card-price">₹${p.price.toLocaleString('en-IN')}</p>
        <button class="btn-add" onclick="event.stopPropagation();selectSimilarProduct(${idx})">View Product</button>
      </div>
    </div>`;
  });
  grid.innerHTML = cards.join('');
}

function selectSimilarProduct(index) { window.scrollTo({ top: 0, behavior: 'smooth' }); setTimeout(() => renderProduct(index), 400); }
function viewFormalProduct() { const s = document.getElementById('formalCollection'); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function openSizeGuide()  { document.getElementById('sizeModal')?.classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeSizeGuide() { document.getElementById('sizeModal')?.classList.remove('open'); document.body.style.overflow = ''; }

function orderViaWhatsApp() {
  const p = PRODUCTS[currentProductIndex];
  if (!selectedSize) {
    showToast('Please select a size first!');
    const sg = document.getElementById('sizeGrid');
    if (sg) { sg.style.animation = 'shake .4s ease'; setTimeout(() => sg.style.animation = '', 400); }
    return;
  }
  const total = (p.price * qtyVal).toLocaleString('en-IN');
  const msg   = `Hello Jenzya! 👟%0A%0AI'd like to place an order:%0A%0A*Product:* ${encodeURIComponent(p.name)}%0A*Size:* UK ${selectedSize}%0A*Quantity:* ${qtyVal}%0A*Total:* ₹${total}%0A%0APlease confirm and arrange delivery. Thank you!`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

/* =====================================================
   CONTACT — STORE HOURS
   ===================================================== */
function initStoreHours() {
  const now       = new Date();
  const day       = now.getDay();
  const mins      = now.getHours() * 60 + now.getMinutes();
  const DAY_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const SCHEDULE  = [
    { days:[1,2,3,4,5], label:'Mon – Fri', open:10*60, close:20*60 },
    { days:[6],          label:'Saturday',  open:10*60, close:21*60 },
    { days:[0],          label:'Sunday',    open:11*60, close:18*60 },
  ];
  const todayEntry = SCHEDULE.find(s => s.days.includes(day));
  if (!todayEntry) return;
  const isOpen = mins >= todayEntry.open && mins < todayEntry.close;
  const statusHTML = isOpen
    ? '<span class="hours-status hours-open">● Open Now</span>'
    : '<span class="hours-status hours-closed">● Closed</span>';
  document.querySelectorAll('.hours-table tr[data-days]').forEach(row => {
    const rowDays = row.getAttribute('data-days').split(',').map(Number);
    row.classList.remove('today');
    if (rowDays.includes(day)) {
      row.classList.add('today');
      const cells = row.querySelectorAll('td');
      if (cells[0]) cells[0].innerHTML = `${todayEntry.label} &nbsp;<span class="today-tag">${DAY_SHORT[day]} · Today ✦</span>`;
      if (cells[1]) cells[1].innerHTML = statusHTML;
    }
  });
}

/* =====================================================
   CONTACT — FORM HANDLER
   ===================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fname   = document.getElementById('fname')?.value   || '';
    const lname   = document.getElementById('lname')?.value   || '';
    const email   = document.getElementById('email')?.value   || '';
    const phone   = document.getElementById('phone')?.value   || 'Not provided';
    const subject = document.getElementById('subject')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const mSubject = encodeURIComponent(`[Jenzya] ${subject} — ${fname} ${lname}`);
    const mBody    = encodeURIComponent(`Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${subject}\n\nMessage:\n${message}`);
    window.location.href = `mailto:jenzya4@gmail.com?subject=${mSubject}&body=${mBody}`;
    form.style.display = 'none';
    document.getElementById('formSuccess')?.classList.add('show');
  });
}

/* =====================================================
   INIT — DOMContentLoaded
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initNavbar();
  initHamburger();
  initSearch();
  initCart();
  initBackToTop();

  if (PAGE === 'men') {
    document.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.addEventListener('click', () => { clearInterval(heroAutoTimer); switchHeroSlide(idx); startHeroAuto(); });
    });
    startHeroAuto();
    const heroShoe = document.getElementById('heroShoe');
    if (heroShoe) {
      heroShoe.style.cssText = 'opacity:0;transform:translateX(60px) rotate(-4deg);transition:opacity .9s ease .5s,transform .9s cubic-bezier(.4,0,.2,1) .5s';
      setTimeout(() => { heroShoe.style.opacity = '1'; heroShoe.style.transform = 'translateX(0) rotate(-4deg)'; }, 100);
    }
    initMenPicksSlider();
    setupScrollReveal();

  } else if (PAGE === 'women') {
    document.querySelectorAll('.dot').forEach((dot, i) => dot.addEventListener('click', () => { switchWSlide(i); startWHeroAuto(); }));
    startWHeroAuto();
    initWomenPicksSlider();
    document.querySelector('.btn-checkout')?.addEventListener('click', checkoutViaWhatsApp);
    setTimeout(() => document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('visible')), 150);
    setupScrollReveal();

  } else if (PAGE === 'collection') {
    const params = new URLSearchParams(window.location.search);
    const pIdx   = Math.max(0, Math.min(parseInt(params.get('p')) || 0, PRODUCTS.length - 1));
    renderProduct(pIdx);
    renderSimilar();
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = '@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}';
    document.head.appendChild(shakeStyle);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeSizeGuide(); closeCart(); }
      if (['ArrowLeft','ArrowRight'].includes(e.key) && document.activeElement?.classList.contains('size-btn')) {
        const btns = [...document.querySelectorAll('.size-btn:not(.out-of-stock)')];
        const idx  = btns.indexOf(document.activeElement);
        if (e.key === 'ArrowRight' && btns[idx + 1]) btns[idx + 1].focus();
        if (e.key === 'ArrowLeft'  && btns[idx - 1]) btns[idx - 1].focus();
      }
    });
    setupScrollReveal();

  } else {
    initContactForm();
    initStoreHours();
    setupScrollReveal();
  }

  console.log('%cJENZYA 👟', 'font-size:22px;font-weight:bold;color:#FFB800;background:#111;padding:8px 16px;border-radius:4px;');
});