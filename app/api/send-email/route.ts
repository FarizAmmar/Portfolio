import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const message = String(body.message || "").trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Nama, email, dan pesan wajib diisi.",
                },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Format email tidak valid.",
                },
                { status: 400 }
            );
        }

        const gmailUser = process.env.GMAIL_USER;
        const gmailPassApp = process.env.GMAIL_PASS_APP;

        if (!gmailUser || !gmailPassApp) {
            console.error("Environment variable Gmail belum tersedia.");

            return NextResponse.json(
                {
                    success: false,
                    message: "Konfigurasi email server belum lengkap.",
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: gmailUser,
                pass: gmailPassApp,
            },
        });

        await transporter.verify();

        await transporter.sendMail({
            from: `"Portfolio Website" <${gmailUser}>`,
            to: gmailUser,
            replyTo: email,
            subject: `Pesan baru dari ${name}`,
            text: `
Nama: ${name}
Email: ${email}

Pesan:
${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Pesan Baru dari Website Portfolio</h2>

          <p><strong>Nama:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>

          <p><strong>Pesan:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Email berhasil dikirim.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email error:", error);

        const errorMessage =
            error instanceof Error ? error.message : "Terjadi kesalahan tidak diketahui.";

        return NextResponse.json(
            {
                success: false,
                message: "Gagal mengirim email.",
                error: process.env.NODE_ENV === "development" ? errorMessage : undefined,
            },
            { status: 500 }
        );
    }
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}