import {  Badge, Card, CardContent, CardHeader, Separator, Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components'
import PostLayout from '@/modules/post/post-layout'
import {  LinkIcon, MapPin } from 'lucide-react'
import React from 'react'

const ContentTabs = () => {
    return (


        <>
            <div className="max-w-4xl mx-auto px-4">
                    <Tabs defaultValue="posts" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="posts">Posts</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="photos">Photos</TabsTrigger>
                        <TabsTrigger value="videos">Videos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="posts" className="space-y-6">
                        {/* Posts */}
                        <PostLayout />

                    </TabsContent>

                    <TabsContent value="about" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <h3 className="text-lg font-semibold">About Alex</h3>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-2">Bio</h4>
                                    <p className="text-gray-600">
                                        Passionate digital creator and photographer with over 5 years of experience. I love capturing life's
                                        beautiful moments and sharing them with the world. When I'm not behind the camera, you can find me
                                        exploring new hiking trails or trying out the latest coffee shops in the city.
                                    </p>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">Interests</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Photography</Badge>
                                        <Badge variant="outline">Hiking</Badge>
                                        <Badge variant="outline">Coffee</Badge>
                                        <Badge variant="outline">Travel</Badge>
                                        <Badge variant="outline">Nature</Badge>
                                        <Badge variant="outline">Technology</Badge>
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">Contact Info</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            San Francisco, California
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <LinkIcon className="w-4 h-4 text-gray-400" />
                                            <a href="#" className="text-purple-600 hover:underline">
                                                www.alexsmith.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="photos" className="space-y-6 w-[870px]">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                                    <img
                                        src={`/placeholder.svg?height=600&width=600`}
                                        alt={`Photo ${i + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="videos" className="space-y-6 w-[870px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                                    <img
                                        src={`/placeholder.svg?height=200&width=350`}
                                        alt={`Video ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                            <div className="w-0 h-0 border-l-[8px] border-l-gray-800 border-y-[6px] border-y-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

        </>
    )
}

export default ContentTabs