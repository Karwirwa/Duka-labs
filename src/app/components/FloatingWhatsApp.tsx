import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "254797040512";
  const message = "Hi! I'm interested in learning more about your services.";

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="WhatsApp Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Pulse effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        )}
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium">DukaLabs Support</h4>
                  <p className="text-sm text-white/80">
                    Typically replies within minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <p className="text-sm text-muted-foreground">
                  👋 Hello! How can we help you today?
                </p>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Click the button below to start a conversation on WhatsApp
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg transition-colors font-medium"
              >
                Start Chat
              </a>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-gray-100 text-center">
              <p className="text-xs text-muted-foreground">
                Powered by WhatsApp Business
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
