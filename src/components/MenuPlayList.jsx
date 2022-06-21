import React from 'react';
import { motion } from 'framer-motion';
import '../styles/PlayList.scss';
import { FaPlus } from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
import { PlayList } from '../data/PlayList';

function MenuPlayList() {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>Playlists</p>
        <motion.i whileTap={{ scale: 0.75 }}>
          <FaPlus />
        </motion.i>
      </div>

      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playLists" key={list.id}>
              <div className="list">
                <i>
                  <BsMusicNoteList />
                </i>
                <p>{list.name}</p>
              </div>
              <motion.div
                whileTap={{ scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="trash"
              >
                <BsTrash />
              </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
}

export { MenuPlayList };
