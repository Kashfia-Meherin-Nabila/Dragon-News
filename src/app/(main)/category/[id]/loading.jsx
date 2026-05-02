import React from 'react';

const loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
  <span className="loading loading-infinity text-orange-500 scale-[2.5]"></span>
</div>
    );
};

export default loading;