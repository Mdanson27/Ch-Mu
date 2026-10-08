const rotaryStyles = document.createElement('link');
rotaryStyles.rel = 'stylesheet';
rotaryStyles.href = 'rotary-highlight.css';
document.head.appendChild(rotaryStyles);

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
  await sleep(100);
  loader?.classList.add('animate-in');
  // Let the flower fully bloom before the name begins typing.
  await sleep(1450);
  await typeName();
  await sleep(620);
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
