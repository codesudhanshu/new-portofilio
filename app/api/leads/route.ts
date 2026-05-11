import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'

import { prisma } from '@/lib/prisma'
import { leadFormSchema } from '@/lib/validation'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// POST /api/leads — public endpoint for the contact form.
// Validates with Zod, inserts via Prisma. Returns { success: true } on 200.
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    )
  }

  const parsed = leadFormSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  try {
    const { phone, company, service, ...rest } = parsed.data
    await prisma.lead.create({
      data: {
        ...rest,
        phone: phone || null,
        company: company || null,
        service: service ?? null,
      },
    })
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('[api/leads] insert failed', err)
    return NextResponse.json(
      { error: 'Could not save your message. Please try again.' },
      { status: 500 }
    )
  }
}

// GET /api/leads — admin endpoint, requires x-api-key header.
export async function GET(req: Request) {
  const expected = process.env.LEADS_API_KEY
  if (!expected) {
    return NextResponse.json(
      { error: 'LEADS_API_KEY is not configured on the server' },
      { status: 500 }
    )
  }

  const provided = req.headers.get('x-api-key') ?? ''
  if (!constantTimeMatch(provided, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
    take: 500,
  })
  return NextResponse.json({ leads })
}

// Constant-time string comparison to avoid leaking length / equality timing.
function constantTimeMatch(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf-8')
  const bufB = Buffer.from(b, 'utf-8')
  if (bufA.length !== bufB.length) {
    // Equalise lengths so timingSafeEqual does not throw.
    const dummy = Buffer.alloc(bufB.length)
    timingSafeEqual(dummy, bufB)
    return false
  }
  return timingSafeEqual(bufA, bufB)
}
