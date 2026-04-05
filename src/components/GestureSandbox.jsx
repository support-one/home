import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2 } from 'lucide-react';

export default function GestureSandbox() {
  const [cards, setCards] = useState([
    { id: 1, text: "Confusing Spreadsheet #4", color: "bg-red-900/50", rotate: -10, x: -80, y: -40 },
    { id: 2, text: "Generic Invoice App Tab", color: "bg-orange-900/50", rotate: 5, x: 20, y: 50 },
    { id: 3, text: "Lost Sticky Note", color: "bg-yellow-600/50", rotate: 15, x: 100, y: -60 }
  ]);

  const handleDragEnd = (event, info, id) => {
    // If dragged far enough, "delete" the cluttered card
    if (Math.abs(info.offset.x) > 150 || Math.abs(info.offset.y) > 150) {
      setCards(cards.filter(card => card.id !== id));
    }
  };

  return (
    <section className="w-full py-32 flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Clutter vs. Clean Desk.</h2>
        <p className="text-gray-400 mb-8">Throw away the confusing mess of multiple generic software tabs. Throw the sticky notes off the screen to reveal what Custom Software looks like.</p>
      </div>

      <div className="w-full max-w-5xl h-[600px] bg-[#050505] border border-white/5 rounded-[3rem] relative flex items-center justify-center overflow-hidden shadow-inner">
        
        {/* Background "Clean iPad" that is revealed */}
        <div className="w-[400px] h-[300px] bg-black border border-cyan-400/30 rounded-2xl shadow-[0_0_50px_rgba(0,255,204,0.1)] flex flex-col p-6 items-center justify-center opacity-50 transition-opacity duration-1000">
           {cards.length === 0 ? (
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="text-center"
             >
               <h3 className="text-2xl font-bold text-cyan-400 mb-2">Beautifully Simple.</h3>
               <p className="text-sm text-gray-400">Everything in one place. Built just for you.</p>
             </motion.div>
           ) : (
             <div className="text-gray-600 font-bold uppercase tracking-widest text-xs">Clear the clutter to view</div>
           )}
        </div>

        {/* Cluttered Cards */}
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              drag
              onDragEnd={(e, info) => handleDragEnd(e, info, card.id)}
              dragSnapToOrigin={false}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              initial={{ x: card.x, y: card.y, rotate: card.rotate, opacity: 1 }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
              className={`absolute w-48 h-64 ${card.color} rounded-xl flex flex-col items-center justify-center p-6 cursor-grab shadow-2xl backdrop-blur-md border border-white/10`}
            >
              <span className="font-bold text-white text-center text-sm">{card.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Trash Zone Indicator */}
        {cards.length > 0 && (
          <div className="absolute bottom-6 font-mono text-gray-500 text-xs tracking-widest uppercase flex items-center">
            <Trash2 className="w-4 h-4 mr-2" /> Drag cards to edges to throw away
          </div>
        )}
      </div>
    </section>
  );
}
