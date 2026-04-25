/**
 * Remove `.next` before build — fixes Windows/Git Bash ENOENT / "Cannot find module for page"
 * and missing chunk errors like `Cannot find module './124.js'` when the cache is stale,
 * partially written, or deleted while `next dev` is still running.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const nextDir = path.join(root, '.next')

if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true })
  console.log('Removed .next')
} else {
  console.log('No .next to remove.')
}
console.log(
  '→ If `next dev` is still running, stop it (Ctrl+C), then run `npm run dev` again or the app may return 500 (broken cache).',
)
