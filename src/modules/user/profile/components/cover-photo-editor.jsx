"use client"
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components'
import { Camera, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const CoverPhotoEditor = ({ currentCover, onCoverChange ,onOpenChange}) => {

    const gradientOptions = [
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    ]
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCover, setSelectedCover] = useState(currentCover || "")

    useEffect(() => {
        setSelectedCover(currentCover)
    }, [currentCover])


    const handleRemove = () => {
        setSelectedCover("")
        onCoverChange("")
        setIsOpen(false)
    }
    const handleSave = () => {
        onCoverChange(selectedCover)
        setIsOpen(false)
    }
    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedCover(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (

        <>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="secondary" size="sm" className="absolute bottom-4 right-4" >
                        <Camera className="w-4 h-4 mr-2" />
                        Edit Cover
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Edit Cover Photo</DialogTitle>
                        <DialogDescription>Upload a new photo or choose from our gradient collection</DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="upload" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="upload">Upload Photo</TabsTrigger>
                            <TabsTrigger value="gradients">Gradients</TabsTrigger>
                        </TabsList>

                        <TabsContent value="upload" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="cover-upload">Choose a photo</Label>
                                <Input
                                    id="cover-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="cursor-pointer"
                                />
                            </div>

                            {selectedCover && !selectedCover.startsWith("linear-gradient") && (
                                <div className="space-y-2">
                                    <Label>Preview</Label>
                                    <div className="w-full h-32 rounded-lg overflow-hidden border">
                                        <img
                                            src={selectedCover || "/placeholder.svg"}
                                            alt="Cover preview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value="gradients" className="space-y-4">
                            <div className="grid grid-cols-4 gap-3">
                                {gradientOptions.map((gradient, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedCover(gradient)}
                                        className={`w-full h-16 rounded-lg border-2 transition-all ${selectedCover === gradient
                                            ? "border-purple-500 ring-2 ring-purple-200"
                                            : "border-gray-200 hover:border-gray-300"
                                            }`}
                                        style={{ background: gradient }}
                                    />
                                ))}
                            </div>

                            {selectedCover && selectedCover.startsWith("linear-gradient") && (
                                <div className="space-y-2">
                                    <Label>Preview</Label>
                                    <div className="w-full h-32 rounded-lg border" style={{ background: selectedCover }} />
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>

                    <DialogFooter className="flex justify-between">
                        <Button variant="outline" onClick={handleRemove} className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remove Cover
                        </Button>
                        <div className="space-x-2">
                            <Button variant="outline" onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
                                Save Changes
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default CoverPhotoEditor