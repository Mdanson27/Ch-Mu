const rotaryStyles = document.createElement('link');
rotaryStyles.rel = 'stylesheet';
rotaryStyles.href = 'rotary-highlight.css';
document.head.appendChild(rotaryStyles);

function installRealisticFlower() {
  const stage = document.querySelector('.flower-stage');
  if (!stage) return;

  stage.innerHTML = `
    <div class="flower-halo"></div>
    <svg class="peony-flower" viewBox="0 0 300 340" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id="petalOuter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff5f3"/>
          <stop offset="24%" stop-color="#f9dddc"/>
          <stop offset="56%" stop-color="#efb8b3"/>
          <stop offset="82%" stop-color="#df9187"/>
          <stop offset="100%" stop-color="#c86f69"/>
        </linearGradient>
        <linearGradient id="petalMiddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff8f5"/>
          <stop offset="30%" stop-color="#f8d8d5"/>
          <stop offset="65%" stop-color="#eaa8a0"/>
          <stop offset="100%" stop-color="#cc766f"/>
        </linearGradient>
        <linearGradient id="petalInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fffaf7"/>
          <stop offset="38%" stop-color="#f8d8d4"/>
          <stop offset="74%" stop-color="#e79f98"/>
          <stop offset="100%" stop-color="#c96d68"/>
        </linearGradient>
        <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#dceae2"/>
          <stop offset="45%" stop-color="#a9c3b4"/>
          <stop offset="100%" stop-color="#7f9f8d"/>
        </linearGradient>
        <linearGradient id="stemGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#6f8f7d"/>
          <stop offset="45%" stop-color="#9eb6a7"/>
          <stop offset="62%" stop-color="#dbe8e0"/>
          <stop offset="100%" stop-color="#759684"/>
        </linearGradient>
        <radialGradient id="stamenGold" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fff8cf"/>
          <stop offset="35%" stop-color="#f0d06b"/>
          <stop offset="72%" stop-color="#d5a53b"/>
          <stop offset="100%" stop-color="#9e6e24"/>
        </radialGradient>
        <filter id="petalShadow" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#9d665e" flood-opacity=".18"/>
        </filter>
        <filter id="petalShadowSoft" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#9d665e" flood-opacity=".14"/>
        </filter>
      </defs>

      <path class="flower-stem-svg" d="M150 143 C149 190 151 238 150 310" fill="none" stroke="url(#stemGradient)" stroke-width="5" stroke-linecap="round"/>

      <path class="leaf-shape leaf-left-svg" d="M149 236 C126 210 96 209 78 232 C92 253 122 257 149 236 Z" fill="url(#leafGradient)"/>
      <path class="leaf-shape leaf-right-svg" d="M151 250 C174 221 204 222 222 245 C205 266 177 268 151 250 Z" fill="url(#leafGradient)"/>
      <path class="leaf-vein" d="M143 236 C120 232 100 234 84 238" fill="none" stroke="#6f917d" stroke-width="1.4" stroke-linecap="round"/>
      <path class="leaf-vein" d="M157 250 C181 246 201 248 216 252" fill="none" stroke="#6f917d" stroke-width="1.4" stroke-linecap="round"/>

      <g class="bloom-petal outer-petal" style="--delay:.12s" transform="rotate(-6 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.17s" transform="rotate(39 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.22s" transform="rotate(84 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.27s" transform="rotate(130 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.32s" transform="rotate(176 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.37s" transform="rotate(221 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.42s" transform="rotate(268 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>
      <g class="bloom-petal outer-petal" style="--delay:.47s" transform="rotate(315 150 145)"><path d="M150 149 C116 147 96 125 101 98 C105 74 126 53 150 56 C174 53 194 75 198 99 C202 125 183 147 150 149 Z" fill="url(#petalOuter)"/></g>

      <g class="bloom-petal middle-petal" style="--delay:.48s" transform="rotate(17 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>
      <g class="bloom-petal middle-petal" style="--delay:.54s" transform="rotate(69 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>
      <g class="bloom-petal middle-petal" style="--delay:.60s" transform="rotate(121 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>
      <g class="bloom-petal middle-petal" style="--delay:.66s" transform="rotate(174 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>
      <g class="bloom-petal middle-petal" style="--delay:.72s" transform="rotate(226 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>
      <g class="bloom-petal middle-petal" style="--delay:.78s" transform="rotate(278 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>
      <g class="bloom-petal middle-petal" style="--delay:.84s" transform="rotate(329 150 145)"><path d="M150 147 C124 144 111 126 115 105 C118 84 134 67 150 69 C167 67 182 85 185 106 C188 127 175 144 150 147 Z" fill="url(#petalMiddle)"/></g>

      <g class="flower-stamens">
        <circle cx="150" cy="144" r="12" fill="url(#stamenGold)"/>
        <circle cx="145" cy="141" r="2.2" fill="#fff3b7"/>
        <circle cx="155" cy="141" r="2.2" fill="#f7dda0"/>
        <circle cx="150" cy="148" r="2" fill="#8f6626" opacity=".7"/>
      </g>

      <g class="bloom-petal inner-petal" style="--delay:.83s" transform="rotate(2 150 145)"><path d="M150 146 C133 143 125 131 128 118 C130 104 140 94 150 95 C161 94 171 105 172 119 C174 132 166 143 150 146 Z" fill="url(#petalInner)"/></g>
      <g class="bloom-petal inner-petal" style="--delay:.89s" transform="rotate(73 150 145)"><path d="M150 146 C133 143 125 131 128 118 C130 104 140 94 150 95 C161 94 171 105 172 119 C174 132 166 143 150 146 Z" fill="url(#petalInner)"/></g>
      <g class="bloom-petal inner-petal" style="--delay:.95s" transform="rotate(145 150 145)"><path d="M150 146 C133 143 125 131 128 118 C130 104 140 94 150 95 C161 94 171 105 172 119 C174 132 166 143 150 146 Z" fill="url(#petalInner)"/></g>
      <g class="bloom-petal inner-petal" style="--delay:1.01s" transform="rotate(218 150 145)"><path d="M150 146 C133 143 125 131 128 118 C130 104 140 94 150 95 C161 94 171 105 172 119 C174 132 166 143 150 146 Z" fill="url(#petalInner)"/></g>
      <g class="bloom-petal inner-petal" style="--delay:1.07s" transform="rotate(290 150 145)"><path d="M150 146 C133 143 125 131 128 118 C130 104 140 94 150 95 C161 94 171 105 172 119 C174 132 166 143 150 146 Z" fill="url(#petalInner)"/></g>
    </svg>
  `;
}

