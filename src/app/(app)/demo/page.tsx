'use client';

import DashboardClient from '../dashboard/DashboardClient';

const now = new Date();

function addDays(date: Date, days: number) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

function setTime(date: Date, hours: number, minutes: number) {
    const d = new Date(date);
    d.setHours(hours, minutes, 0, 0);
    return d;
}

const demoShifts = [
    {
        id: 'shift-1',
        title: 'Morgenvakt',
        startsAt: setTime(addDays(now, 1), 8, 0),
        endsAt: setTime(addDays(now, 1), 14, 0),
        location: 'Butikken Grünerløkka',
        notes: null,
        status: 'PLANNED',
        assignmentId: 'a1',
        assignmentStatus: 'ASSIGNED',
        assignments: [
            { user: { id: 'demo-user', name: 'Emma' } },
            { user: { id: 'u2', name: 'Jonas' } },
        ],
    },
    {
        id: 'shift-2',
        title: 'Kveldsvakt',
        startsAt: setTime(addDays(now, 2), 14, 0),
        endsAt: setTime(addDays(now, 2), 21, 0),
        location: 'Butikken Majorstuen',
        notes: 'Husk varetelling',
        status: 'PLANNED',
        assignmentId: 'a2',
        assignmentStatus: 'ASSIGNED',
        assignments: [
            { user: { id: 'demo-user', name: 'Emma' } },
        ],
    },
    {
        id: 'shift-3',
        title: 'Helgevakt',
        startsAt: setTime(addDays(now, 5), 10, 0),
        endsAt: setTime(addDays(now, 5), 18, 0),
        location: 'Butikken Grünerløkka',
        notes: null,
        status: 'PLANNED',
        assignmentId: 'a3',
        assignmentStatus: 'ASSIGNED',
        assignments: [
            { user: { id: 'demo-user', name: 'Emma' } },
            { user: { id: 'u3', name: 'Sara' } },
            { user: { id: 'u4', name: 'Kristian' } },
        ],
    },
];

export default function DemoPage() {
    return (
        <DashboardClient
            shifts={demoShifts as any}
            userName="Emma"
            userId="demo-user"
            userRole="ADMIN"
        />
    );
}
