"use server";

import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createActivityAction(_, formData) {
  const nominal = Number(formData.get("nominal"));
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const category = formData.get("category");
  const date = new Date().toISOString().split("T")[0];

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ nominal, name, email, message, category, date }]),
  });

  revalidatePath("/");

  redirect("/");
}
