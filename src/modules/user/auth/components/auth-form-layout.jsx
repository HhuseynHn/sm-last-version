import React from 'react'
import Login from './login'
import SignUp from './signup'

const AuthFormLayout = () => {


    return (

        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-50 via-violet-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-fuchsia-400/20 to-violet-400/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-full blur-3xl" />
                </div>

                <div className="relative w-full max-w-md">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 shadow-lg shadow-purple-500/25 mb-4">
                            <span className="text-2xl font-bold text-white">V</span>
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
                            Vibe Social
                        </h1>
                        <p className="text-muted-foreground mt-2">Connect with friends and share your moments</p>
                    </div>

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
                                    <CardTitle className="flex items-center justify-center gap-2">
                                        <Heart className="h-5 w-5 text-fuchsia-500" />
                                        Welcome Back
                                    </CardTitle>
                                    <CardDescription>Sign in to your account to continue</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {/* ------ Login ----- */}
                                    <Login />
                                    {/* ------ Login ----- */}

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
                                <CardContent>
                                    {/*  ----- SignUp ----- */}
                                    <SignUp />
                                    {/*  ----- SignUp ----- */}

                                </CardContent>
                            </TabsContent>
                        </Tabs>
                    </Card>

                    {/* Demo credentials */}
                    <div className="mt-6 p-4 bg-background/60 backdrop-blur-sm rounded-lg border text-center">
                        <p className="text-sm text-muted-foreground mb-2">Demo credentials:</p>
                        <p className="text-xs font-mono">Email: john@example.com</p>
                        <p className="text-xs font-mono">Password: password123</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthFormLayout