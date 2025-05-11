import React, { useContext } from 'react';
import { Folder } from '@mui/icons-material';
import { userContext } from '../Context/userContext';

const LeftSideBar = () => {
  const { setSelected, setSelectedSem } = useContext(userContext);
  const folders = ['BCA', 'MBA', 'BBA', 'MCA'];

  return (
    <div className="w-64 min-h-screen bg-white shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Courses</h2>
      <div className="space-y-2">
        {folders.map((folder) => (
          <div
            key={folder}
            className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => {setSelected(folder); setSelectedSem(null)}}
          >
            <Folder className="text-blue-600 mr-2" />
            <span className="text-gray-700">{folder}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
