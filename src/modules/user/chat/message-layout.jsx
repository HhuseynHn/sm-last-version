"use client"
import { Button, Dialog, DialogContent, DialogTrigger } from '@/common/components'
import { mockMessage } from '@/mock/mock-message'
import { MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import MessagesHeader from './messages-header'

const MessageLayout = () => {
    const [isOpen, setIsOpen] = useState()
    const [messages, setMessages] = useState(mockMessage)
    return (

        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                    </Button>
                </DialogTrigger>
                {/* <DialogContent className="sm:max-w-[500px] h-[600px] p-0 flex flex-col"> */}

                    {/* Header */}
                    {/* <MessagesHeader /> */}
                    {/*  Messages*/}
                    {/*  Message input*/}

                {/* </DialogContent> */}
            </Dialog>
        </>
    )
}

export default MessageLayout