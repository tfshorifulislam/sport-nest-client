import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">

            <div className="flex flex-col items-center">

              
                <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-emerald-600"></div>

               
                <p className="mt-5 text-sm font-medium tracking-wide text-slate-500">
                    Loading SportNest...
                </p>
            </div>
        </div>
    );
};

export default loading;