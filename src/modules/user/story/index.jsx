"use client"
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/common/components'
import { mockStories } from '@/mock/mock-story-data'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const Stories = () => {
    const scrollRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    // console.log("ScrollRef=>", scrollRef)
    // console.log("scrollWdith=>", scrollWidth)
    // console.log("clientWidth=>", clientWidth)

    const handleScroll = () => {

        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current
            const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }

    }


    useEffect(() => {
        handleScroll()
    }, [])

    return (
        <>
            <div className="relative max-w-screen-lg   bg-background rounded-xl shadow-sm border p-2">
                <div className="flex items-center justify-between mb-0.5">
                    <h2 className="text-sm font-medium">Stories</h2>
                    <Button variant="link" className="text-sm p-0 h-auto text-violet-500">
                        Watch all
                    </Button>
                </div>

                <div className="relative ">
                    {showLeftArrow && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Scroll left</span>
                        </Button>
                    )}

                    <div ref={scrollRef} className="flex space-x-4 overflow-x-auto pb-1 scrollbar-hide" onScroll={handleScroll}>
                        {mockStories.map((story) => (
                            <div key={story.id} className="flex flex-col items-center  space-y-1 flex-shrink-0">
                                <div className="relative">
                                    <div
                                        className={`absolute inset-0 rounded-full ${story.hasUnseenStory
                                            ? "bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 p-[1px]"
                                            : story.isUser
                                                ? "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 p-[1px]"
                                                : ""
                                            }`}
                                    >
                                        <div className="absolute inset-[2px] bg-background rounded-full"></div>
                                    </div>
                                    <Avatar className="h-16 w-16 border-2 border-background relative">
                                        <AvatarImage src={story.image || "/placeholder.svg"} alt={story.username} />
                                        <AvatarFallback className="bg-muted">{story.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    {story.isUser && (
                                        <div className="absolute bottom-0 right-0 bg-violet-500 rounded-full h-6 w-6 flex items-center justify-center border-2 border-background">
                                            <Plus className="h-3 w-3 text-white cursor-pointer" />
                                        </div>
                                    )}
                                </div>
                                <span className="text-xs truncate w-16 text-center">{story.username}</span>
                            </div>
                        ))}
                    </div>

                    {showRightArrow && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-md"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Scroll right</span>
                        </Button>
                    )}
                </div>
            </div>

        </>
    )
}

export default Stories