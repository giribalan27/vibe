import { useTRPC } from '@/trpc/client'
import React from 'react'

const HomePage = () => {
  const trpc = useTRPC();
  trpc.hello.queryOptions({text: "Hi"})
  return (
    <div>HomePage</div>
  )
}

export default HomePage