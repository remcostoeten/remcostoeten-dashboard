"use client"

import React, { useState } from "react"

import db from "@/lib/firebase"

export default function AddEntry() {
  const [entry, setEntry] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    db.collection("diary").add({ text: entry })
    setEntry("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={entry} onChange={(e) => setEntry(e.target.value)} />
      <button type="submit">Add Entry</button>
    </form>
  )
}
