import { useRef } from 'react'

const resumePath = '/RiyaResume.pdf'

export default function ResumeModal({ isOpen, onClose }) {
  const resumeFrameRef = useRef(null)

  if (!isOpen) {
    return null
  }

  const printResume = () => {
    resumeFrameRef.current?.contentWindow?.print()
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/95 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-3 sm:px-6">
          <p className="text-sm font-semibold text-slate-100">Resume Preview</p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={printResume}
              className="rounded-full border border-slate-700/80 px-3 py-1.5 text-xs font-normal text-slate-200 transition hover:border-sky-400/80 hover:text-sky-200"
            >
              Print
            </button>
            <a
              href={resumePath}
              download="RiyaResume.pdf"
              className="rounded-full border border-slate-700/80 px-3 py-1.5 text-xs font-normal text-slate-200 transition hover:border-sky-400/80 hover:text-sky-200"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-sky-400 px-3 py-1.5 text-xs font-normal text-slate-950 transition hover:bg-sky-300"
            >
              Close
            </button>
          </div>
        </div>
        <iframe ref={resumeFrameRef} title="Resume PDF" src={resumePath} className="h-full w-full" />
      </div>
    </div>
  )
}
