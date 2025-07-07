import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface HeroData {
  fullName: string;
  jobTitle: string;
  headline: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

interface EditableContextType {
  heroData: HeroData;
  updateHeroData: (data: Partial<HeroData>) => void;
}

const defaultHeroData: HeroData = {
  fullName: "John Doe",
  jobTitle: "Full Stack Developer",
  headline: "Passionate about creating exceptional digital experiences with modern technologies. I build scalable, performant applications that solve real-world problems.",
  profileImage: "",
  socialLinks: {
    github: "#",
    linkedin: "#",
    email: "#contact"
  }
};

const EditableContext = createContext<EditableContextType | undefined>(undefined);

interface EditableProviderProps {
  children: ReactNode;
}

export const EditableProvider: React.FC<EditableProviderProps> = ({ children }) => {
  const [heroData, setHeroData] = useState<HeroData>(defaultHeroData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData.heroData) {
          setHeroData(parsedData.heroData);
        }
      } catch (error) {
        console.error('Error parsing saved data:', error);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    const dataToSave = {
      heroData
    };
    localStorage.setItem('portfolioData', JSON.stringify(dataToSave));
  }, [heroData]);

  const updateHeroData = (data: Partial<HeroData>) => {
    setHeroData(prev => ({
      ...prev,
      ...data,
      socialLinks: {
        ...prev.socialLinks,
        ...(data.socialLinks || {})
      }
    }));
  };

  return (
    <EditableContext.Provider value={{
      heroData,
      updateHeroData
    }}>
      {children}
    </EditableContext.Provider>
  );
};

export const useEditable = () => {
  const context = useContext(EditableContext);
  if (context === undefined) {
    throw new Error('useEditable must be used within an EditableProvider');
  }
  return context;
};