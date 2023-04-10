import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const students = [
        {
            id: 1,
            name: "John",
            physics: 78,
            chemistry: 82,
            math: 90
        },
        {
            id: 2,
            name: "Emma",
            physics: 92,
            chemistry: 89,
            math: 94
        },
        {
            id: 3,
            name: "Jacob",
            physics: 85,
            chemistry: 78,
            math: 80
        },
        {
            id: 4,
            name: "Olivia",
            physics: 91,
            chemistry: 87,
            math: 95
        },
        {
            id: 5,
            name: "William",
            physics: 79,
            chemistry: 83,
            math: 88
        },
        {
            id: 6,
            name: "Ava",
            physics: 87,
            chemistry: 91,
            math: 84
        },
        {
            id: 7,
            name: "Ethan",
            physics: 83,
            chemistry: 86,
            math: 82
        },
        {
            id: 8,
            name: "Sophia",
            physics: 95,
            chemistry: 96,
            math: 97
        },
        {
            id: 9,
            name: "Michael",
            physics: 88,
            chemistry: 90,
            math: 85
        },
        {
            id: 10,
            name: "Isabella",
            physics: 93,
            chemistry: 95,
            math: 91
        },
        {
            id: 11,
            name: "James",
            physics: 81,
            chemistry: 79,
            math: 83
        },
        {
            id: 12,
            name: "Mia",
            physics: 90,
            chemistry: 92,
            math: 89
        }
        ];
        
    return (
        <div>
            <LineChart 
                width = {1000}
                height = {300}
                data = {students}
                >
                <XAxis dataKey='name'/>
                <YAxis/>
                <Line type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
                <Line type="monotone" dataKey="math" stroke="red" />
            </LineChart>
        </div>
    );
};

export default Chart;