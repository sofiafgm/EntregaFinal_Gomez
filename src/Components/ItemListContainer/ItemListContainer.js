import React from 'react';

const ItemListContainer = ({ gretting = 'Saludo default' }) => (
  <div>
    <p style={{backgroundColor: "gray", fontSize: '80px', textAlign: 'center'}}>{gretting}</p>
  </div>
);

export default ItemListContainer;
