import React, { useContext } from 'react';
import { Folder } from '@mui/icons-material';
import { userContext } from '../Context/userContext';
import SemesterContent from './SemesterContent';

const CourseContent = () => {
  const { selected, data, selectedSem, setSelectedSem } = useContext(userContext);
  
  if (!selected) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-lg">Please select a course</p>
      </div>
    );
  }

  const selectedCourse = data.find(course => course.courseName === selected);

  if (!selectedCourse) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 text-lg">Course not found</p>
      </div>
    );
  }

  if (selectedSem) {
    return <SemesterContent />;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {selected} Course Content
      </h2> 
      <div className="grid grid-cols-2 gap-6">
        {selectedCourse.semesters.map((semester,index) => (
          <div
            key={semester.semester}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedSem(semester.semester)}
          >
            <div className="flex items-center space-x-3">
              <Folder className="text-blue-600" />
              <h3 className="text-lg font-medium text-gray-700">
                Semester {semester.semester}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent; 