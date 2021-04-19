import React from 'react';
import { Layout, Modal } from './styled';

const index = ({ children, showModal }) => {
  return (
    <Layout showModal={showModal}>
      <Modal showModal={showModal}>
        {children}
      </Modal>
    </Layout>
  )
}

export default index
