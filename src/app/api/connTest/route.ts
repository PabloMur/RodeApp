import { NextRequest,NextResponse } from "next/server";

export function GET(req:NextRequest) {
    return NextResponse.json({
        hola: JSON.parse(process.env.FIRESTORE_API_KEY as any)
    })
}