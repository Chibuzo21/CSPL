import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, name, email, content } = body;

    // Validation
    if (!postId || !name || !email || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (content.length < 10 || content.length > 1000) {
      return NextResponse.json(
        { error: "Comment must be between 10 and 1000 characters" },
        { status: 400 },
      );
    }

    // Create comment in Sanity
    const comment = await writeClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: postId,
      },
      name,
      email,
      content,
      approved: false, // Must be approved by admin
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Comment submitted successfully", comment },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 },
    );
  }
}
