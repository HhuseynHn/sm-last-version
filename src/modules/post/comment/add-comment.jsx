import { Avatar, AvatarFallback, AvatarImage, Button, Textarea } from '@/common/components'
import { mockPosts } from '@/mock/mock-posts'
import { ImageIcon, Smile } from 'lucide-react'
import React, { useState } from 'react'

const AddComent = ({ postId }) => {
    const [commentText, setCommentText] = useState("")


    return (
        <>
            <div className="p-4 border-t">
                <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your profile" />
                        <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                            YP
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                        <div className="relative">
                            <Textarea
                                placeholder="Write a comment..."
                                className="min-h-[80px] resize-none pr-12 rounded-xl"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <div className="absolute right-3 bottom-3 flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                                    <Smile className="h-4 w-4 text-muted-foreground" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                                    <ImageIcon className="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                size="sm"
                                className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:opacity-90 text-white"
                                disabled={!commentText.trim()}
                            >
                                Post Comment
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sample Comments */}
                <div className="mt-4 space-y-3">
                    {[1, 2].map((commentId) => (
                        <div key={commentId} className="flex items-start gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${commentId}`} alt="Commenter" />
                                <AvatarFallback className="bg-muted">U{commentId}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="bg-muted rounded-xl px-3 py-2">
                                    <p className="text-xs font-medium">User {commentId}</p>
                                    <p className="text-xs">This is a great post! I really enjoyed reading about your experience.</p>
                                </div>
                                <div className="flex items-center gap-2 mt-1 text-xs">
                                    <button className="text-muted-foreground hover:text-foreground">Like</button>
                                    <button className="text-muted-foreground hover:text-foreground">Reply</button>
                                    <span className="text-muted-foreground">30m</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
 
        </>
    )
}

export default AddComent