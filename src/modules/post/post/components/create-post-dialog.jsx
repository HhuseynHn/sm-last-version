"use client"
import { Avatar, AvatarFallback, AvatarImage, Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, Tabs, TabsContent, TabsList, TabsTrigger, Textarea } from '@/common/components'
import { Camera, FileText, ImageIcon, ImagesIcon, MapPin, Smile, Sparkles, Users } from 'lucide-react'
import React, { useState } from 'react'
import { Globe } from './globe'

const CreatePostDialog = () => {
    const [selectedTab, setSelectedTab] = useState("Post")
    const [isCompact, setIsCompact] = useState(true)
    const [postText, setPostText] = useState("")
    const handleFocus = () => {
        setIsCompact(false)
    }
    const handleCancel = () => {
        setIsCompact(true)

    }

    return (
        <>

            <div className="flex-1">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-muted-foreground font-normal h-10 px-4 rounded-full border-muted"
                        >
                            What's on your mind?
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] p-0 gap-0 rounded-xl">
                        <DialogHeader className="p-4 text-center border-b">
                            <DialogTitle>Create Post</DialogTitle>
                        </DialogHeader>

                        <Tabs defaultValue="post" className="w-full" onValueChange={setSelectedTab}>
                            <TabsList className="w-full grid grid-cols-3 rounded-none border-b h-auto p-0">
                                <TabsTrigger
                                    value="post"
                                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-violet-500 data-[state=active]:shadow-none rounded-none py-3"
                                >
                                    <FileText className="h-5 w-5 mr-2" />
                                    Post
                                </TabsTrigger>
                                <TabsTrigger
                                    value="photo"
                                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-violet-500 data-[state=active]:shadow-none rounded-none py-3"
                                >
                                    <ImageIcon className="h-5 w-5 mr-2" />
                                    Photo
                                </TabsTrigger>
                                <TabsTrigger
                                    value="story"
                                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-violet-500 data-[state=active]:shadow-none rounded-none py-3"
                                >
                                    <Camera className="h-5 w-5 mr-2" />
                                    Story
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="post" className="p-4 space-y-4 mt-0">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your profile" />
                                        <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                                            YP
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-sm">John Doe</p>
                                        <div className="flex items-center gap-1">
                                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                                <Globe className="h-3 w-3 mr-1" />
                                                Public
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <Textarea
                                    placeholder="What's on your mind?"
                                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-lg"
                                    rows={5}
                                    value={postText}
                                    onChange={(e) => setPostText(e.target.value)}
                                />

                                <div className="border rounded-lg p-3 flex flex-wrap gap-2">
                                    <p className="w-full text-sm font-medium mb-1">Add to your post</p>
                                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                                        <ImagesIcon className="h-5 w-5 text-green-500" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                                        <Users className="h-5 w-5 text-blue-500" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                                        <Smile className="h-5 w-5 text-yellow-500" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                                        <MapPin className="h-5 w-5 text-red-500" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                                        <Sparkles className="h-5 w-5 text-purple-500" />
                                    </Button>
                                </div>

                                <Button
                                    className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:opacity-90 text-white"
                                    disabled={!postText.trim()}
                                >
                                    Post
                                </Button>
                            </TabsContent>

                            <TabsContent value="photo" className="p-4 space-y-4 mt-0">
                                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                                        <ImageIcon className="h-6 w-6 text-violet-500" />
                                    </div>
                                    <h3 className="font-medium">Add Photos</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Share photos with your friends</p>
                                    <Button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:opacity-90 text-white">
                                        Upload Photos
                                    </Button>
                                </div>
                            </TabsContent>

                            <TabsContent value="story" className="p-4 space-y-4 mt-0">
                                <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                                        <Camera className="h-6 w-6 text-violet-500" />
                                    </div>
                                    <h3 className="font-medium">Create a Story</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Share moments that disappear after 24 hours</p>
                                    <Button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:opacity-90 text-white">
                                        Create Story
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </DialogContent>
                </Dialog>
            </div>


        </>
    )
}

export default CreatePostDialog