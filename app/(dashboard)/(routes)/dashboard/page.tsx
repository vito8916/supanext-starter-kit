import React from 'react';

const DashboardPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-card/50" />
                <div className="aspect-video rounded-xl bg-card/50" />
                <div className="aspect-video rounded-xl bg-card/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
    );
};

export default DashboardPage;