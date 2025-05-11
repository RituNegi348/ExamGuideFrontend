import React, { useContext } from 'react';
import { ArrowBack, PictureAsPdf } from '@mui/icons-material';
import { userContext } from '../Context/userContext';

const SemesterContent = () => {
  const { selected, data, selectedSem, setSelectedSem } = useContext(userContext);
  
  const selectedCourse = data.find(course => course.courseName === selected);
  const semesterData = selectedCourse.semesters.find(sem => sem.semester === selectedSem);

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setSelectedSem(null)}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowBack className="mr-2" />
          <span>Back to Course</span>
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {selected} - Semester {selectedSem}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {semesterData.subjects.map((subject, index) => (
          <div
            key={index}
            onClick={() => handleDownload(subject.url)}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <PictureAsPdf className="text-red-500" />
              <h3 className="text-lg font-medium text-gray-700">
                {subject.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterContent; 