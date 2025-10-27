import Head from 'next/head'

export default function Contact(){
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Head><title>Contact — VOIXE Studio</title></Head>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-neutral-600 mt-2">For orders, press, or wholesale.</p>

      <div className="mt-8 grid gap-4 text-neutral-800">
        <p><span className="font-medium">General:</span> support@voixe.com</p>
        <p><span className="font-medium">Returns:</span> returns@voixe.com</p>
        <p><span className="font-medium">Instagram:</span> @voixestudio</p>
      </div>
    </main>
  )
}
