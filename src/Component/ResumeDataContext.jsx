// ResumeDataContext.js
import React, { createContext, useState, useContext } from 'react';

const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(null);

  return (
    <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export const useResumeData = () => {
  const context = useContext(ResumeDataContext);
  if (!context) {
    throw new Error('useResumeData must be used within a ResumeDataProvider');
  }
  return context;
};
