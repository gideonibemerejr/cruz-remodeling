import EmailTemplate from "@/components/templates/consult-request";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const {
		firstName,
		lastName,
		email,
		phone,
		projectType,
		roomType,
		projectSize,
		timeline,
		budget,
		message,
		recaptchaToken,
	} = await req.json();

	try {
		const recaptchaResponse = await fetch(
			`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
			{
				method: "POST",
			}
		);
		const { success, score } = await recaptchaResponse.json();

		if (!success && score < 0.5) {
			return Response.json(
				{ error: "Recaptcha verification failed" },
				{ status: 400 }
			);
		} else {
			const { data, error } = await resend.emails.send({
				from: "Cruz Remodeling Website <website@cruzremodelingtx.com>",
				to: [
					"g@gideonjr.com",
					"themusicpouch@gmail.com",
					"gracie.ibemere@gmail.com",
					"stephanie.ibemere@gmail.com",
				],
				subject: "New Consultation Request",
				react: EmailTemplate({
					firstName,
					lastName,
					email,
					phone,
					projectType,
					roomType,
					projectSize,
					timeline,
					budget,
					message,
				}),
			});

			if (error) {
				return Response.json({ error }, { status: 500 });
			}

			return Response.json(data);
		}
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
