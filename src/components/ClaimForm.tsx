import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const ClaimForm: React.FC = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employeeId: '',
    claimPersonName: '',
    relation: '',
    relationMaidNo: '',
    hospital: '',
    billNo: '',
    billDate: '',
    billAmount: '',
    documents: [
      {
        header: '',
        amount: '',
        doctorName: '',
        pages: '',
      }
    ]
  });

  const relationOptions = [
    'SELF', 'WIFE', 'SON 1', 'SON 2', 'DAUGHTER 1', 'DAUGHTER 2', 'FATHER', 'MOTHER'
  ];

  useEffect(() => {
    // Fetch employee data from backend
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error('Failed to fetch employees:', err));
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDocumentChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.map((doc, i) =>
        i === index ? { ...doc, [field]: value } : doc
      )
    }));
  };

  const addDocument = () => {
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, { header: '', amount: '', doctorName: '', pages: '' }]
    }));
  };

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('/api/claims', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to submit');
        return res.json();
      })
      .then(data => {
        alert('Claim submitted successfully!');
        console.log(data);
        // Optionally reset form
      })
      .catch(err => {
        console.error(err);
        alert('Error submitting claim. Please try again.');
      });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900">Submit New Claim</h2>
          <p className="text-gray-600 mt-1">Fill in the details to submit a medical insurance claim</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Employee Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Employee Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
                <select
                  value={formData.employeeId}
                  onChange={(e) => handleInputChange('employeeId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Employee</option>
                  {employees.map((emp: any) => (
                    <option key={emp.employee_id} value={emp.employee_id}>
                      {emp.name} - {emp.maid_no} ({emp.employee_type})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Claim Person Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Claim Person Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Person Name</label>
                <input
                  type="text"
                  value={formData.claimPersonName}
                  onChange={(e) => handleInputChange('claimPersonName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relation</label>
                <select
                  value={formData.relation}
                  onChange={(e) => handleInputChange('relation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Relation</option>
                  {relationOptions.map(rel => (
                    <option key={rel} value={rel}>{rel}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relation MAID No.</label>
                <input
                  type="text"
                  value={formData.relationMaidNo}
                  onChange={(e) => handleInputChange('relationMaidNo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Bill Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Bill Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <inputField label="Hospital" value={formData.hospital} onChange={(e) => handleInputChange('hospital', e.target.value)} />
              <inputField label="Bill No." value={formData.billNo} onChange={(e) => handleInputChange('billNo', e.target.value)} />
              <inputField label="Bill Date" type="date" value={formData.billDate} onChange={(e) => handleInputChange('billDate', e.target.value)} />
              <inputField label="Bill Amount" type="number" step="0.01" value={formData.billAmount} onChange={(e) => handleInputChange('billAmount', e.target.value)} />
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Documents</h3>
              <button
                type="button"
                onClick={addDocument}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Document</span>
              </button>
            </div>

            {formData.documents.map((doc, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-md font-medium text-gray-800">Document {index + 1}</h4>
                  {formData.documents.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDocument(index)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <inputField label="Document Header" value={doc.header} onChange={(e) => handleDocumentChange(index, 'header', e.target.value)} />
                  <inputField label="Amount" type="number" step="0.01" value={doc.amount} onChange={(e) => handleDocumentChange(index, 'amount', e.target.value)} />
                  <inputField label="Doctor Name" value={doc.doctorName} onChange={(e) => handleDocumentChange(index, 'doctorName', e.target.value)} />
                  <inputField label="No. of Pages" type="number" value={doc.pages} onChange={(e) => handleDocumentChange(index, 'pages', e.target.value)} />
                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-6 border-t border-gray-100">
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Submit Claim</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable inputField component inside the same file
const inputField = ({ label, type = 'text', value, onChange, step }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      step={step}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      required
    />
  </div>
);

export default ClaimForm;
