import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GDPRConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdpr-consent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdpr-consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("gdpr-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[#8B1538]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Cookie Consent</h3>
            </div>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. You can manage your preferences at any time 
            through our{" "}
            <a href="/cookies" className="text-[#8B1538] hover:underline font-medium">
              Cookie Policy
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-[#8B1538] hover:bg-[#6B1028] text-white shadow-lg shadow-red-900/20"
            >
              Accept All Cookies
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-gray-300 hover:bg-gray-50"
            >
              Decline Non-Essential
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}