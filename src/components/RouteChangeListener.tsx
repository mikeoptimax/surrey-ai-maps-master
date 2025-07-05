import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { preloadRelatedComponents } from '../utils/preloadComponents';

/**
 * Component that listens for route changes and preloads related components
 * This is a "silent" component that doesn't render anything visible
 */
const RouteChangeListener: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // When route changes, preload components that might be needed next
    preloadRelatedComponents(location.pathname);
    
    // Optionally log for debugging purposes
    // console.log('Route changed to:', location.pathname);
  }, [location.pathname]);
  
  // This component doesn't render anything visible
  return null;
};

export default RouteChangeListener;