import React, { useState } from 'react';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { Claim } from '../types';

// TEMPORARY: mockClaims removed to fix build
const [claims] = useState<Claim[]>([]); // Empty array to avoid crash

const ClaimsTracking: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredClaims = claims.filter((claim) => {
    const matchesSearch =
      claim.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.billNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      claim.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || claim.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Paid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Claims Tracking</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      {/* Filter section (same as before) */}
      {/* Claims table (same as before) */}

      {/* If no claims, show this */}
      {filteredClaims.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-2">No claims found</div>
          <div className="text-sm text-gray-400">Try adjusting your search or filter criteria</div>
        </div>
      )}
    </div>
  );
};

export default ClaimsTracking;
