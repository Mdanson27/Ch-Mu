const loader = document.getElementById('app-loader');
const typedName = document.getElementById('typed-name');
const loaderLine = document.querySelector('.loader-line');
const page = document.getElementById('main-content');
const nameText = 'Christine Nanyombi Mubiru, CHRA';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function typeName() {
  typedName.textContent = '';
  for (const char of nameText) {
    typedName.textContent += char;
    await sleep(char === ' ' ? 28 : 48);
  }
}

async function runLoader() {
  await sleep(380);
  await typeName();
  loaderLine?.classList.add('ready');
  await sleep(700);
  loader?.classList.add('fade-out');
  page?.classList.remove('is-hidden');
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
  }, { threshold: 0.12 });

  items.forEach((item) => observer.observe(item));
}

function buildVCard() {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Mubiru;Christine Nanyombi;;;',
    'FN:Christine Nanyombi Mubiru, CHRA',
    'ORG:Makerere University Business School',
    'TITLE:Chief Human Resources Officer',
    'TEL;TYPE=CELL:+256700806036',
    'EMAIL;TYPE=WORK:cnanyombi@mubs.ac.ug',
    'URL:https://mubs.ac.ug/',
    'ADR;TYPE=WORK:;;Nakawa;Kampala;;;Uganda',
    'END:VCARD'
  ].join('\n');
}

document.getElementById('save-contact')?.addEventListener('click', () => {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'christine-nanyombi-mubiru.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('share-profile')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const data = {
    title: 'Christine Nanyombi Mubiru, CHRA',
    text: 'Chief Human Resources Officer — Makerere University Business School',
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch (_) {
      // User cancelled the share sheet.
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    const label = button.querySelector('span:last-child');
    const original = label?.textContent || 'Share';
    if (label) label.textContent = 'Copied';
    setTimeout(() => { if (label) label.textContent = original; }, 1600);
  } catch (_) {
    window.prompt('Copy this profile link:', window.location.href);
  }
});

window.addEventListener('load', runLoader);
