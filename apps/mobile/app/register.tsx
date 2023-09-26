import { router } from "expo-router";
import { Text, View } from "react-native";

import { useAuth } from "../stores/auth";
import { trpc } from "../trpc/client";
import { useForm } from "react-hook-form";
import { CredentialsData } from "backend/auth/types";
import { Button } from "ui/Button";
import { ControlledTextInput } from "ui/ControlledTextInput";

type RegisterData = CredentialsData & {
  retypePassword: string;
};

export default function Register() {
  const mutation = trpc.register.useMutation();
  const setTokens = useAuth((state) => state.setTokens);
  const { control, handleSubmit } = useForm<RegisterData>();

  const onSubmit = async ({
    email,
    password,
    retypePassword,
  }: RegisterData) => {
    console.log(email, password, retypePassword);
    if (password !== retypePassword) {
      console.log("Passwords must be the same!");
      return;
    }
    const data = await mutation.mutateAsync({ email, password });
    setTokens(data);
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ControlledTextInput control={control} name="email" label="email" />
      <ControlledTextInput
        secure
        control={control}
        name="password"
        label="password"
      />
      <ControlledTextInput
        secure
        control={control}
        name="retypePassword"
        label="retypePassword"
      />
      <Button onPress={handleSubmit(onSubmit)}>Boop</Button>
      <Button onPress={() => router.replace("/login")}>login</Button>
    </View>
  );
}
