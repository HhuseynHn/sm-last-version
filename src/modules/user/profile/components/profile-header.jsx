"use client"
import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Input } from '@/common/components'
import { Calendar, Camera, LinkIcon, MapPin, MessageSquare, Trash, UserPlus } from 'lucide-react'
import React, { useRef, useState } from 'react'
import MessageLayout from '../../chat/message-layout'

import SettingsLayout from '../settings/settings-layout'
import Stats from './statstic'

const ProfileHeader = () => {
    const [isFollowing, setIsFollowing] = useState(false)
    const [selectedProfileImage, setSelectedProfileImage] = useState("")
    const fileInputRef = useRef(null)
    const [userProfile, setUserProfile] = useState({
        name: "Alex Smith",
        bio: "Digital creator & photographer 📸 | Sharing life's beautiful moments | Coffee enthusiast ☕️",
        location: "San Francisco, CA",
        website: "alexsmith.com",
        email: "alex@example.com",
        phone: "+1 (555) 123-4567",
    })
    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedProfileImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (

        <>
            <div className="relative px-4 pb-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative -mt-16 mb-4 ">
                        <Avatar className="w-32 h-32 border-4 border-white shadow-lg z-20 group">
                            <AvatarImage src={selectedProfileImage} alt="Profile picture" />
                            <AvatarFallback className="text-2xl">AS</AvatarFallback>

                            <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                <Button variant="outline" size="sm" className="rounded-full w-5 h-5 p-0" onClick={() => fileInputRef.current?.click()}>
                                    <Camera className="w-4 h-4 cursor-pointer" />
                                    <Input
                                        id="cover-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        ref={fileInputRef}
                                        className="hidden"
                                    />
                                </Button>
                                <Button variant="outline" size="sm" className="rounded-full w-5 h-5 p-0" onClick={() => setSelectedProfileImage(null)}>

                                    <Trash className="w-4 h-4 cursor-pointer" />
                                </Button>
                            </div>
                        </Avatar>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <h1 className="text-2xl font-bold">{userProfile.name}</h1>
                                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                    Pro
                                </Badge>
                            </div>
                            <p className="text-gray-600 mb-3">{userProfile.bio}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {userProfile.location}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Joined March 2022
                                </div>
                                <div className="flex items-center gap-1">
                                    <LinkIcon className="w-4 h-4" />
                                    <a href="#" className="text-purple-600 hover:underline">
                                        {userProfile.website}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant={isFollowing ? "outline" : "default"}
                                onClick={() => setIsFollowing(!isFollowing)}
                                className={isFollowing ? "" : "bg-purple-600 hover:bg-purple-700"}
                            >
                                <UserPlus className="w-4 h-4 mr-2" />
                                {isFollowing ? "Following" : "Follow"}
                            </Button>

                            <MessageLayout />
                            {/* <ProfileSettings userProfile={userProfile} onProfileUpdate={setUserProfile} /> */}
                            <SettingsLayout />

                        </div>
                    </div>

                    <Stats />
                </div>
            </div>

        </>
    )
}

export default ProfileHeader