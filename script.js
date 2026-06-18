// ─── TRANSLATIONS ─────────────────────────────────────────────────────────

const T = {
  en: {
    brand: "NOYON CASHMERE",
    tagline: "PREMIUM MONGOLIAN CASHMERE",
    wishlist: "Wishlist",
    compare: "Compare",
    recentlyViewed: "RECENTLY VIEWED",
    related: "RELATED PRODUCTS",
    addWishlist: "Add to Wishlist",
    selectColor: "SELECT COLOR",
    selectSize: "SELECT SIZE",
    priceRange: "Price Range",
    all: "All",
    men: "Men",
    women: "Women",
    accessories: "Accessories",
    material: "MATERIAL",
    season: "SEASON",
    close: "Close",
    print: "Print A4 / Export PDF",
    customerName: "Customer Name",
    customerPhone: "Phone Number",
    customerEmail: "Email Address",
    date: "Date",
    custSig: "CUSTOMER SIGNATURE",
    compSig: "COMPANY REPRESENTATIVE",
    sigLine: "Signature:",
    nameLine: "Name:",
    dateLine: "Date:",
    formTitle: "Catalog Selection Form",
    selectedProducts: "SELECTED PRODUCTS",
    pleaseSelect: "Please select color and size first",
    compareTitle: "Product Comparison",
    removeFromList: "Remove",
    noProducts: "No products found",
    noItems: "No items in wishlist",
    front: "FRONT",
    side: "SIDE",
    back: "BACK",
    model: "MODEL",
    addedOK: "Added to wishlist",
    items: "ITEMS",
    total: "TOTAL",
    zoomHint: "Move cursor to zoom",
    searchPlaceholder: "Search by name, code, color, size, material...",
    priceLabel: "PRICE RANGE",
    totalLabel: "TOTAL",
    pthCode: "CODE",
    pthName: "PRODUCT NAME",
    pthColor: "COLOR",
    pthSize: "SIZE",
    pthMaterial: "MATERIAL",
    pthPrice: "UNIT PRICE",
  },
  mn: {
    brand: "НОЁН КАШМЕР",
    tagline: "МОНГОЛЫН ШИЛДЭГ КАШМЕР",
    wishlist: "Хадгалсан бараа",
    compare: "Харьцуулах",
    recentlyViewed: "САЯХАН ҮЗСЭН",
    related: "ХОЛБООТОЙ БАРАА",
    addWishlist: "Жагсаалтад нэмэх",
    selectColor: "ӨНГӨ СОНГОХ",
    selectSize: "ХЭМЖЭЭ СОНГОХ",
    priceRange: "Үнийн хязгаар",
    all: "Бүгд",
    men: "Эрэгтэй",
    women: "Эмэгтэй",
    accessories: "Дагалдах хэрэгсэл",
    material: "МАТЕРИАЛ",
    season: "УЛИРАЛ",
    close: "Хаах",
    print: "A4 Хэвлэх / PDF Хадгалах",
    customerName: "Захиалагчийн нэр",
    customerPhone: "Утасны дугаар",
    customerEmail: "И-мэйл хаяг",
    date: "Огноо",
    custSig: "ЗАХИАЛАГЧИЙН ГАРЫН ҮСЭГx",
    compSig: "КОМПАНИЙН ТӨЛӨӨЛӨГЧ",
    sigLine: "Гарын үсэг:",
    nameLine: "Нэр:",
    dateLine: "Огноо:",
    formTitle: "Каталогийн сонголтын маягт",
    selectedProducts: "СОНГОСОН БАРААНУУД",
    pleaseSelect: "Эхлээд өнгө болон хэмжээ сонгоно уу",
    compareTitle: "Бараа харьцуулах",
    removeFromList: "Устгах",
    noProducts: "Бараа олдсонгүй",
    noItems: "Жагсаалт хоосон байна",
    front: "УРД",
    side: "ХАЖУУ",
    back: "АР",
    model: "ЗАГВАРЧИН",
    addedOK: "Жагсаалтад нэмэгдлээ",
    items: "БАРАА",
    total: "НИЙТ",
    zoomHint: "Томруулахын тулд зөөх",
    searchPlaceholder: "Нэр, код, өнгө, хэмжээ, материалаар хайх...",
    priceLabel: "ҮНИЙН ХЯЗГААР",
    totalLabel: "НИЙТ",
    pthCode: "КОД",
    pthName: "БҮТЭЭГДЭХҮҮНИЙ НЭР",
    pthColor: "ӨНГӨ",
    pthSize: "ХЭМЖЭЭ",
    pthMaterial: "МАТЕРИАЛ",
    pthPrice: "НЭГЖИЙН ҮНЭ",
  },
};

