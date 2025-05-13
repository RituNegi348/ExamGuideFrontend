import  { useContext, useEffect, useCallback } from 'react';
import Header from '../Components/Header';
import LeftSideBar from '../Components/LeftSideBar';
import CourseContent from '../Components/CourseContent';
import { Navigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';

const MainPage = () => {
  const { user, setData, data } = useContext(userContext);

  const fetchData = useCallback( async () => {
      try {
        const response = await fetch('https://examguidebackend.onrender.com/getFiles');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log(data);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData]); 

  if(user==null){
    return <Navigate to="/"/>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <LeftSideBar />
        <main className="flex-1 p-6">
          <CourseContent />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
