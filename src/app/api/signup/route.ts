import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

// Define a custom error handler for consistent responses
const handleError = (message: string, statusCode: number) =>
  new NextResponse(message, { status: statusCode })

export async function POST(req: Request) {
  try {
    // Destructure and validate input data
    const {
      email,
      password,
      confirmPassword,
    }: { email: string; password: string; confirmPassword: string } = await req.json()

    if (!email || !password || !confirmPassword) {
      return handleError('All fields are required', 400)
    }

    // Check for password match
    if (password !== confirmPassword) {
      return handleError('Passwords do not match', 400)
    }

    console.log(email, password)

    // Check if the email is already in use
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return handleError('Email already exists', 400)
    }

    // Hash the password and create the user
    const hashedPassword = await hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    const token = jwt.sign({ id: user.id, email }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    })

    // Set token in a cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      maxAge: 60 * 60, // 1 hour
    }

    const serializedCookie = cookie.serialize('auth_token', token, cookieOptions)

    const { password: myPassword, ...rest } = user

    user.token = token

    return NextResponse.json(
      { user: rest, message: 'User created successfully', success: true },
      {
        status: 201,
        headers: {
          'Set-Cookie': serializedCookie,
        },
      },
    )
  } catch (error) {
    console.error('Error while signing up:', error)
    return handleError('Internal server error', 500)
  }
}
