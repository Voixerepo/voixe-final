export type Product = {
  slug: string
  name: string
  price: number
  description: string
  tagline?: string
  images: string[]   // main -> others
  variants: { label: string }[]
  sku: string
  edition: 'Matte Black' | 'Classic White'
}

export const products: Product[] = [
  {
    slug: 'voixe-tee-matte-black',
    name: 'VOIXE Tee — Matte Black Edition',
    edition: 'Matte Black',
    price: 68,
    sku: 'VX-MB-TEE-001',
    tagline: 'To express who you are without saying a word.',
    description:
      'Premium heavyweight cotton, ribbed collar, relaxed fit. Small chest print, statement back print. Designed for the luxury streetwear line.',
    images: [
      // Placeholder model shots — swap with your own files later
      'https://images.unsplash.com/photo-1520975922284-9d6b9b5e2fba?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop'
    ],
    variants: [{label:'S'},{label:'M'},{label:'L'},{label:'XL'}],
  },
  {
    slug: 'voixe-tee-classic-white',
    name: 'VOIXE Tee — Classic White Edition',
    edition: 'Classic White',
    price: 58,
    sku: 'VX-CW-TEE-001',
    tagline: 'To express who you are without saying a word.',
    description:
      'Soft midweight cotton with a clean front and tasteful VOIXE back print. Essential line for daily wear.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975940469-35aef67f7e96?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop'
    ],
    variants: [{label:'S'},{label:'M'},{label:'L'},{label:'XL'}],
  }
]

export function getProduct(slug: string){
  return products.find(p => p.slug === slug)
}
