import { EmailTemplateProps } from "../types/email";

export const emailQueryKeys = {
	all: ["email"] as const,
	consultation: () => [...emailQueryKeys.all, "consultation"] as const,
};

export const sendConsultationEmail = async (body: EmailTemplateProps) => {
	try {
		const response = await fetch("/api/send", {
			method: "POST",
			body: JSON.stringify(body),
		});
		return response.json();
	} catch (error) {
		console.error(error);
	}
};
