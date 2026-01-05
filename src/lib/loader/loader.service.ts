let activeRequests = 0;

export const loaderService = {
  start() {
    activeRequests++;
    console.log("Start");
    
    document.dispatchEvent(new CustomEvent("loader:start"));
  },

  stop() {
    activeRequests = Math.max(activeRequests - 1, 0);
    if (activeRequests === 0) {
      document.dispatchEvent(new CustomEvent("loader:stop"));
      console.log("Stop");
      
    }
  },
};
