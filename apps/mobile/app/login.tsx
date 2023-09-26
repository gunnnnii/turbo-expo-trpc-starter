import { router } from "expo-router";
import { Text, View } from "react-native";

import { useAuth } from "../stores/auth";
import { trpc } from "../trpc/client";
import { useForm } from "react-hook-form";
import { CredentialsData } from "backend/auth/types";
import { Button } from "ui/Button";
import { ControlledTextInput } from "ui/ControlledTextInput";

export default function SignIn() {
  const mutation = trpc.login.useMutation();
  const setTokens = useAuth((state) => state.setTokens);
  const { control, handleSubmit } = useForm<CredentialsData>();

  const onSubmit = async (credentials: CredentialsData) => {
    console.log(credentials);
    const data = await mutation.mutateAsync(credentials);
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
      <Button onPress={handleSubmit(onSubmit)}>Boop</Button>
      <Button onPress={() => router.replace("/register")}>Register</Button>
    </View>
  );
}
