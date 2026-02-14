import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/app/contact/components/ContactForm/validation";

// Validate environment variables at startup
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not configured");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data with Zod
    const validatedData = contactSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          validationErrors: validatedData.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { Name, Email, Subject, Message } = validatedData.data;

    // Send email using Resend
    console.log("📧 Attempting to send email via Resend...");

    const result = await resend.emails.send({
      from: "CSPL <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "uchibueze@cspl.com"],
      replyTo: Email,
      subject: `📚 Book Inquiry: ${Subject} - ${Name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Book Showcase Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          
          <!-- Main Container -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                
                <!-- Email Card -->
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  
                  <!-- Header with Book Icon -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                      <div style="background-color: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                      </div>
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        New Reader Inquiry
                      </h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0; font-size: 16px;">
                        Someone is interested in your books!
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contact Information -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Reader Info Card -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
                        <tr>
                          <td>
                            <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">
                              📬 Contact Details
                            </h2>
                            
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td width="100" style="font-weight: 600; color: #4a5568; font-size: 14px; vertical-align: top;">
                                  Name:
                                </td>
                                <td style="color: #1a1a1a; font-size: 14px;">
                                  ${Name}
                                </td>
                              </tr>
                              <tr>
                                <td width="100" style="font-weight: 600; color: #4a5568; font-size: 14px; vertical-align: top;">
                                  Email:
                                </td>
                                <td style="color: #1a1a1a; font-size: 14px;">
                                  <a href="mailto:${Email}" style="color: #667eea; text-decoration: none; font-weight: 500;">
                                    ${Email}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td width="100" style="font-weight: 600; color: #4a5568; font-size: 14px; vertical-align: top;">
                                  Subject:
                                </td>
                                <td style="color: #1a1a1a; font-size: 14px;">
                                  <span style="background-color: #e0e7ff; color: #5850ec; padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500;">
                                    ${Subject}
                                  </span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message Section -->
                      <div style="margin-bottom: 30px;">
                        <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #1a1a1a;">
                          💬 Their Message
                        </h2>
                        <div style="background-color: #ffffff; border-left: 4px solid #667eea; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                          <p style="color: #2d3748; line-height: 1.7; margin: 0; white-space: pre-wrap; font-size: 15px;">
${Message}
                          </p>
                        </div>
                      </div>
                      
                      <!-- Quick Reply Button -->
                      <div style="text-align: center; margin-top: 30px;">
                        <a href="mailto:${Email}?subject=Re: ${Subject}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);">
                          📧 Reply to ${Name.split(" ")[0]}
                        </a>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 24px 30px; border-top: 1px solid #e2e8f0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="text-align: center;">
                            <p style="margin: 0 0 8px 0; color: #718096; font-size: 13px; line-height: 1.5;">
                              This inquiry was submitted through the contact form on your<br>
                              <strong style="color: #4a5568;">Book Showcase Website</strong>
                            </p>
                            <p style="margin: 8px 0 0 0; color: #a0aec0; font-size: 12px;">
                              Sent on ${new Date().toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
                
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `,
    });

    // Check if Resend returned an error
    if (result.error) {
      console.error("❌ Resend API error:", result.error);
      throw new Error(
        result.error.message || "Failed to send email via Resend",
      );
    }

    // Check if we got data back
    if (!result.data) {
      console.error("❌ No data returned from Resend");
      throw new Error("Email service did not return confirmation");
    }

    console.log("✅ Email sent successfully via Resend:", result.data.id);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      messageId: result.data.id,
    });
  } catch (error) {
    console.error("💥 API route error:", error);

    // Determine error message
    let errorMessage = "Failed to send email";

    if (error instanceof Error) {
      errorMessage = error.message;

      // Specific error messages for common issues
      if (error.message.includes("fetch")) {
        errorMessage = "Unable to reach email service. Please try again later.";
      } else if (error.message.includes("API key")) {
        errorMessage =
          "Email service configuration error. Please contact support.";
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        // Include details in development only
        details:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 },
    );
  }
}
