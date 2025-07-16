import { z } from "zod";
import libphonenumber from "google-libphonenumber";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

export const emailSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.email(),
	phone: z
		.string()
		.nonempty({ message: "Phone number is required" })
		.transform((phone) => phone.replace(/\s+/g, "")) // Remove all whitespace
		.refine(
			(phone) => {
				try {
					// Try parsing as US number first
					let parsedPhone = phoneUtil.parse(phone, "US");
					if (phoneUtil.isValidNumber(parsedPhone)) {
						return true;
					}

					// If that fails, try parsing without country code (assume US)
					parsedPhone = phoneUtil.parse(phone, "US");
					return phoneUtil.isValidNumber(parsedPhone);
				} catch {
					// If parsing fails, try with +1 prefix
					try {
						const phoneWithCountryCode = phone.startsWith("+")
							? phone
							: `+1${phone}`;
						const parsedPhone = phoneUtil.parse(phoneWithCountryCode);
						return phoneUtil.isValidNumber(parsedPhone);
					} catch (secondError) {
						console.warn("Phone validation error:", secondError);
						return false;
					}
				}
			},
			{
				message:
					"Please enter a valid US phone number (e.g., 555-123-4567 or (555) 123-4567)",
			}
		),
	projectType: z.string().min(1),
	roomType: z.string().min(1),
	projectSize: z.string().min(1),
	timeline: z.string().min(1),
	budget: z.string().min(1),
	message: z.string().min(1),
	recaptchaToken: z.string().min(1),
});

export type EmailTemplateProps = z.infer<typeof emailSchema>;
