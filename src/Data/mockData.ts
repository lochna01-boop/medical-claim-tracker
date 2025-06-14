import { Employee, Claim, Document, ClaimPerson } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    maidNo: 'EMP001',
    name: 'Aarav Sharma',
    phoneNo: '+91-9876543210',
    type: 'Officer',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    maidNo: 'EMP002',
    name: 'Diya Mehta',
    phoneNo: '+91-9823456789',
    type: 'Associate',
    createdAt: new Date('2024-01-20')
  },
  {
    id: '3',
    maidNo: 'EMP003',
    name: 'Dr. Raghav Verma',
    phoneNo: '+91-9811122233',
    type: 'Consultant',
    createdAt: new Date('2024-01-25')
  }
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    header: 'Medical Consultation',
    amount: 1500.00, // ₹1500
    doctorName: 'Dr. Nandini Rao',
    enteredBy: 'Admin',
    enteredAt: new Date('2024-02-01T10:30:00'),
    pages: 2
  },
  {
    id: '2',
    header: 'Lab Tests',
    amount: 850.00, // ₹850
    doctorName: 'Dr. Anil Kapoor',
    enteredBy: 'Clerk',
    enteredAt: new Date('2024-02-01T14:15:00'),
    pages: 1
  }
];

export const mockClaims: Claim[] = [
  {
    id: '1',
    employeeId: '1',
    employee: mockEmployees[0],
    claimPerson: {
      id: '1',
      name: 'Aarav Sharma',
      relation: 'SELF',
      maidNo: 'EMP001'
    },
    hospital: 'Apollo Hospital, Delhi',
    billNo: 'BILL-2024-001',
    billDate: new Date('2024-02-01'),
    billAmount: 2350.00, // ₹2350
    documents: mockDocuments,
    status: 'Under Review',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-02')
  },
  {
    id: '2',
    employeeId: '2',
    employee: mockEmployees[1],
    claimPerson: {
      id: '2',
      name: 'Aarohi Mehta',
      relation: 'DAUGHTER 1',
      maidNo: 'DEP002'
    },
    hospital: 'Fortis Hospital, Mumbai',
    billNo: 'BILL-2024-002',
    billDate: new Date('2024-02-03'),
    billAmount: 4500.00, // ₹4500
    documents: [mockDocuments[0]],
    status: 'Approved',
    createdAt: new Date('2024-02-03'),
    updatedAt: new Date('2024-02-04')
  }
];
