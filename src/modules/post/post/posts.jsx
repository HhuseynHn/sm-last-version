"use client"
import { Avatar, AvatarFallback, AvatarImage, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/common/components'
import { mockPosts } from '@/mock/mock-posts'
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Share2, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'
import AddComent from '../comment/add-comment'

const Posts = () => {
  const [posts, setPosts] = useState(mockPosts)
  const [activeCommentId, setActiveCommentId] = useState(null)

  const handleSave = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            saved: !post.saved
          }
        }
      })
    )
  }
  const togleComment = (postId) => {
    setActiveCommentId((prev) => prev === postId ? null : postId)
    console.log("klk", activeCommentId, postId)
  }


  return (
    <>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-background rounded-xl shadow-sm border overflow-hidden">
            {/* Post Header */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                    {post.user.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-sm">{post.user.name}</p>
                    <span className="text-xs text-muted-foreground">{post.user.username}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{post.timePosted}</p>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                  <DropdownMenuItem className="rounded-lg cursor-pointer">Save post</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg cursor-pointer">Hide post</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg cursor-pointer">Follow {post.user.name}</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="rounded-lg cursor-pointer text-red-500">Report post</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-sm whitespace-pre-line">{post.content}</p>
            </div>

            {/* Post Image (if any) */}
            {post.image && (
              <div className="relative aspect-video sm:aspect-auto sm:max-h-[500px] overflow-hidden bg-muted">
                <img src={post.image || ""} alt="Post content" className="w-full h-full object-cover" />
              </div>
            )}

            {/* Post Stats */}
            <div className="px-4 py-2 flex items-center justify-between text-xs text-muted-foreground border-t border-b">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 flex items-center justify-center">
                    <ThumbsUp className="h-3 w-3 text-white" />
                  </div>
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <Heart className="h-3 w-3 text-white" />
                  </div>
                </div>
                <span>{post.likes} likes</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="hover:underline">{post.comments} comments</button>
                <button className="hover:underline">{post.shares} shares</button>
              </div>
            </div>

            {/* Post Actions */}
            <div className="px-2 py-1 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-lg flex-1 ${post.liked ? "text-violet-500" : ""}`}
                onClick={() => handleLike(post.id)}
              >
                <Heart className={`h-5 w-5 mr-1 ${post.liked ? "fill-violet-500" : ""}`} />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="rounded-lg flex-1" onClick={() => togleComment(post.id)} >
                <MessageCircle className="h-5 w-5 mr-1" />
                Comment
              </Button>
              <Button variant="ghost" size="sm" className="rounded-lg flex-1">
                <Share2 className="h-5 w-5 mr-1" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-lg flex-1 ${post.saved ? "text-violet-500" : ""}`}
                onClick={() => handleSave(post.id)}
              >
                <Bookmark className={`h-5 w-5 mr-1 ${post.saved ? "fill-violet-500" : ""}`} />
                Save
              </Button>
            </div>

            {/* Comment Section */}
            {activeCommentId === post.id && (<AddComent postId={post.id} />)}

          </div>
        ))}
      </div>



    </>
  )
}

export default Posts