// Injects the server-rendered markup of each page into its built HTML, so the
// content is in the HTML itself (search engines, link previews, slow phones).
// Runs after `vite build` (client) and `vite build --ssr` (dist-ssr).
import { readFile, rm, writeFile } from 'node:fs/promises'

const { render } = await import('../dist-ssr/entry-server.js')

const pages = [
  ['index.html', 'home', 'id'],
  ['en/index.html', 'home', 'en'],
  ['donasi/index.html', 'donate', 'id'],
  ['en/donasi/index.html', 'donate', 'en'],
  ['legal/index.html', 'legal', 'id'],
  ['en/legal/index.html', 'legal', 'en'],
]

const EMPTY_ROOT = '<div id="root"></div>'

for (const [file, page, lang] of pages) {
  const path = `dist/${file}`
  const html = await readFile(path, 'utf8')
  if (!html.includes(EMPTY_ROOT)) throw new Error(`${path}: empty #root not found`)
  const markup = render(page, lang)
  await writeFile(path, html.replace(EMPTY_ROOT, `<div id="root">${markup}</div>`))
  console.log(`prerendered ${file} (${(markup.length / 1024).toFixed(0)} kB)`)
}

await rm('dist-ssr', { recursive: true, force: true })
