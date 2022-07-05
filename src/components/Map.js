import React from 'react'

const Map = () => {
  return (
    <div className='map-responsive'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.278154922057!2d-122.3594223844695!3d47.6207240949955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901544c3b8b763%3A0x7c51063e9a39d9c6!2s229%20Queen%20Anne%20Ave%20N%2C%20Seattle%2C%20WA%2098109!5e0!3m2!1sen!2sus!4v1653082595986!5m2!1sen!2sus" 
        width="900" 
        height="300" 
        style={{ border: "0", borderRadius: 20 }} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map