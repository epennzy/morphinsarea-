import React from 'react'

export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl p-4 shadow-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 ${className}`}
    >
      {children}
    </div>
  )
}
