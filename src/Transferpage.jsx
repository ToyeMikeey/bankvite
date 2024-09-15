import React from 'react';

function TransfersPage({ onBack }) {
    return (
        <div className="max-w-md mx-auto bg-white min-h-screen p-4">
            <div className="flex items-center mb-6">
                <button onClick={onBack} className="text-purple-700 mr-4">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="text-2xl font-bold">Transfers</h1>
            </div>
            {/* Add your design logic here to replicate image3.png */}
            <div className="p-4">
                <h2 className="text-xl font-bold">Make a Transfer</h2>
                {/* Additional form elements, buttons, etc. */}
            </div>
        </div>
    );
}

export default TransfersPage;
