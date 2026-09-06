"use client";

import { styles } from "../lib/styles";

export default function Error({ reset }) {
  return (
    <div className={`${styles.container} py-32 text-center`}>
      <h1 className="font-serif text-[28px] font-semibold text-black-100">
        Something went wrong
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-4 border border-black-100/20 px-4 py-2 text-[14px] font-medium hover:border-accent hover:text-accent"
      >
        Try again
      </button>
    </div>
  );
}
