import type { PipelineCopy } from '../data/variants'

type PipelineCaseMediaProps = {
  pipeline: PipelineCopy
}

export function PipelineCaseMedia({ pipeline }: PipelineCaseMediaProps) {
  return (
    <div
      className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-accent-soft/10 via-surface-elevated/40 to-canvas/20 px-8 py-10"
      role="img"
      aria-label={`AI pipeline diagram: ${pipeline.firstLine} → Claude → Cursor → Braze → ${pipeline.brazeStep}`}
    >
      <pre className="font-mono text-left text-[13px] leading-[1.7] text-ink-muted">
        <span className="text-ink-muted">{pipeline.firstLine}</span>
        {'\n  ↓\n'}
        <span className="text-accent-soft">Claude</span>
        <span className="text-ink-muted"> → content</span>
        {'\n  ↓\n'}
        <span className="text-accent">Cursor</span>
        <span className="text-ink-muted"> → {pipeline.cursorStep}</span>
        {'\n  ↓\n'}
        <span className="text-accent-cyan">Braze</span>
        <span className="text-ink-muted"> → {pipeline.brazeStep}</span>
      </pre>
    </div>
  )
}
