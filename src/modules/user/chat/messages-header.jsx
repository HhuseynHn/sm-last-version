import { Avatar, AvatarFallback, AvatarImage, Button, DialogHeader, DialogTitle } from '@/common/components'
import { Info, Phone, Video } from 'lucide-react'
import React from 'react'

const MessagesHeader = () => {
    return (


        <>
            <DialogHeader className="p-4 pb-2 border-b">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Avatar className="w-10 h-10">
                                <AvatarImage src={recipientAvatar || "/placeholder.svg?height=40&width=40"} alt={recipientName} />
                                <AvatarFallback>{recipientName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {isOnline && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                        </div>
                        <div>
                            <DialogTitle className="text-base">{recipientName}</DialogTitle>
                            <p className="text-sm text-gray-500">{isOnline ? "Active now" : "Last seen 2h ago"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Video className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Info className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </DialogHeader>
        </>
    )
}

export default MessagesHeader