"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Download, IdCard, Minus, Plus, RotateCcw, X } from "lucide-react";

const PAGES = ["/founder-card/page-1.webp", "/founder-card/page-2.webp"];
const PDF = "/founder-card/rishab-chhetri-founder-card.pdf";
const MIN = 1;
const MAX = 3;
const clamp = (z) => Math.min(MAX, Math.max(MIN, Math.round(z * 100) / 100));

export default function FounderCardDrawer({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(1);
  const scrollRef = useRef(null);
  const pinch = useRef(null);
  const drag = useRef(null);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || zoom <= 1) return;
    const el = scrollRef.current;
    drag.current = { x: e.clientX, y: e.clientY, l: el.scrollLeft, t: el.scrollTop };
    el.setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const el = scrollRef.current;
    el.scrollLeft = drag.current.l - (e.clientX - drag.current.x);
    el.scrollTop = drag.current.t - (e.clientY - drag.current.y);
  };
  const endDrag = () => {
    drag.current = null;
    setDragging(false);
  };

  useEffect(() => setMounted(true), []);

  const show = () => {
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };
  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setOpen(false);
      setZoom(1);
    }, 400);
  }, []);

  // Zoom keeping the given viewport point anchored.
  const zoomTo = useCallback((next, cx, cy) => {
    const el = scrollRef.current;
    setZoom((prev) => {
      const z = clamp(next(prev));
      if (el && z !== prev) {
        const rect = el.getBoundingClientRect();
        const px = cx ?? rect.width / 2;
        const py = cy ?? rect.height / 2;
        const x = (el.scrollLeft + px) / prev;
        const y = (el.scrollTop + py) / prev;
        requestAnimationFrame(() => {
          el.scrollLeft = x * z - px;
          el.scrollTop = y * z - py;
        });
      }
      return z;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "+" || e.key === "=") zoomTo((z) => z + 0.25);
      if (e.key === "-") zoomTo((z) => z - 0.25);
      if (e.key === "0") zoomTo(() => 1);
    };
    window.addEventListener("keydown", onKey);

    const el = scrollRef.current;
    const onWheel = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      const r = el.getBoundingClientRect();
      zoomTo((z) => z * Math.exp(-e.deltaY * 0.01), e.clientX - r.left, e.clientY - r.top);
    };
    const dist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const onTouchStart = (e) => {
      if (e.touches.length === 2) pinch.current = dist(e.touches);
    };
    const onTouchMove = (e) => {
      if (e.touches.length !== 2 || !pinch.current) return;
      e.preventDefault();
      const d = dist(e.touches);
      const r = el.getBoundingClientRect();
      const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left;
      const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
      const ratio = d / pinch.current;
      pinch.current = d;
      zoomTo((z) => z * ratio, cx, cy);
    };
    const onTouchEnd = () => (pinch.current = null);
    el?.addEventListener("wheel", onWheel, { passive: false });
    el?.addEventListener("touchstart", onTouchStart, { passive: true });
    el?.addEventListener("touchmove", onTouchMove, { passive: false });
    el?.addEventListener("touchend", onTouchEnd);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      el?.removeEventListener("wheel", onWheel);
      el?.removeEventListener("touchstart", onTouchStart);
      el?.removeEventListener("touchmove", onTouchMove);
      el?.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, close, zoomTo]);

  const btn =
    "inline-flex h-9 w-9 items-center justify-center text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30";

  return (
    <>
      <button
        type="button"
        onClick={show}
        className={className}
        aria-haspopup="dialog"
      >
        <IdCard size={16} /> Founder card
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Founder card">
            <div
              onClick={close}
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            />
            <aside
              className={`absolute right-0 top-0 flex h-full w-full flex-col overflow-hidden border-l border-white/10 bg-[#161618] shadow-[-30px_0_80px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[min(760px,92vw)] ${
                visible ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <header className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-white/60">
                  <span className="h-2 w-2 bg-accent" /> Founder card
                </div>
                <div className="flex items-center gap-1">
                  <button className={btn} onClick={() => zoomTo((z) => z - 0.25)} disabled={zoom <= MIN} aria-label="Zoom out">
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-[13px] tabular-nums text-white/70">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button className={btn} onClick={() => zoomTo((z) => z + 0.25)} disabled={zoom >= MAX} aria-label="Zoom in">
                    <Plus size={16} />
                  </button>
                  <button className={btn} onClick={() => zoomTo(() => 1)} aria-label="Reset zoom">
                    <RotateCcw size={15} />
                  </button>
                  <a className={btn} href={PDF} download aria-label="Download PDF">
                    <Download size={16} />
                  </a>
                  <button className={`${btn} ml-1`} onClick={close} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>
              </header>

              <div
                ref={scrollRef}
                className={`mx-3 mb-3 flex-1 overflow-auto overscroll-contain bg-[#0d0d0e] shadow-[inset_0_2px_10px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:mx-4 sm:mb-4 ${
                  zoom > 1 ? (dragging ? "cursor-grabbing" : "cursor-grab") : ""
                }`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onDoubleClick={(e) => {
                  const r = scrollRef.current.getBoundingClientRect();
                  zoomTo((z) => (z > 1 ? 1 : 2), e.clientX - r.left, e.clientY - r.top);
                }}
              >
                <div
                  className="flex flex-col gap-6 p-5 sm:p-8"
                  style={{ width: `${zoom * 100}%`, minWidth: "100%" }}
                >
                  {PAGES.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Founder card, page ${i + 1} of ${PAGES.length}`}
                      draggable={false}
                      className={`block w-full select-none rounded-lg shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_10px_30px_-10px_rgba(0,0,0,0.9)] ring-1 ring-white/10 transition-[opacity,transform] duration-700 ease-out ${
                        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${150 + i * 120}ms` }}
                    />
                  ))}
                </div>
              </div>

              <p className="border-t border-white/10 px-5 py-2 text-center text-[12px] text-white/40">
                Double-click, pinch or Ctrl + scroll to zoom · drag to move around
              </p>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
