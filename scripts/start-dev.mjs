/**
 * Safe `next dev` entry:
 * 1) If the dev port is already in use → exit (do not touch .next; another dev may be compiling).
 * 2) If the port is free but `.next` exists without `routes-manifest.json` → remove `.next`
 *    (typical after a crash, killed process, or deleting the cache while dev was running).
 * 3) Start `next dev`.
 *
 * This prevents 500s / missing vendor-chunks / ENOENT routes-manifest from a half-deleted cache.
 */
import net from 'net'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const nextDir = path.join(root, '.next')
const routesManifest = path.join(nextDir, 'routes-manifest.json')
const PORT = Number.parseInt(String(process.env.PORT || '3003'), 10) || 3003

function portFree(p) {
  return new Promise((resolve, reject) => {
    const s = net.createServer()
    s.once('error', (e) => {
      if (e && e.code === 'EADDRINUSE') resolve(false)
      else reject(e)
    })
    s.listen(p, '0.0.0.0', () => s.close(() => resolve(true)))
  })
}

let canBind
try {
  canBind = await portFree(PORT)
} catch (e) {
  console.error('[dev] Could not check port:', e?.message || e)
  process.exit(1)
}

if (!canBind) {
  console.error(
    [
      '',
      `[dev] Port ${PORT} is already in use.`,
      '  Another terminal may be running `next dev`, or another app is using this port.',
      '  Stop that process (Ctrl+C in the dev terminal, or Task Manager), then run `npm run dev` again.',
      '',
    ].join('\n'),
  )
  process.exit(1)
}

if (fs.existsSync(nextDir) && !fs.existsSync(routesManifest)) {
  console.warn(
    '[dev] Removing incomplete .next cache (missing routes-manifest.json). ' +
      'This happens if the last dev server was stopped while the cache was updating.',
  )
  fs.rmSync(nextDir, { recursive: true, force: true })
}

const child = spawn('npx', ['next', 'dev', '-p', String(PORT)], {
  stdio: 'inherit',
  shell: true,
  cwd: root,
  env: { ...process.env, FORCE_COLOR: '1' },
})
child.on('exit', (code) => process.exit(code ?? 0))
