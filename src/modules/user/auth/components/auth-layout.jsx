"use client"


import { Card, CardContent, CardDescription, CardHeader, CardTitle, Separator, Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components'
import { Heart, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import Login from './login'
import LogoAuth from './logo'
import SignUp from './signup'

import SocialLoginButton from './social-login-button'

const AuthFormLayout = () => {

    const [activeTab, setActiveTab] = useState("login")
    const [loading, setLoading] = useState(false)
    return (

        <>

            <div className="min-h-min rounded-md flex items-center justify-center bg-gradient-to-br from-fuchsia-50 via-violet-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-fuchsia-400/20 to-violet-400/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl" />
                </div>

                <div className="relative w-full max-w-md top-1">
                    {/* Logo */}
                    <LogoAuth />


                    <Card className="backdrop-blur-sm bg-background/80 border-0 shadow-xl">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger
                                    value="login"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-500 data-[state=active]:to-violet-500 data-[state=active]:text-white"
                                >
                                    Login
                                </TabsTrigger>
                                <TabsTrigger
                                    value="signup"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-500 data-[state=active]:to-violet-500 data-[state=active]:text-white"
                                >
                                    Sign Up
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="login">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="flex items-center justify-center gap-2 font-bold font-thin font-light font-thin font-normal font-thin">
                                        <Heart className="h-5 w-5 text-fuchsia-500" />
                                        Welcome Back
                                    </CardTitle>
                                    <CardDescription>Sign in to your account to continue</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Social Login Buttons */}

                                    <SocialLoginButton disabled={loading} />
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <Separator className="w-full" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                                        </div>
                                    </div>
                                    {/* Login form */}
                                    <Login />


                                </CardContent>
                            </TabsContent>

                            <TabsContent value="signup">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="flex items-center justify-center gap-2">
                                        <Sparkles className="h-5 w-5 text-violet-500" />
                                        Join Vibe Social
                                    </CardTitle>
                                    <CardDescription>Create your account and start connecting</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Social Login Buttons */}


                                    <SocialLoginButton disabled={loading} />
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <Separator className="w-full" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground">Or create account with email</span>
                                        </div>
                                    </div>

                                    {/* Signup form */}
                                    <SignUp />

                                </CardContent>
                            </TabsContent>
                        </Tabs>
                    </Card>


                </div>
            </div>

        </>
    )
}

export default AuthFormLayout