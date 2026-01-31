"use client"
import React, { useState } from 'react'

const items = [
    { id: 1, text: "Read a file", type: "file" },
    { id: 2, text: "Write to a directory", type: "file" },
    { id: 3, text: "Execute a script", type: "file" },
    { id: 4, text: "Install software", type: "os" },
    { id: 5, text: "Create user accounts", type: "os" },
    { id: 6, text: "Reboot the system", type: "os" },
];

const DragGame = () => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [fileZone, setFileZone] = useState([]);
    const [osZone, setOsZone] = useState([]);

    const onDragStart = (item) => {
        setDraggedItem(item);
    };

    const onDrop = (zoneType) => {
        if (!draggedItem) return;

        if (zoneType === "file") {
            setFileZone((prev) => [...prev, draggedItem]);
        } else {
            setOsZone((prev) => [...prev, draggedItem]);
        }
        setDraggedItem(null);
    };

    const isCorrect = (item, zoneType) => item.type === zoneType;

    const renderZone = (title, zoneType, items, setItems) => (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(zoneType)}
            className="w-full min-h-50 rounded-2xl border border-dashed p-4 shadow-md"
        >
            <h2 className="mb-2 text-lg font-semibold">{title}</h2>
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`mb-2 rounded-xl p-2 text-sm shadow ${isCorrect(item, zoneType)
                        ? "bg-green-100"
                        : "bg-red-100"
                        }`}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );

    return (
        <div className="mx-auto max-w-4xl p-6">
            <h1 className="mb-4 text-xl font-bold text-center">
                File Permissions vs OS Privileges
            </h1>


            <p className="mb-6 text-lg text-center text-gray-900">
                An employee of your organization is trying to...
            </p>


            <div className="mb-6 grid grid-cols-2 gap-4">
                {items
                    .filter(
                        (item) =>
                            !fileZone.includes(item) && !osZone.includes(item)
                    )
                    .map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={() => onDragStart(item)}
                            className="cursor-move rounded-xl bg-white p-3 shadow"
                        >
                            {item.text}
                        </div>
                    ))}
            </div>


            <div className="grid grid-cols-2 gap-6">
                {renderZone("File Permissions", "file", fileZone, setFileZone)}
                {renderZone("OS Rights / Privileges", "os", osZone, setOsZone)}
            </div>
        </div>
    )
}

export default DragGame