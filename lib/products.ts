export type Product = {
  slug: string
  name: string
  price: number
  description: string
  tagline?: string
  images: string[]
  variants: { label: string }[]
  sku: string
  edition: 'Matte Black' | 'Classic White' | 'Core' | 'Drop'
  color?: string
}

export const products: Product[] = [
  {
    slug: 'voixe-tee-matte-black',
    name: 'VOIXE Tee — Matte Black',
    edition: 'Matte Black',
    price: 68,
    sku: 'VX-MB-TEE-001',
    tagline: 'To express who you are without saying a word.',
    description: 'Premium heavyweight cotton, ribbed collar, relaxed fit. Small chest print, statement back print. Part of VOIXE luxury street line.',
    images: [
      '/images/matte1.jpg',
      '/images/matte2.jpg',
      '/images/editorial1.jpg'
    ],
    variants: [{label:'S'},{label:'M'},{label:'L'},{label:'XL'}],
    color: 'Black'
  },
  {
    slug: 'voixe-tee-classic-white',
    name: 'VOIXE Tee — Classic White',
    edition: 'Classic White',
    price: 58,
    sku: 'VX-CW-TEE-001',
    tagline: 'To express who you are without saying a word.',
    description: 'Soft midweight cotton with clean chest mark and tasteful VOIXE back print. Your daily essential piece.',
    images: [
      '/images/white1.jpg',
      '/images/white2.jpg',
      '/images/editorial2.jpg'
    ],
    variants: [{label:'S'},{label:'M'},{label:'L'},{label:'XL'}],
    color: 'White'
  },
  {
    slug: 'voixe-hoodie-core-black',
    name: 'VOIXE Core Hoodie — Black',
    edition: 'Core',
    price: 110,
    sku: 'VX-CR-HDY-001',
    description: 'Heavy fleece, double-layer hood, brushed interior. Minimal chest mark, oversized silhouette.',
    images: [
      '/images/editorial3.jpg',
      '/images/matte2.jpg'
    ],
    variants: [{label:'S'},{label:'M'},{label:'L'},{label:'XL'}],
    color: 'Black'
  },
  {
    slug: 'voixe-sweatpants-core-gray',
    name: 'VOIXE Core Sweatpants — Gray',
    edition: 'Core',
    price: 98,
    sku: 'VX-CR-SWP-001',
    description: 'Tapered fit with elastic cuffs, heavyweight cotton, tonal VOIXE print.',
    images: [
      '/images/editorial4.jpg'
    ],
    variants: [{label:'S'},{label:'M'},{label:'L'},{label:'XL'}],
    color: 'Gray'
  }
]

export function getProduct(slug: string){
  return products.find(p => p.slug === slug)
}
