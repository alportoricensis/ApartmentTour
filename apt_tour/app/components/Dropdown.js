'use client';

import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from '@mui/material';

export default function Dropdown({ currModel, setModel }) {
    const [selectedRoom, setSelectedRoom] = useState("Living Room #1");

    // Update selectedRoom if currModel changes (e.g. via waypoint)
    useEffect(() => {
        switch (currModel) {
            case "./Living_Room_Photosphere_1.glb":
                setSelectedRoom("Living Room #1");
                break;
            case "./Living_Room_Photosphere_2.glb":
                setSelectedRoom("Living Room #2");
                break;
            case "./Room_Photosphere.glb":
                setSelectedRoom("Bedroom");
                break;
            default:
                setSelectedRoom(""); // optional fallback
        }
    }, [currModel]);

    const handleChange = (event) => {
        const val = event.target.value;

        switch (val) {
            case "Living Room #1":
                setSelectedRoom("Living Room #1")
                setModel("./Living_Room_Photosphere_1.glb")
                break;
            case "Living Room #2":
                setSelectedRoom("Living Room #2")
                setModel("./Living_Room_Photosphere_2.glb")
                break;
            case "Bedroom":
                setSelectedRoom("Bedroom")
                setModel("./Room_Photosphere.glb")
                break;
        }
    }

    return (
        <Select
            value={selectedRoom}
            fullWidth
            placeholder={"Change Photosphere"}
            sx={{
                height: 50,
                bgcolor: "#1e201e",
                color: "white",
                mb: 2,
                '& .MuiSvgIcon-root': {
                    color: "white"
                }
            }}
            onChange={handleChange}
            MenuProps={{
                PaperProps: {
                    sx: {
                        bgcolor: "#1e201e",
                        color: "white",
                        fontFamily: "font-fragment"
                    }
                }
            }}
        >
            <MenuItem value="Living Room #1">Living Room #1</MenuItem>
            <MenuItem value="Living Room #2">Living Room #2</MenuItem>
            <MenuItem value="Bedroom">Bedroom</MenuItem>
        </Select>
    )
}