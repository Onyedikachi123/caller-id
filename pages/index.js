import axios from 'axios';
import React, { useEffect } from 'react'

const API_KEY = 'KoZDKyNGh0WC8ofmZKwlAv38PF7kH0z2yhqbq8KhmBmsVPkhJwV6uHJVsbqF';


const index = () => {
  const getNotofications = async () => {
    try {
      const response = await axios.get('https://enterprise.calleridrep.com/v1/me/notifications', {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        }
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getMerchants = async () => {
    try {
      const res = await axios.post( 'the api here sir' )

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getNotofications()
    getMerchants()
  }, [])
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

export default index