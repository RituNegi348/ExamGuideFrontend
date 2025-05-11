import React, { useState, useContext } from 'react';
import { Avatar, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { userContext } from '../Context/userContext';

const Header = () => {
  const {user, setUser, setSelected, setSelectedSem, setData} = useContext(userContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [uploadData, setUploadData] = useState({
    course: '',
    semester: '',
    fileName: '',
    file: null
  });
  const open = Boolean(anchorEl);

  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    
    const response = await fetch("https://examguidebackend.onrender.com/logout",{
      method: "POST",
      credentials: "include"
    });
    if(response.status===200){
        setUser(null);
        setData(null);
        setSelected(null);
        setSelectedSem(null)
    }

    handleClose();
  };

  const handleUploadClick = () => {
    handleClose();
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setUploadData({
      course: '',
      semester: '',
      fileName: '',
      file: null
    });
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('courseName', uploadData.course);
    formData.append('semester', uploadData.semester);
    formData.append('name', uploadData.fileName);
    formData.append('file', uploadData.file);

    try {
      const response = await fetch('https://examguidebackend.onrender.com/upload', {
        method: 'POST',
        credentials: 'include',
        body: formData
      });
      if (response.ok) {
        handleDialogClose();
        const data = await response.json();
        setData(data);
      }
      setUploadData({
        course: '',
        semester: '',
        fileName: '',
        file: null
      })
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Exam Guide</h1>
        
        <div className="flex items-center">
          <span className="mr-4 text-gray-700">{user.username}</span>
          <Avatar
            onClick={handleClick}
            className="cursor-pointer hover:opacity-80"
          />
          
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {user.admin && <MenuItem onClick={handleUploadClick}>Upload</MenuItem>}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>

          <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>Upload File</DialogTitle>
            <DialogContent>
              <TextField
                margin="dense"
                label="Course"
                fullWidth
                value={uploadData.course}
                onChange={(e) => setUploadData({...uploadData, course: e.target.value})}
              />
              <TextField
                margin="dense"
                label="Semester"
                fullWidth
                value={uploadData.semester}
                onChange={(e) => setUploadData({...uploadData, semester: e.target.value})}
              />
              <TextField
                margin="dense"
                label="File Name"
                fullWidth
                value={uploadData.fileName}
                onChange={(e) => setUploadData({...uploadData, fileName: e.target.value})}
              />
              <input
                type="file"
                className="mt-4"
                onChange={(e) => setUploadData({...uploadData, file: e.target.files[0]})}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleFileUpload} variant="contained">Upload</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;