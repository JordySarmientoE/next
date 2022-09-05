import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [click, setClick] = useState(1);

  return (
    <>
      <button onClick={() => setClick(click + 1)}>{click}</button>
      <Link href="/pokemon">Pokemon</Link>
      <Link href="/pokemon_ssr">Pokemon SSR</Link>
    </>
  )
}
