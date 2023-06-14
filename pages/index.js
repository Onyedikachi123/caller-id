import axios from 'axios';
import React, { useState, useEffect } from 'react'

const API_KEY = 'KoZDKyNGh0WC8ofmZKwlAv38PF7kH0z2yhqbq8KhmBmsVPkhJwV6uHJVsbqF'; 
// const apiEndPoint = 'http://localhost:3000/api/proxy/notifications'; 

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  try {
    const response = await axios.get('https://enterprise.calleridrep.com/v1/me/notifications', {
      headers: {
        'Authorization': `Bearer ${API_KEY}` 
      }
    });

    
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error)

    res.status(500).json({ error: error.message });
  }
  return (
    <>
     <div className='container'>
       {/* <h2>You have {notifications.length} on your account</h2>   */}
        <table className='table'>
           <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
            </tr>
           </thead>
           <tbody>
              {/* {notifications && Array.isArray(notifications) && notifications.map(notification => (
                <tr key={notification.id}>
                  <td>{notification.id}</td>
                  <td>{notification.title}</td>
                </tr>
                
              ))} */}
           </tbody>
        </table>
     </div>
    </>
  )
}

// export default Notifications;
