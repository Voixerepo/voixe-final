export const products = [
  {
    id: 'tee-001',
    slug: 'voixe-tee-classic-white',
    name: 'VOIXE Tee — Classic White',
    price: 45,
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/voixe-tee-white.jpg',
    description: 'Classic White Edition — minimal, expressive, confident.'
  },
  {
    id: 'tee-002',
    slug: 'voixe-tee-matte-black',
    name: 'VOIXE Tee — Matte Black',
    price: 55,
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/images/voixe-tee-black.jpg',
    description: 'Matte Black Edition — premium weight with a luxe hand.'
  }
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}
