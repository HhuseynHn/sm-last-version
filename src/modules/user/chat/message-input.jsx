import React from 'react'

const MessageInput = () => {
    return (


        <>
            <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-500">
                        <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-500">
                        <ImageIcon className="w-4 h-4" />
                    </Button>
                    <div className="flex-1 relative">
                        <Input
                            ref={inputRef}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                            className="pr-10 rounded-full"
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-500"
                        >
                            <Smile className="w-4 h-4" />
                        </Button>
                    </div>
                    <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                        size="icon"
                        className="w-8 h-8 bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                    >
                        <Send className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default MessageInput