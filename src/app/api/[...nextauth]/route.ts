import { handlers } from '@/auth'
export const { GET, POST } = handlers

// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcryptjs'

// const prisma = new PrismaClient()

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials) => {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error('Email and password are required')
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         })

//         if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
//           throw new Error('Invalid credentials')
//         }

//         return { id: user.id, email: user.email }
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//   },
//   session: {
//     strategy: 'jwt',
//   },
// })
