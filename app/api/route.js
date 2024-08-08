import { NextResponse } from "next/server";
import { firestore } from "@/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const collectionName = searchParams.get("collection");
  const title = searchParams.get("title");

  if (!collectionName) {
    return NextResponse.json(
      { error: "Collection name query parameter is required" },
      { status: 400 }
    );
  }

  try {
    console.log(`Collection Name: ${collectionName}`);
    console.log(`Title: ${title}`);

    const collectionRef = collection(firestore, collectionName);
    let q;

    if (title) {
      q = query(collectionRef, where("title", "==", title));
    } else {
      q = query(collectionRef);
    }

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
