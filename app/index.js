import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

export default function Page() {
  return <Redirect href={"/accueil"} />;
}

/*
=> 2 pages
 -Accueil
 -Détails de maison
*/
