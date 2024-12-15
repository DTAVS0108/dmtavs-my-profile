import React from 'react';
import CustomTable from '../../components/table.tsx';
import { Box } from '@mui/material';

interface Column {
  key: string;
  label: string;
  align?: 'left' | 'right' | 'center';
}

// Updated columns to reflect user information
const columns: Column[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', align: 'left' },
  { key: 'role', label: 'Role', align: 'center' },
  { key: 'status', label: 'Status', align: 'right' },
];

// Sample user data
const data = [
  { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
  { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Moderator', status: 'Active' },
  { name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User', status: 'Pending' },
  { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Inactive' },
  { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Moderator', status: 'Active' },
  { name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User', status: 'Pending' },
];

function Team() {
  return (
    <React.Fragment>
      <Box className="m-4">
        <CustomTable columns={columns} data={data} />
      </Box>
    </React.Fragment>
  );
}

export default Team;
