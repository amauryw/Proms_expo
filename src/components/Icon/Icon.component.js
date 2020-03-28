import React from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const TAB_ICON_SIZE = 20;

export const Icon = ({ name, size, color }) => (
  <IconMaterial name={name} size={size} color={color} />
);

export const renderTabIcon = (name, tintColor) => (
  <Icon size={TAB_ICON_SIZE} color={tintColor} name={name} />
);
