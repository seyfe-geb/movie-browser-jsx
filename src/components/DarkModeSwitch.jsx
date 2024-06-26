"use client";

import React, {useEffect, useState} from 'react'
import {MdLightMode, MdDarkMode} from 'react-icons/md';
import { useTheme } from 'next-themes';


const DarkModeSwitch = () => {

  const {theme, setTheme, systemTheme} = useTheme();
  const currentTheme = theme === 'system'? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div>
        {   mounted && currentTheme === 'dark'? 
            <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-blue-500'/> : 
            <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-blue-500'/>
        }
    </div>
  )
}

export default DarkModeSwitch