// ─── PRODUCT DATA ─────────────────────────────────────────────────────────

function u(id, w = 600, h = 750) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;
}

const PRODUCTS = [
  {
    id: "19204", code: "19204",
    nameEn: "Modern Draped Cape", nameMn: "Товчтой загварлаг нөмрөг",
    price: 593500,
    colors: ["Warm Beige"],
    sizes: ["F"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2024,
    images: {
      front: ("./images/nuur.png"), side: ("./images/nuur2.jpg"),
      back: ("./images/back.jpg"), model: ("./images/model.jpg"),
    },
  },
  {
    id: "20055", code: "20055",
    nameEn: "Pants", nameMn: "Өмд",
    price: 402700,
    colors: ["Black", "Grey", "Ivory"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "men", year: 2024,
    images: {
      front: ("./images/omd2.png"), side: ("./images/omd hajuu.jpg"),
      back: ("./images/omdback.jpg"), model: ("./images/model2.jpg"),
    },
  },
  {
    id: "25022", code: "25022",
    nameEn: "Hat", nameMn: "Малгай",
    price: 123800,
    colors: ["Sage", "Sand", "Slate"],
    sizes: ["XS", "S", "M", "L"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "accessories", year: 2025,
    images: {
      front: ("./images/malgai.png"),  model: ("./images/malgaimodel.jpg"),
    },
  },
  {
    id: "23161", code: "23161",
    nameEn: "Coat", nameMn: "Пальто",
    price: 1300000,
    colors: ["Camel", "Navy", "Forest Green"],
    sizes: ["F"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2025,
    images: {
      front: ("./images/murd.png"), side: ("./images/mhajuu.jpg"),
      back: ("./images/mar.jpg"), model: ("./images/m1.jpg"),
    },
  },
  {
    id: "nc26-005", code: "NC26-005",
    nameEn: "Merino Blend Polo", nameMn: "Поло Цамц",
    price: 225000,
    colors: ["White", "Camel", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "70% Cashmere, 30% Merino", materialMn: "70% Кашмер, 30% Мерино",
    category: "men", year: 2026,
    images: {
      front: ("./images/er0.png"),  model: ("./images/er.jpg"),
    },
  },
  {
    id: "nc24-006", code: "NC24-006",
    nameEn: "Wrap Front Cardigan", nameMn: "Боосон Кардиган",
    price: 295000,
    colors: ["Blush", "Ivory", "Camel", "Black"],
    sizes: ["XS", "S", "M", "L"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2024,
    images: {
      front: ("./images/tsamts2.png"),  model: ("./images/tsamts1.jpg"),
    },
  },
  {
    id: "nc24-007", code: "NC24-007",
    nameEn: "Fine Knit Turtleneck Dress", nameMn: "Нарийн Нэхийн Даашинз",
    price: 385000,
    colors: ["Black", "Chocolate", "Ivory"],
    sizes: ["XS", "S", "M"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "accessories", year: 2024,
    images: {
      front: ("./images/huuhed1.png"),  model: ("./images/huuhed.jpg"),
    },
  },
  {
    id: "nc25-008", code: "NC25-008",
    nameEn: "Oversized Cocoon Sweater", nameMn: "Том Бөмбөр Цамц",
    price: 320000,
    colors: ["Oatmeal", "Sage", "Dusty Rose"],
    sizes: ["XS/S", "M/L"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "men", year: 2025,
    images: {
      front: ("./images/gg.png"),  model: ("./images/nman.jpg"),
    },
  },
  {
    id: "nc26-009", code: "NC26-009",
    nameEn: "Rib Knit Midi Skirt", nameMn: "Ребийн Дунд Юбка",
    price: 275000,
    colors: ["Ivory", "Black", "Chocolate"],
    sizes: ["XS", "S", "M", "L"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "men", year: 2026,
    images: {
      front: ("./images/tseegii.png"), side: ("./images/tsh.jpg"),
      back: ("./images/tsar.jpg"), model: ("./images/ts.jpg"),
    },
  },
  {
    id: "nc26-010", code: "NC26-010",
    nameEn: "Asymmetric Draped Top", nameMn: "Тэгш бус Торгон Топ",
    price: 345000,
    colors: ["Ivory", "Blush", "Stone"],
    sizes: ["XS", "S", "M"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "accessories", year: 2026,
    images: {
      front: ("./images/bb.png"), model: ("./images/bbe.png"),
    },
  },
  {
    id: "nc24-011", code: "NC24-011",
    nameEn: "Classic Cashmere Scarf", nameMn: "Сонгодог Кашемир Бороохой",
    price: 145000,
    colors: ["Camel", "Navy", "Grey", "Ivory", "Black"],
    sizes: ["One Size"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2024,
    images: {
      front: ("./images/har3.png"), side: ("./images/har.jpg"), model: ("./images/har2.jpg"),
    },
  },
  {
    id: "nc25-012", code: "NC25-012",
    nameEn: "Ribbed Cashmere Beanie", nameMn: "Нэхийн Малгай",
    price: 95000,
    colors: ["Camel", "Black", "Grey", "Ivory"],
    sizes: ["One Size"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2025,
    images: {
      front: ("./images/tsagaan3.png"),  model: ("./images/tsagaan2.jpg"),
    },
  },
  {
    id: "nc25-013", code: "NC25-013",
    nameEn: "Fingerless Cashmere Gloves", nameMn: "Хурууны Үзүүргүй Бээлий",
    price: 115000,
    colors: ["Grey", "Black", "Camel"],
    sizes: ["S/M", "L/XL"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2025,
    images: {
      front: ("./images/2.png"),  model: ("./images/1.jpg"),
    },
  },
  {
    id: "nc26-014", code: "NC26-014",
    nameEn: "Luxury Cashmere Throw", nameMn: "Тансаг Кашмер Хөнжил",
    price: 425000,
    colors: ["Ivory", "Camel", "Charcoal"],
    sizes: ["130×180cm"],
    material: "100% Mongolian Cashmere", materialMn: "100% Монголын Кашмер",
    category: "women", year: 2026,
    images: {
      front: ("./images/xx.png"),  model: ("./images/x.jpg"),
    },
  },
];

// ─── STATE ────────────────────────────────────────────────────────────────

const state = {
  lang: "en",
  dark: false,
  year: "all",
  category: "all",
  query: "",
  priceMin: 0,
  priceMax: 150000000,
  wishlist: [],
  compareIds: [],
  recentIds: [],
  customerInfo: { name: "", phone: "", email: "" },
  activeProduct: null,
  selectedColor: "",
  selectedSize: "",
};

// ─── HELPERS ──────────────────────────────────────────────────────────────

const fmt = (p) => p.toLocaleString() + "₮";
const t = () => T[state.lang];
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

function saveStorage() {
  localStorage.setItem("nc_wl", JSON.stringify(state.wishlist));
  localStorage.setItem("nc_rv", JSON.stringify(state.recentIds));
  localStorage.setItem("nc_ci", JSON.stringify(state.customerInfo));
}

function loadStorage() {
  try {
    const wl = localStorage.getItem("nc_wl");
    if (wl) state.wishlist = JSON.parse(wl);
    const rv = localStorage.getItem("nc_rv");
    if (rv) state.recentIds = JSON.parse(rv);
    const ci = localStorage.getItem("nc_ci");
    if (ci) state.customerInfo = JSON.parse(ci);
  } catch (e) {}
}

function getName(p) {
  return state.lang === "en" ? p.nameEn : p.nameMn;
}
function getMaterial(p) {
  return state.lang === "en" ? p.material : p.materialMn;
}

// ─── FILTER ───────────────────────────────────────────────────────────────

function getFiltered() {
  return PRODUCTS.filter((p) => {
    if (state.year !== "all" && p.year !== parseInt(state.year)) return false;
    if (state.category !== "all" && p.category !== state.category) return false;
    if (p.price < state.priceMin || p.price > state.priceMax) return false;
    if (state.query) {
      const q = state.query.toLowerCase();
      const match =
        p.code.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.nameMn.toLowerCase().includes(q) ||
        p.colors.some((c) => c.toLowerCase().includes(q)) ||
        p.material.toLowerCase().includes(q) ||
        p.sizes.some((s) => s.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });
}

// ─── RENDER GRID ──────────────────────────────────────────────────────────

function renderGrid() {
  const filtered = getFiltered();
  const grid = $("product-grid");
  const noRes = $("no-results");
  const countLabel = $("count-label");
  const countQuery = $("count-query");

  countLabel.textContent = `${filtered.length} ${t().items}`;
  countQuery.textContent = state.query ? `— "${state.query}"` : "";

  if (filtered.length === 0) {
    grid.innerHTML = "";
    noRes.style.display = "block";
    $("t-no-results").textContent = t().noProducts;
    return;
  }
  noRes.style.display = "none";

  grid.innerHTML = filtered.map((p) => {
    const inWishlist = state.wishlist.some((w) => w.product.id === p.id);
    const inCompare = state.compareIds.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-image-wrap">
          <img class="card-img-front" src="${p.images.front}" alt="${getName(p)}" loading="lazy" />
          <img class="card-img-model" src="${p.images.model}" alt="${getName(p)} model" loading="lazy" />
          <div class="card-actions">
            <button class="card-action-btn compare-toggle ${inCompare ? "active" : ""}" data-id="${p.id}" title="Compare">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
            </button>
          </div>
          ${inWishlist ? `<div class="card-wl-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>` : ""}
        </div>
        <div class="card-info">
          <div class="card-code">${p.code}</div>
          <div class="card-name">${getName(p)}</div>
          <div class="card-price">${fmt(p.price)}</div>
        </div>
      </div>
    `;
  }).join("");

  // Card click
  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".compare-toggle")) return;
      const id = card.dataset.id;
      const p = PRODUCTS.find((x) => x.id === id);
      if (p) openModal(p);
    });
  });

  // Compare toggle
  grid.querySelectorAll(".compare-toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCompare(btn.dataset.id);
    });
  });
}

// ─── RECENTLY VIEWED ──────────────────────────────────────────────────────

function renderRecentlyViewed() {
  const section = $("recently-viewed");
  const strip = $("recent-strip");
  const label = $("t-recently");
  if (!label) return;
  label.textContent = t().recentlyViewed;

  const recent = PRODUCTS.filter((p) => state.recentIds.includes(p.id))
    .sort((a, b) => state.recentIds.indexOf(a.id) - state.recentIds.indexOf(b.id));

  if (recent.length === 0) {
    section.style.display = "none";
    return;
  }
  section.style.display = "block";
  strip.innerHTML = recent.map((p) => `
    <div class="recent-card" data-id="${p.id}">
      <div class="recent-img">
        <img src="${p.images.front}" alt="${getName(p)}" loading="lazy" />
      </div>
      <div class="recent-code">${p.code}</div>
      <div class="recent-name">${getName(p)}</div>
    </div>
  `).join("");

  strip.querySelectorAll(".recent-card").forEach((card) => {
    card.addEventListener("click", () => {
      const p = PRODUCTS.find((x) => x.id === card.dataset.id);
      if (p) openModal(p);
    });
  });
}

// ─── MODAL ────────────────────────────────────────────────────────────────

function openModal(product) {
  state.activeProduct = product;
  state.selectedColor = "";
  state.selectedSize = "";

  // Add to recently viewed
  state.recentIds = [product.id, ...state.recentIds.filter((id) => id !== product.id)].slice(0, 8);
  saveStorage();

  renderModalContent(product);
  $("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
  renderRecentlyViewed();
}

let currentImgKey = "front";

function renderModalContent(p) {
  currentImgKey = "front";
  const tr = t();

  $("modal-code").textContent = p.code;
  $("modal-name").textContent = getName(p);
  $("modal-price").textContent = fmt(p.price);
  $("modal-material").textContent = getMaterial(p);
  $("modal-season").textContent = `${p.category.charAt(0).toUpperCase() + p.category.slice(1)} · ${p.year}`;
  $("t-material-label").textContent = tr.material;
  $("t-season-label").textContent = tr.season;
  $("t-zoom-hint").textContent = tr.zoomHint;
  $("t-select-size").textContent = tr.selectSize;
  $("t-add-wishlist").textContent = tr.addWishlist;
  $("modal-notice").textContent = "";
  $("modal-notice").className = "modal-notice";

  // Main image
  setModalImage(p.images.front);

  // Color label
  $("modal-color-label").textContent = tr.selectColor;

  // Color pills
  const colorOpts = $("color-options");
  colorOpts.innerHTML = p.colors.map((c) => `
    <button class="option-pill" data-color="${c}">${c}</button>
  `).join("");
  colorOpts.querySelectorAll(".option-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.selectedColor = pill.dataset.color;
      colorOpts.querySelectorAll(".option-pill").forEach((x) => x.classList.remove("active"));
      pill.classList.add("active");
      $("modal-color-label").textContent = `${tr.selectColor} — ${state.selectedColor}`;
    });
  });

  // Size pills
  const sizeOpts = $("size-options");
  sizeOpts.innerHTML = p.sizes.map((s) => `
    <button class="option-pill" data-size="${s}">${s}</button>
  `).join("");
  sizeOpts.querySelectorAll(".option-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.selectedSize = pill.dataset.size;
      sizeOpts.querySelectorAll(".option-pill").forEach((x) => x.classList.remove("active"));
      pill.classList.add("active");
    });
  });

  // Thumbnails
  const thumbRow = $("thumb-row");
  const thumbKeys = Object.keys(p.images);

const thumbLabels = thumbKeys.map(key => {
  const labels = {
    front: tr.front,
    side: tr.side,
    back: tr.back,
    model: tr.model
  };

  return labels[key] || key.toUpperCase();
});
  thumbRow.innerHTML = thumbKeys.map((key, i) => `
    <div class="thumb ${key === "front" ? "active" : ""}" data-key="${key}">
      <img src="${p.images[key]}" alt="${thumbLabels[i]}" loading="lazy" />
      <div class="thumb-label">${thumbLabels[i]}</div>
    </div>
  `).join("");
  thumbRow.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbRow.querySelectorAll(".thumb").forEach((x) => x.classList.remove("active"));
      thumb.classList.add("active");
      currentImgKey = thumb.dataset.key;
      setModalImage(p.images[currentImgKey]);
    });
  });

  // Related
  const related = PRODUCTS.filter(
    (x) => x.id !== p.id && (x.category === p.category || Math.abs(x.price - p.price) < 100000)
  ).slice(0, 4);

  const relSection = $("related-section");
  if (related.length > 0) {
    relSection.style.display = "block";
    $("t-related").textContent = tr.related;
    $("related-grid").innerHTML = related.map((r) => `
      <div class="related-item" data-id="${r.id}">
        <div class="related-item-img">
          <img src="${r.images.front}" alt="${getName(r)}" loading="lazy" />
        </div>
        <div class="related-item-code">${r.code}</div>
      </div>
    `).join("");
    $("related-grid").querySelectorAll(".related-item").forEach((item) => {
      item.addEventListener("click", () => {
        const rp = PRODUCTS.find((x) => x.id === item.dataset.id);
        if (rp) openModal(rp);
      });
    });
  } else {
    relSection.style.display = "none";
  }
}

// ─── ZOOM ─────────────────────────────────────────────────────────────────

function setModalImage(src) {
  const img = $("modal-main-img");
  img.src = src;
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "50% 50%";
}

function initZoom() {
  const container = $("zoom-container");
  const img = $("modal-main-img");
  let zooming = false;

  container.addEventListener("mouseenter", () => { zooming = true; });
  container.addEventListener("mouseleave", () => {
    zooming = false;
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "50% 50%";
    img.style.transition = "transform 0.35s ease";
  });
  container.addEventListener("mousemove", (e) => {
    if (!zooming) return;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.5)";
    img.style.transition = "transform-origin 0s";
  });
}

// ─── WISHLIST ─────────────────────────────────────────────────────────────

function addToWishlist() {
  const p = state.activeProduct;
  if (!p) return;
  const tr = t();

  if (!state.selectedColor || !state.selectedSize) {
    const notice = $("modal-notice");
    notice.textContent = tr.pleaseSelect;
    notice.className = "modal-notice err";
    setTimeout(() => { notice.textContent = ""; notice.className = "modal-notice"; }, 2500);
    return;
  }

  state.wishlist.push({
    product: p,
    selectedColor: state.selectedColor,
    selectedSize: state.selectedSize,
  });
  saveStorage();

  const notice = $("modal-notice");
  notice.textContent = tr.addedOK;
  notice.className = "modal-notice ok";
  setTimeout(() => { notice.textContent = ""; notice.className = "modal-notice"; }, 2000);

  renderGrid();
  updateWishlistBadge();
  if ($("wishlist-panel").classList.contains("open")) renderWishlistPanel();
}

function removeFromWishlist(idx) {
  state.wishlist.splice(idx, 1);
  saveStorage();
  renderGrid();
  updateWishlistBadge();
  renderWishlistPanel();
}

function updateWishlistBadge() {
  const badge = $("wl-badge");
  const count = state.wishlist.length;
  if (count > 0) {
    badge.style.display = "flex";
    badge.textContent = count;
  } else {
    badge.style.display = "none";
  }
}

function renderWishlistPanel() {
  const tr = t();
  const items = $("wl-items");
  const footer = $("wl-footer");
  const panelCount = $("wl-panel-count");
  const empty = $("wl-empty");

  $("t-wl-title").textContent = tr.wishlist;
  $("t-print").textContent = tr.print;

  panelCount.textContent = state.wishlist.length > 0 ? `(${state.wishlist.length})` : "";

  if (state.wishlist.length === 0) {
    empty.style.display = "flex";
    empty.querySelector("p").textContent = tr.noItems;
    footer.style.display = "none";
    // Remove old items except empty msg
    Array.from(items.children).forEach((c) => { if (c !== empty) c.remove(); });
    return;
  }

  empty.style.display = "none";
  footer.style.display = "block";

  // Remove old wl-item elements
  Array.from(items.querySelectorAll(".wl-item")).forEach((c) => c.remove());

  state.wishlist.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = "wl-item";
    div.innerHTML = `
      <div class="wl-item-img"><img src="${item.product.images.front}" alt="${getName(item.product)}" /></div>
      <div class="wl-item-info">
        <div class="wl-item-code">${item.product.code}</div>
        <div class="wl-item-name">${getName(item.product)}</div>
        <div class="wl-item-meta">${item.selectedColor} · ${item.selectedSize}</div>
        <div class="wl-item-price">${fmt(item.product.price)}</div>
      </div>
      <button class="wl-item-remove" data-idx="${idx}">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>
    `;
    div.querySelector(".wl-item-remove").addEventListener("click", () => removeFromWishlist(idx));
    items.insertBefore(div, empty);
  });

  const total = state.wishlist.reduce((s, i) => s + i.product.price, 0);
  $("wl-total").textContent = fmt(total);
  $("wl-item-count").textContent = `${state.wishlist.length} ${tr.items}`;

  // Customer inputs
  $("cust-name").value = state.customerInfo.name;
  $("cust-phone").value = state.customerInfo.phone;
  $("cust-email").value = state.customerInfo.email;
}

function openWishlistPanel() {
  renderWishlistPanel();
  $("wishlist-panel").classList.add("open");
  $("wl-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeWishlistPanel() {
  $("wishlist-panel").classList.remove("open");
  $("wl-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// ─── COMPARE ──────────────────────────────────────────────────────────────

function toggleCompare(id) {
  if (state.compareIds.includes(id)) {
    state.compareIds = state.compareIds.filter((x) => x !== id);
  } else {
    if (state.compareIds.length >= 4) return;
    state.compareIds.push(id);
  }
  updateCompareBtn();
  renderGrid();
}

function updateCompareBtn() {
  const btn = $("compare-open-btn");
  const count = $("compare-count");
  if (state.compareIds.length > 0) {
    btn.style.display = "flex";
    count.textContent = `(${state.compareIds.length})`;
  } else {
    btn.style.display = "none";
    closeComparePanel();
  }
}

function openComparePanel() {
  renderComparePanel();
  $("compare-panel").classList.add("open");
  $("compare-overlay").classList.add("open");
}

function closeComparePanel() {
  $("compare-panel").classList.remove("open");
  $("compare-overlay").classList.remove("open");
}

function renderComparePanel() {
  const tr = t();
  $("t-compare-title").textContent = tr.compareTitle;
  const products = PRODUCTS.filter((p) => state.compareIds.includes(p.id));
  const table = $("compare-table");

  const rows = [
    { label: tr.pthPrice, val: (p) => fmt(p.price) },
    { label: tr.pthMaterial, val: (p) => getMaterial(p) },
    { label: tr.pthColor, val: (p) => p.colors.join(", ") },
    { label: tr.pthSize, val: (p) => p.sizes.join(", ") },
    { label: tr.pthCode, val: (p) => p.code },
  ];

  let html = `<thead><tr><td class="compare-row-label"></td>`;
  products.forEach((p) => {
    html += `
      <th class="compare-product-header">
        <div class="compare-product-inner">
          <div class="compare-thumb"><img src="${p.images.front}" alt="${getName(p)}" /></div>
          <div>
            <div class="compare-product-code">${p.code}</div>
            <div class="compare-product-name">${getName(p)}</div>
            <button class="compare-remove-btn" data-id="${p.id}">${tr.removeFromList}</button>
          </div>
        </div>
      </th>
    `;
  });
  html += `</tr></thead><tbody>`;

  rows.forEach(({ label, val }) => {
    html += `<tr><td class="compare-row-label">${label}</td>`;
    products.forEach((p) => {
      html += `<td>${val(p)}</td>`;
    });
    html += `</tr>`;
  });
  html += `</tbody>`;
  table.innerHTML = html;

  table.querySelectorAll(".compare-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleCompare(btn.dataset.id);
      if (state.compareIds.length === 0) {
        closeComparePanel();
      } else {
        renderComparePanel();
      }
    });
  });
}

// ─── PRINT ────────────────────────────────────────────────────────────────

function preparePrint() {
  const tr = t();
  const lang = state.lang;

  $("print-form-title").textContent = tr.formTitle.toUpperCase();
  $("pl-name").textContent = tr.customerName.toUpperCase() + ":";
  $("pl-date").textContent = tr.date.toUpperCase() + ":";
  $("pl-phone").textContent = tr.customerPhone.toUpperCase() + ":";
  $("pl-email").textContent = tr.customerEmail.toUpperCase() + ":";
  $("pl-products").textContent = tr.selectedProducts;
  $("pth-code").textContent = tr.pthCode;
  $("pth-name").textContent = tr.pthName;
  $("pth-color").textContent = tr.pthColor;
  $("pth-size").textContent = tr.pthSize;
  $("pth-material").textContent = tr.pthMaterial;
  $("pth-price").textContent = tr.pthPrice;
  $("pth-total").textContent = tr.total;
  $("ps-cust").textContent = tr.custSig;
  $("ps-comp").textContent = tr.compSig;
  $("ps-sig").textContent = tr.sigLine;
  $("ps-sig2").textContent = tr.sigLine;
  $("ps-name").textContent = tr.nameLine;
  $("ps-name2").textContent = tr.nameLine;
  $("ps-date2").textContent = tr.dateLine;
  $("ps-date3").textContent = tr.dateLine;

  $("pv-name").textContent = state.customerInfo.name;
  $("pv-phone").textContent = state.customerInfo.phone;
  $("pv-email").textContent = state.customerInfo.email;
  $("pv-date").textContent = new Date().toLocaleDateString(
    lang === "en" ? "en-US" : "mn-MN",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const tbody = $("print-tbody");
  tbody.innerHTML = state.wishlist.map((item) => {
    const name = lang === "en" ? item.product.nameEn : item.product.nameMn;
    const mat = lang === "en" ? item.product.material : item.product.materialMn;
    return `
      <tr>
        <td style="font-size:10px;color:#555">${item.product.code}</td>
        <td>${name}</td>
        <td>${item.selectedColor}</td>
        <td>${item.selectedSize}</td>
        <td style="font-size:9px;color:#555">${mat}</td>
        <td style="text-align:right">${fmt(item.product.price)}</td>
      </tr>
    `;
  }).join("");

  const total = state.wishlist.reduce((s, i) => s + i.product.price, 0);
  $("print-total-amount").textContent = fmt(total);

  const ps = $("print-section");
  ps.style.display = "block";
  window.print();
  setTimeout(() => { ps.style.display = "none"; }, 1000);
}

// ─── LANGUAGE ─────────────────────────────────────────────────────────────

function applyLanguage() {
  const tr = t();
  const isEn = state.lang === "en";

  $("lang-label").textContent = isEn ? "MN" : "EN";
  $("brand-name").textContent = tr.brand;
  $("brand-tagline").textContent = tr.tagline;
  $("t-compare").textContent = tr.compare;
  $("t-wishlist").textContent = tr.wishlist;
  $("t-year-all").textContent = tr.all;
  $("t-cat-all").textContent = tr.all;
  $("t-cat-men").textContent = tr.men;
  $("t-cat-women").textContent = tr.women;
  $("t-cat-acc").textContent = tr.accessories;
  $("search-input").placeholder = tr.searchPlaceholder;
  $("t-price-range").textContent = tr.priceRange;
  $("t-price-label").textContent = tr.priceLabel;
  $("t-no-results").textContent = tr.noProducts;
  $("t-recently").textContent = tr.recentlyViewed;
  $("t-compare-title").textContent = tr.compareTitle;
  $("cust-name").placeholder = tr.customerName;
  $("cust-phone").placeholder = tr.customerPhone;
  $("cust-email").placeholder = tr.customerEmail;
  $("t-print").textContent = tr.print;
  $("t-wl-title").textContent = tr.wishlist;

  // Update footer
  document.querySelector(".site-footer p").textContent =
    `© ${new Date().getFullYear()} NOYON CASHMERE · ULAANBAATAR, MONGOLIA`;

  renderGrid();
  renderRecentlyViewed();
  if ($("wishlist-panel").classList.contains("open")) renderWishlistPanel();
  if ($("compare-panel").classList.contains("open")) renderComparePanel();
  if (state.activeProduct) renderModalContent(state.activeProduct);
}

// ─── DARK MODE ────────────────────────────────────────────────────────────

function applyDarkMode() {
  document.body.classList.toggle("dark", state.dark);
  $("icon-moon").style.display = state.dark ? "none" : "block";
  $("icon-sun").style.display = state.dark ? "block" : "none";
}

// ─── INIT ─────────────────────────────────────────────────────────────────

function init() {
  loadStorage();
  $("footer-year").textContent = new Date().getFullYear();

  // Dark mode toggle
  $("dark-toggle").addEventListener("click", () => {
    state.dark = !state.dark;
    applyDarkMode();
  });

  // Language toggle
  $("lang-toggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "mn" : "en";
    applyLanguage();
  });

  // Year pills
  $$("[data-year]").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("[data-year]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.year = btn.dataset.year;
      renderGrid();
    });
  });

  // Category pills
  $$("[data-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("[data-cat]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.category = btn.dataset.cat;
      renderGrid();
    });
  });

  // Search
  $("search-input").addEventListener("input", (e) => {
    state.query = e.target.value;
    $("search-clear").style.display = state.query ? "block" : "none";
    renderGrid();
  });
  $("search-clear").addEventListener("click", () => {
    state.query = "";
    $("search-input").value = "";
    $("search-clear").style.display = "none";
    renderGrid();
  });

  // Price filter
  $("price-toggle").addEventListener("click", () => {
    const row = $("price-filter-row");
    const visible = row.style.display !== "none";
    row.style.display = visible ? "none" : "flex";
    $("price-toggle").classList.toggle("active", !visible);
  });

  const updatePriceVals = () => {
    const min = parseInt($("price-min").value);
    const max = parseInt($("price-max").value);
    state.priceMin = Math.min(min, max - 10000);
    state.priceMax = Math.max(max, min + 10000);
    $("price-min-val").textContent = fmt(state.priceMin);
    $("price-max-val").textContent = fmt(state.priceMax);
    renderGrid();
  };
  $("price-min").addEventListener("input", updatePriceVals);
  $("price-max").addEventListener("input", updatePriceVals);

  // Modal
  $("modal-close").addEventListener("click", closeModal);
  $("modal-overlay").addEventListener("click", (e) => {
    if (e.target === $("modal-overlay")) closeModal();
  });
  $("add-wishlist-btn").addEventListener("click", addToWishlist);

  // Zoom
  initZoom();

  // Wishlist
  $("wishlist-open-btn").addEventListener("click", openWishlistPanel);
  $("wl-close").addEventListener("click", closeWishlistPanel);
  $("wl-overlay").addEventListener("click", closeWishlistPanel);
  $("print-btn").addEventListener("click", preparePrint);

  // Customer info inputs
  $("cust-name").addEventListener("input", (e) => {
    state.customerInfo.name = e.target.value;
    saveStorage();
  });
  $("cust-phone").addEventListener("input", (e) => {
    state.customerInfo.phone = e.target.value;
    saveStorage();
  });
  $("cust-email").addEventListener("input", (e) => {
    state.customerInfo.email = e.target.value;
    saveStorage();
  });

  // Compare
  $("compare-open-btn").addEventListener("click", openComparePanel);
  $("compare-close").addEventListener("click", closeComparePanel);
  $("compare-overlay").addEventListener("click", closeComparePanel);

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if ($("modal-overlay").classList.contains("open")) closeModal();
      else if ($("wishlist-panel").classList.contains("open")) closeWishlistPanel();
      else if ($("compare-panel").classList.contains("open")) closeComparePanel();
    }
  });

  // Initial render
  updateWishlistBadge();
  applyDarkMode();
  applyLanguage();
  renderRecentlyViewed();
}

document.addEventListener("DOMContentLoaded", init);