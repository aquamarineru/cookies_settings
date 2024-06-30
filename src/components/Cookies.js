import React, {useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { LiaCookieBiteSolid } from "react-icons/lia";
 
export default function CookiesPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className="wrapper">
      <header>
        <LiaCookieBiteSolid  className='icon'/>
        <h2>Cookies Consent</h2>
      </header>
      <div className="data">
        <p>
          We use cookies to ensure you get the best experience on our website. <br />
          <a href="/cookies">Learn more ...</a>
        </p>
      </div>
      <div className="buttons">
        <button className="button" onClick={handleAccept}>Accept</button>
        <button className="button btnDecline" onClick={handleDecline}>Decline</button>
      </div>
    </div>
  )
}
