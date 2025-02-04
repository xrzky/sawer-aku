"use server";

import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateActivityAction(_, formData) {
  const id = formData.get("id");
  const nominal = Number(formData.get("nominal"));
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const date = new Date().toISOString().split("T")[0];

  await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      nominal,
      name,
      email,
      message,
      date,
    }),
  });

  // revalidatePath("/");

  redirect("/");
}
