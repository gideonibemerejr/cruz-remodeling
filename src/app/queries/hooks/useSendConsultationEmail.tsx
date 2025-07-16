import { useMutation } from "@tanstack/react-query";
import { sendConsultationEmail } from "../queryKeys/email";

const useSendConsultationEmail = () => {
	const { mutate: sendEmail, isPending } = useMutation({
		mutationFn: sendConsultationEmail,
	});

	return { sendEmail, isPending };
};

export default useSendConsultationEmail;
