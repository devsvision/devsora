export async function includePartials() {
  const nodes = document.querySelectorAll('[data-include]');

  await Promise.all([...nodes].map(async (node) => {
    const url = node.dataset.include;
    const response = await fetch(url);

    if (!response.ok) {
      node.innerHTML = '';
      return;
    }

    let html = await response.text();

    for (const [key, value] of Object.entries(node.dataset)) {
      if (key === 'include') continue;
      html = html.replaceAll(`{{${key}}}`, value);
    }

    node.outerHTML = html;
  }));
}
