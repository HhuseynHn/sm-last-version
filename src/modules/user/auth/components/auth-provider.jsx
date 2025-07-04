import { mockSocialUsers } from '@/mock/mock-social-users'
import { mockUsers } from '@/mock/mock-users'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem("vibesocial_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Find user in mock database
      const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

      if (!foundUser) {
        throw new Error("Invalid email or password")
      }

      // Remove password from user object
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("vibesocial_user", JSON.stringify(userWithoutPassword))

      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const loginWithGoogle = async () => {
    try {
      // Simulate OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, this would handle the OAuth callback
      // and get user data from Google's API
      const googleUser = mockSocialUsers.google

      // Check if user already exists in our database
      let existingUser = mockUsers.find((u) => u.email === googleUser.email)

      if (!existingUser) {
        // Create new user from Google data
        const newUser = {
          ...googleUser,
          id: mockUsers.length + 1,
        }
        mockUsers.push(newUser)
        existingUser = newUser
      }

      const { password: _, ...userWithoutPassword } = existingUser
      setUser(userWithoutPassword)
      localStorage.setItem("vibesocial_user", JSON.stringify(userWithoutPassword))

      return { success: true }
    } catch (error) {
      return { success: false, error: "Failed to login with Google" }
    }
  }

  const loginWithFacebook = async () => {
    try {
      // Simulate OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real app, this would handle the OAuth callback
      // and get user data from Facebook's API
      const facebookUser = mockSocialUsers.facebook

      // Check if user already exists in our database
      let existingUser = mockUsers.find((u) => u.email === facebookUser.email)

      if (!existingUser) {
        // Create new user from Facebook data
        const newUser = {
          ...facebookUser,
          id: mockUsers.length + 1,
        }
        mockUsers.push(newUser)
        existingUser = newUser
      }

      const { password: _, ...userWithoutPassword } = existingUser
      setUser(userWithoutPassword)
      localStorage.setItem("vibesocial_user", JSON.stringify(userWithoutPassword))

      return { success: true }
    } catch (error) {
      return { success: false, error: "Failed to login with Facebook" }
    }
  }

  const signup = async (userData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if user already exists
      const existingUser = mockUsers.find((u) => u.email === userData.email)
      if (existingUser) {
        throw new Error("User with this email already exists")
      }

      // Create new user
      const newUser = {
        id: mockUsers.length + 1,
        ...userData,
        avatar: "/placeholder.svg?height=40&width=40",
        bio: "",
        followers: 0,
        following: 0,
        posts: 0,
        provider: "email",
      }

      // Add to mock database
      mockUsers.push(newUser)

      // Remove password from user object
      const { password: _, ...userWithoutPassword } = newUser
      setUser(userWithoutPassword)
      localStorage.setItem("vibesocial_user", JSON.stringify(userWithoutPassword))

      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("vibesocial_user")
  }

  const value = {
    user,
    login,
    loginWithGoogle,
    loginWithFacebook,
    signup,
    logout,
    loading,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
