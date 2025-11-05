import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import useDebounce from '@/hooks/useDebounce';
import { useNotification } from '@/context/NotificationContext';
import  { BiShareAlt }  from 'react-icons/bi';

const TopBar = ({plan, updatePlan}) => {

  const [planName, setPlanName] = useState('');
  const [showShareLink, setShowShareLink] = useState(false)

  const debounceUpdate = useDebounce(updatePlan, 300)
  const notify = useNotification()

  const shareLinkRef = useRef()
  const shareContainerRef = useRef()

  const updateName = (e) => {
    const newName = e.target.value 
    setPlanName(newName)
    debounceUpdate({name: newName})
  }

  const copyShareLink = () => {
    const link = shareLinkRef.current.textContent

    // Only work on https://
    navigator.clipboard.writeText(link);
    notify({content: "Copied link to clipboard."})
  }

  const handleClickOutside = (e) => {
    if(shareContainerRef.current  && !shareContainerRef.current.contains(e.target)) {
      setShowShareLink(false)
    }
  }

  useEffect(() => {
    if(plan) setPlanName(plan.name)
  }, [plan])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return() => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className='absolute left-6 top-6'>
        <div className='flex gap-1'>
          <div className='bg-white p-1 shadow-md rounded-md '>
            <NavLink to='/plans/all'>
              <div className='flex justify-center items-center size-8 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300'>
                <HiMenu/>
              </div>
            </NavLink>
          </div>
          <div className='bg-white p-1 shadow-md rounded-md'>
              <input 
              className='flex items-center px-3 bg-slate-100 h-8 text-sm rounded outline-none w-60' 
              value={planName} 
              onChange={updateName}
              onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
              />
          </div>
        </div>
      </div>

      <div className='absolute right-6 top-6'>
        <div className='bg-white p-1 shadow-md rounded-md flex gap-1'>
              <div onClick={(e) => {e.stopPropagation(); setShowShareLink(!showShareLink)}} className='flex justify-center items-center gap-1 px-2 h-8 cursor-pointer text-xs text-white bg-blue-500 hover:bg-blue-600 rounded font-medium'>
                <BiShareAlt/> Share
              </div>
              { showShareLink && 
              <div className='absolute top-12 right-0 shadow-md bg-white shadow-x rounded-md p-4' ref={shareContainerRef}>
                <div className='absolute right-4 top-2'>
                  <div className='text-[10px] px-1 p-0.5 bg-yellow-200 border border-yellow-300 rounded'>
                    Demo use localStorage
                  </div>
                  {/* <div className='text-[10px] px-1 p-0.5 bg-yellow-200 border border-yellow-300 rounded flex items-center gap-1 font-semibold text-yellow-700'>
                    Live <div className='h-2 w-2 animate-pulse bg-yellow-400 rounded-full'></div>
                  </div> */}
                </div>
                <div className='text-sm font-semibold'>Public link</div>
                <div className='text-xs text-gray-500'>
                  Everyone with the link can view your plan.
                </div>
                <div className='flex items-center gap-2 mt-2'>
                  <div className='select-all bg-slate-100 px-2 py-1 rounded-sm text-xs text-nowrap' ref={shareLinkRef}>
                    {`${window.location.origin}/view/${plan.id}`}
                    {/*  IF YOU UPLOAD TO SUBFOLDER IN YOUR SERVER */}
                    {/*  TODO get it from .env */}
                    {/* {`${window.location.origin}/{SUBFLODER}/view/${plan.id}`} */}
                 
                  </div>
                  <div>
                    <button onClick={copyShareLink} className='px-2 h-6 text-xs text-white bg-blue-500 hover:bg-blue-600 rounded font-medium'>
                      Copy
                    </button>
                  </div>
                </div>
              </div>
              }
        </div>
      </div>
    </>
  )
}

export default TopBar