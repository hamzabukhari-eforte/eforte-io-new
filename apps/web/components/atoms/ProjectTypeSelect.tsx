"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { projectTypeOptions } from "@/data/contactFormOptions";
import { cn } from "@/lib/utils";

const triggerClassName =
  "flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3.5 text-left text-[15px] text-black outline-none transition-all duration-200 hover:border-[#C7CBD4] focus:border-primary-pink focus:shadow-[0_0_0_4px_rgba(211,40,122,0.16)]";

interface ProjectTypeSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function ProjectTypeSelect({
  id,
  value,
  onChange,
  required = true,
}: ProjectTypeSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleListWheel = (event: React.WheelEvent<HTMLUListElement>) => {
    event.stopPropagation();

    const list = listRef.current;
    if (!list) return;

    const { scrollTop, scrollHeight, clientHeight } = list;
    const canScrollUp = scrollTop > 0;
    const canScrollDown = scrollTop + clientHeight < scrollHeight - 1;

    if (
      (event.deltaY < 0 && !canScrollUp) ||
      (event.deltaY > 0 && !canScrollDown)
    ) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className={cn(triggerClassName, !value && "text-[#9CA3AF]")}
      >
        <span className="truncate">{value || "Select project type"}</span>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[#6B7280]">
          {open ? (
            <HiChevronUp className="h-4 w-4" aria-hidden />
          ) : (
            <HiChevronDown className="h-4 w-4" aria-hidden />
          )}
        </span>
      </button>

      <input
        type="hidden"
        name="projectType"
        value={value}
        required={required}
        tabIndex={-1}
      />

      <AnimatePresence>
        {open ? (
          <motion.ul
            ref={listRef}
            role="listbox"
            aria-labelledby={id}
            onWheel={handleListWheel}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-56 overflow-y-auto overscroll-contain rounded-xl border border-[#E5E7EB] bg-white py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          >
            {projectTypeOptions.map((option) => {
              const isSelected = value === option;
              return (
                <li key={option} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setOpen(false);
                    }}
                    className={cn(
                      "w-full cursor-pointer px-3.5 py-2 text-left text-[15px] text-black transition-colors hover:bg-primary-pink/8 hover:text-primary-pink",
                      isSelected &&
                        "bg-primary-pink/10 font-medium text-primary-pink"
                    )}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
