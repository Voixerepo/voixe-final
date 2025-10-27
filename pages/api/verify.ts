import type { NextApiRequest, NextApiResponse } from 'next'

const VALID = new Set(Array.from({length:50}, (_,i)=> `VOIXE-${String(i+1).padStart(4,'0')}`))

export default function handler(req: NextApiRequest, res: NextApiResponse){
  const code = String(req.query.code || '').toUpperCase().trim()

  if(!code || !/^VOIXE-\d{4}$/.test(code)){
    return res.status(200).json({ ok:false, message: 'Enter a valid code like VOIXE-0001.' })
  }
  if(VALID.has(code)){
    return res.status(200).json({ ok:true, message: `Code ${code} is valid and belongs to an authentic VOIXE product.` })
  }
  return res.status(200).json({ ok:false, message: `Code ${code} is not recognized. If you purchased from an authorized retailer, contact support.` })
}
