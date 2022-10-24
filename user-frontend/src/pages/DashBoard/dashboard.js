import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./dashboard.css"

export default function DashBoard() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);

  return <div className='dashboard'>
               <div className='taskDashboard'>
                 
                   <div className='taskInfo'>
                     task comp
                   </div>
                   <div className='taskGraph'>
                       graph
                   </div>
                   <div className='taskPercent'>
                      task %
                   </div>
               </div>
               <div className='messageBox'>
               
                    <div className='scheudle'>
                        scheudle
                    </div>
                    <div className='messageMiniBox'>
                       Mess minibox
                    </div>
                    <div className='newTask'>
                         New task
                    </div>
               </div>

  </div>;
}
