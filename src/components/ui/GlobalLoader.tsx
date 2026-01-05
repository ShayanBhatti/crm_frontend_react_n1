import { useEffect, useState } from "react";

function GlobalLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    document.addEventListener("loader:start", show);
    document.addEventListener("loader:stop", hide);

    return () => {
      document.removeEventListener("loader:start", show);
      document.removeEventListener("loader:stop", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="loader">
        <div className="circle"><div className="dot" /><div className="outline" /></div>
        <div className="circle"><div className="dot" /><div className="outline" /></div>
        <div className="circle"><div className="dot" /><div className="outline" /></div>
        <div className="circle"><div className="dot" /><div className="outline" /></div>
      </div>
    </div>
  );
}

export default GlobalLoader;