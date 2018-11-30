import React from 'react';
import styled from 'react-emotion';
import {MdClose} from 'react-icons/md';
import colors from '../theme';

import ImageLinks from './ImageLinks';

const Modal = styled('a')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.92);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Img = styled('img')`
  max-height: 95%;
  object-fit: contain;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 4;
 margin: auto;
`;

const Close = styled('button')`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  padding: 4px 9px;
  background-color: ${colors.primary};
  font-size: 20px;
  color: white;
  border: 0;
  border-radius: 0 0 0 15px;
`;

export default function Lightbox({post, closeLightbox}) {
    const {image, link} = post;
    return (
        <Modal href={image} onClick={closeLightbox}>
            <Close onClick={closeLightbox} name="close">
                <MdClose/>
            </Close>
            <ImageLinks image={image} link={link} hide={false}/>
            <Img src={image} width="100%"/>
        </Modal>
    )
};