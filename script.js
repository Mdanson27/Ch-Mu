const WHATSAPP_NUMBER = '256700806036';
const WHATSAPP_MESSAGE = 'Hello Ms. Mubiru, I came across your digital profile and would like to connect regarding a professional matter. Kindly let me know a convenient time for a brief conversation. Thank you.';
const EMAIL_ADDRESS = 'cnanyombi@mubs.ac.ug';
const EMAIL_SUBJECT = 'Professional Enquiry – Christine Nanyombi Mubiru';
const EMAIL_BODY = 'Dear Ms. Mubiru,\n\nI came across your digital profile and would like to connect regarding a professional matter. Kindly let me know a convenient time for a brief discussion.\n\nKind regards,';

const loader = document.getElementById('app-loader');
const typedName = document.getElementById('typed-name');
const loaderLine = document.querySelector('.loader-line');
const page = document.getElementById('main-content');
const qrModal = document.getElementById('qr-modal');
const nameText = 'Christine Nanyombi Mubiru';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function prepareContactLinks() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const emailUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
  document.querySelectorAll('[data-whatsapp]').forEach((link) => link.setAttribute('href', whatsappUrl));
  document.querySelectorAll('[data-email]').forEach((link) => link.setAttribute('href', emailUrl));
}

async function typeName() {
  if (!typedName) return;
  typedName.textContent = '';
  for (const char of nameText) {
    typedName.textContent += char;
    await sleep(char === ' ' ? 26 : 44);
  }
}

async function runLoader() {
  await sleep(260);
  await typeName();
  loaderLine?.classList.add('ready');
  await sleep(520);
  loader?.classList.add('fade-out');
  page?.classList.remove('is-hidden');
  document.body.classList.add('page-ready');
  revealOnScroll();
}

function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach((item) => observer.observe(item));
}

function buildVCard() {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Mubiru;Christine Nanyombi;;;',
    'FN:Christine Nanyombi Mubiru',
    'ORG:Makerere University Business School',
    'TITLE:Chief Human Resources Officer',
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

document.querySelectorAll('[data-open-qr]').forEach((button) => button.addEventListener('click', openQr));
document.querySelectorAll('[data-close-qr]').forEach((button) => button.addEventListener('click', closeQr));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeQr(); });

prepareContactLinks();
window.addEventListener('load', runLoader);
