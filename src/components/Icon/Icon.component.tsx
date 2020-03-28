import React from "react";
import IconMaterial from "@expo/vector-icons/MaterialIcons";

const TAB_ICON_SIZE = 20;

export const Icon = ({
  name,
  size,
  color
}: {
  name: string;
  size: number;
  color: string;
}) => <IconMaterial name={name} size={size} color={color} />;

export const renderTabIcon = (name: string, tintColor: string) => (
  <Icon size={TAB_ICON_SIZE} color={tintColor} name={name} />
);
