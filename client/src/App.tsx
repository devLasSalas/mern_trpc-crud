import { trpc } from "./trpc";
import { httpBatchLink } from '@trpc/client';
import { useState } from "react";

export function App() {

  const [state, setstate] = useState(initialState)

  trpc.createClient({
    links: [
      httpBatchLink({
        url: 'localhost:3000/trpc/'
      })
    ]
  })

  return (
    <trpc.Provider client>
      <div>App</div>
    </trpc.Provider>
  )
}
