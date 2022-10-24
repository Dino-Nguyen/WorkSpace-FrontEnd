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
                    
                       <div className='taskCompleted'>
                       task completed
                       </div>
                       <div className='taskCompleted'>
                         new task
                       </div>
                       <div className='taskCompleted'>
                          project done
                       </div>
                   </div>
                   <div className='taskGraph'>
                       graph
                   </div>
                   <div className='taskPercent'>
                      task %
                      <div className='reminder'>
                          reminder 1
                      </div>
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
