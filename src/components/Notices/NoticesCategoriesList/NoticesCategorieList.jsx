import { NoticesCategoryItem } from 'components/Notices/NoticesCategoriesItem/NoticesCategoriesItem';
import petsList from '../../../mockData/petsList';
import { nanoid } from '@reduxjs/toolkit';
import { List } from './NoticesCategoriesList.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ModalItem } from '../ModalNotice/ModalNotice';

export const NoticesCategoriesList = () => {
  const [isOpen, setIsOpen] = useState('false');
  //   const onClick = () => setIsOpen(!isOpen);
  const onClose = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <List>
        {isOpen && (
          <Modal onClick={onClose}>
            <ModalItem onClick={onClose} petsList={petsList} />
          </Modal>
        )}
        {petsList.map(petItem => (
          <NoticesCategoryItem petList={petItem} key={nanoid()} />
        ))}
      </List>
    </>
  );
};
