import Head from 'next/head'
import Image from 'next/image'
import Cat from '../src/Cat'

export default function Home({cats}) {
  console.log(cats.fact)
  return (
    <div>
      <Head>
        <title>Daily Cat Facts</title>
      </Head>
      <Cat catfact={cats.fact} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://catfact.ninja/fact')
  const cats = await res.json()

  return {
      props: {
          cats
      }
  }
}