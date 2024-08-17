'use client'

import { Button, Input } from '@/components/ui'
import axios from 'axios'
import React, { FormEvent } from 'react'

export default function Chat_Query() {
  const [query, setQuery] = React.useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api', {
        text: query,
      })

      const result = response?.data?.Text?.matches

      for (let i = 0; i < result.length; i++) {
        const holder = result[i].id

        console.log(holder)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter your query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" onClick={handleSubmit}>
        Send
      </Button>
    </div>
  )
}
