import Head from 'next/head'
import Image from 'next/image'

export default function About(){
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Head><title>About — VOIXE Studio</title></Head>
      <h1 className="text-3xl font-semibold">About VOIXE Studio</h1>
      <p className="italic text-neutral-600 mt-2">To express who you are without saying a word.</p>

      <p className="mt-6 text-neutral-800 leading-7">
        VOIXE was founded on the belief that self-expression transcends words. Our pieces are crafted to project confidence,
        restraint, and identity — balancing luxury construction with street sensibility. Matte Black Edition distills the line
        into decisive, tonal statements. Classic White Edition simplifies the silhouette to its essential form.
      </p>

      <div className="mt-10 rounded-2xl overflow-hidden border">
        <Image src="/images/editorial1.jpg" alt="Studio" width={1400} height={900} className="w-full h-auto object-cover"/>
      </div>

      <p className="mt-6 text-neutral-800 leading-7">
        Every VOIXE garment is finished with serialized tags and a verification system to protect authenticity and reward our collectors.
        Scan the QR inside your piece or enter your code on the Verify page.
      </p>

      <div className="mt-10 text-sm text-neutral-500">VOIXE Studio</div>
      {/* Add your signature image later:
        <Image src="/images/signature.png" alt="Signature" width={220} height={80}/>
      */}
    </main>
  )
}
