import { Button } from '@/common/components'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import FacebookIcon from '../icons/facebook-icon'
import GoogleIcon from '../icons/google-icon'
import { useAuth } from './auth-provider'

const SocialLoginButton = ({ disabled = false }) => {
    const { loginWithGoogle, loginWithFacebook } = useAuth()
    const [facebookLoading, setFacebookLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)

    const router = useRouter()
    const handleGoogleLogin = async () => {
        setGoogleLoading(true)
        const result = await loginWithGoogle
        if (result.success) {
            router.push("/")
        }
        setGoogleLoading(false)
    }

    const handleFacebookLogin = async () => {
        setFacebookLoading(true)
        const result = await loginWithFacebook
        if (result.success) {
            router.push("/")
        }
        setFacebookLoading(false)
    }

    return (
        <>
            <div className="space-y-3">
                <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-all duration-200 hover:shadow-md"
                    onClick={handleGoogleLogin}
                    disabled={disabled || googleLoading || facebookLoading}
                >
                    {googleLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
                            Connecting to Google...
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <GoogleIcon className="h-5 w-5" />
                            Continue with Google
                        </div>
                    )}
                </Button>

                <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-all duration-200 hover:shadow-md"
                    onClick={handleFacebookLogin}
                    disabled={disabled || googleLoading || facebookLoading}
                >
                    {facebookLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
                            Connecting to Facebook...
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <FacebookIcon className="h-5 w-5" />
                            Continue with Facebook
                        </div>
                    )}
                </Button>
            </div>
        </>
    )
}

export default SocialLoginButton