installRealisticFlower();

const WHATSAPP_NUMBER = '256700806036';
const WHATSAPP_MESSAGE = 'Hello Ms. Mubiru, I came across your professional profile and would like to connect regarding a professional matter. Please let me know a convenient time to speak. Kind regards.';
const EMAIL_ADDRESS = 'cnanyombi@mubs.ac.ug';
const EMAIL_SUBJECT = 'Professional Connection | Christine Nanyombi Mubiru';
const EMAIL_BODY = 'Dear Ms. Mubiru,\n\nI came across your professional profile and would like to connect regarding a professional matter. Please let me know a convenient time for a brief conversation.\n\nKind regards,';

const loader = document.getElementById('app-loader');
const typedName = document.getElementById('typed-name');
const page = document.getElementById('main-content');
const qrModal = document.getElementById('qr-modal');
const stickyDock = document.querySelector('.sticky-dock');
const footer = document.getElementById('autominds-footer');
const nameText = 'Christine Nanyombi Mubiru';
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function prepareContactLinks() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const emailUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(link => link.setAttribute('href', whatsappUrl));
  document.querySelectorAll('[data-email]').forEach(link => link.setAttribute('href', emailUrl));
}

async function typeName() {
  if (!typedName) return;
  typedName.textContent = '';
  for (const char of nameText) {
    typedName.textContent += char;
    await sleep(char === ' ' ? 32 : 54);
  }
}

async function runLoader() {
  await sleep(80);
  loader?.classList.add('animate-in');
  // The layered bloom completes first so the loader reads unmistakably as a flower.
  await sleep(1780);
  await typeName();
  await sleep(650);
  loader?.classList.add('fade-out');
  page?.classList.remove('is-hidden');
  document.body.classList.add('page-ready');
}

function buildVCard() {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Mubiru;Christine Nanyombi;;;',
    'FN:Christine Nanyombi Mubiru',
    'ORG:Makerere University Business School',
    'TITLE:Chief, Human Resource',
    'TEL;TYPE=CELL:+256700806036',
    'EMAIL;TYPE=WORK:cnanyombi@mubs.ac.ug',
    'URL:https://mubs.ac.ug/',
    'ADR;TYPE=WORK:;;Plot 21A, Port Bell Road, Nakawa;Kampala;;;Uganda',
    'END:VCARD'
  ].join('\n');
}

function saveContact() {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'christine-nanyombi-mubiru.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.getElementById('save-contact')?.addEventListener('click', saveContact);
document.getElementById('sticky-save')?.addEventListener('click', saveContact);

function openQr() {
  if (!qrModal) return;
  qrModal.classList.add('open');
  qrModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-lock');
}

function closeQr() {
  if (!qrModal) return;
  qrModal.classList.remove('open');
  qrModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-lock');
}

document.querySelectorAll('[data-open-qr]').forEach(button => button.addEventListener('click', openQr));
document.querySelectorAll('[data-close-qr]').forEach(button => button.addEventListener('click', closeQr));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeQr(); });

function manageStickyDock() {
  if (!footer || !stickyDock || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => stickyDock.classList.toggle('dock-hidden', entry.isIntersecting));
  }, { threshold: 0.12 });
  observer.observe(footer);
}

prepareContactLinks();
manageStickyDock();
window.addEventListener('load', runLoader);
