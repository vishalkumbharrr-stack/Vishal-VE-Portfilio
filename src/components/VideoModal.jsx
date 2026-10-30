import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl }) {
  if (!isOpen || !videoUrl) return null;

  // YouTube लिंक मधून Video ID काढण्यासाठी फंक्शन (Shorts आणि Normal दोन्हीसाठी)
  const getEmbedUrl = (url) => {
    let videoId = '';
    if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('shorts/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else {
      return url; 
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <AnimatePresence>
      {/* बॅकग्राउंड (काळा पडदा) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      >
        {/* 
          व्हिडिओ कंटेनर: 
          - max-w-[400px] मुळे तो फोनसारखा दिसेल.
          - aspect-[9/16] मुळे तो उभा (Vertical) होईल (तुमच्या स्क्रीनशॉटसारखा).
          - rounded-2xl मुळे कडा गोलाकार होतील.
        */}
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()} 
          className="relative w-full max-w-[380px] h-[85vh] max-h-[700px] bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-white/10"
        >
          {/* क्लोज बटण (उजव्या कोपऱ्यात) */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>

          {/* YouTube Iframe (आपोआप पूर्ण स्क्रीन भरेल) */}
          <iframe
            src={getEmbedUrl(videoUrl)}
            title="Video Player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* तुमच्या स्क्रीनशॉटसारखा लाल प्रोग्रेस बार (खाली) */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-red-600 rounded-b-2xl"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}