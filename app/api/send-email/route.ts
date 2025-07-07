import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const {name, email, message} = body;

    if (!name || !email || !message) {
        return NextResponse.json({message: "Semua field wajib diisi"}, {status: 400});
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS_APP,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.GMAIL_USER,
            subject: `Contact from ${name}`,
            text: message,
            html: `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br/>${message}</p>
      `,
        });

        return NextResponse.json({message: "Email berhasil dikirim!"});
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({message: "Gagal mengirim email"}, {status: 500});
    }
}
