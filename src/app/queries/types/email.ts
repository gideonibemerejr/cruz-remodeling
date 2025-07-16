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
		.refine(
			(phone) => {
				try {
					const parsedPhone = phoneUtil.parse(phone);
					return phoneUtil.isValidNumber(parsedPhone);
				} catch (error) {
					console.warn(error);
					return false;
				}
			},
			{ message: "Invalid phone number" }
		),
	projectType: z.string().min(1),
	roomType: z.string().min(1),
	projectSize: z.string().min(1),
	timeline: z.string().min(1),
	budget: z.string().min(1),
	message: z.string().min(1),
});

export type EmailTemplateProps = z.infer<typeof emailSchema>;
