/**
 * Dev with a clean `.next` only when port 3003 is free.
 * If something is still listening (usually an old `next dev`), deleting `.next` first
 * leaves that process running with a broken cache → 500 on every route including /favicon.ico.
 */
import net from 'net'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const nextDir = path.join(root, '.next')
const PORT = Number.parseInt(String(process.env.PORT || '3003'), 10) || 3003

function portInUse(p) {
  return new Promise((resolve, reject) => {
    const s = net.createServer()
    s.once('error', (e) => {
      if (e && e.code === 'EADDRINUSE') resolve(true)
      else reject(e)
    })
    s.listen(p, '0.0.0.0', () => s.close(() => resolve(false)))
  })
}

if (await portInUse(PORT)) {
  console.error(
    [
      '',
      `  ${'\x1b[33m'}Port ${PORT} is already in use.${'\x1b[0m'}`,
      `  Another process (often a previous "npm run dev") is still running.`,
      '',
      '  1) Stop it: focus that terminal and press Ctrl+C, or',
      '  2) End the Node process in Task Manager, then',
      '  3) Run: npm run dev:clean   (or: npm run clean && npm run dev)',
      '',
    ].join('\n'),
  )
  process.exit(1)
}

if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true })
  console.log('Removed .next')
} else {
  console.log('No .next to remove; starting dev fresh.')
}

const child = spawn('npx', ['next', 'dev', '-p', String(PORT)], {
  stdio: 'inherit',
  shell: true,
  cwd: root,
  env: { ...process.env, FORCE_COLOR: '1' },
})
child.on('exit', (code) => process.exit(code ?? 0))
