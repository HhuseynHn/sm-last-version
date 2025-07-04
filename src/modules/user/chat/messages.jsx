import React from 'react'

const Messages = () => {
    return (

        <>
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div key={message.id}>
                            {/* Show date separator if needed */}
                            {index === 0 && (
                                <div className="flex items-center justify-center mb-4">
                                    <Badge variant="secondary" className="text-xs">
                                        Today
                                    </Badge>
                                </div>
                            )}

                            <div className={`flex ${message.isOwn ? "justify-end" : "justify-start"} gap-2`}>
                                {!message.isOwn && (
                                    <Avatar className="w-8 h-8 mt-1">
                                        <AvatarImage src={recipientAvatar || "/placeholder.svg?height=32&width=32"} alt={recipientName} />
                                        <AvatarFallback className="text-xs">{recipientName.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                )}

                                <div className={`max-w-[70%] ${message.isOwn ? "order-first" : ""}`}>
                                    <div
                                        className={`rounded-2xl px-4 py-2 ${message.isOwn ? "bg-purple-600 text-white ml-auto" : "bg-gray-100 text-gray-900"
                                            }`}
                                    >
                                        {message.type === "text" ? (
                                            <p className="text-sm">{message.content}</p>
                                        ) : (
                                            <div className="space-y-2">
                                                <p className="text-sm">{message.content}</p>
                                                <img
                                                    src={message.imageUrl || "/placeholder.svg"}
                                                    alt="Shared image"
                                                    className="rounded-lg max-w-full h-auto"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <p className={`text-xs text-gray-500 mt-1 ${message.isOwn ? "text-right" : "text-left"}`}>
                                        {message.timestamp}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </>
    )
}

export default Messages