import { Avatar, AvatarFallback, AvatarImage, Button } from '@/common/components'
import { Calendar, ImageIcon, Smile, Video } from 'lucide-react'
import React from 'react'
import CreatePostDialog from './components/create-post-dialog'

const CreatePost = () => {
    return (
        <>

            <div className="bg-background rounded-xl shadow-sm border p-4">
                <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your profile" />
                        <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">YP</AvatarFallback>
                    </Avatar>
                    <CreatePostDialog />
                </div>

                <div className="grid grid-cols-8 gap-6  mt-4">
                    <Button variant="ghost" className="rounded-lg h-10 text-xs">
                        <ImageIcon className="h-4 w-4 mr-1 text-green-500" />
                        Photo
                    </Button>
                    <Button variant="ghost" className="rounded-lg h-10 text-xs">
                        <Video className="h-4 w-4 mr-1 text-red-500" />
                        Video
                    </Button>
                    <Button variant="ghost" className="rounded-lg h-10 text-xs">
                        <Smile className="h-4 w-4 mr-1 text-yellow-500" />
                        Feeling
                    </Button>
                    <Button variant="ghost" className="rounded-lg h-10 text-xs">
                        <Calendar className="h-4 w-4 mr-1 text-blue-500" />
                        Event
                    </Button>
                </div>
            </div>






        </>
    )
}

export default CreatePost




