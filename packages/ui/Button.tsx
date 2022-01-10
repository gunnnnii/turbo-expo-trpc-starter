import * as React from "react";
import { Button as NativeButton } from 'react-native'

interface ButtonProps {
  onPress: () => void;
  title: string;
}
export const Button = ({ title, onPress }: ButtonProps) => {
  return <NativeButton title={title} onPress={onPress} />
};
