import {
	Button,
	Container,
	Head,
	Html,
	Body,
	Text,
	Hr,
	Section,
} from "@react-email/components";
import * as React from "react";

export default function Email({
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
}: {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	projectType: string;
	roomType: string;
	projectSize: string;
	timeline: string;
	budget: string;
	message: string;
}) {
	return (
		<Html>
			<Head />
			<Body
				style={{
					fontFamily:
						"Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
					backgroundColor: "#f9fbf9",
					margin: 0,
					padding: 0,
				}}
			>
				<Container
					style={{
						margin: "40px auto",
						maxWidth: "600px",
						padding: "40px 20px",
						backgroundColor: "#082010",
						borderRadius: "12px",
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
					}}
				>
					{/* Header */}
					<Section style={{ textAlign: "center", marginBottom: "32px" }}>
						<Text
							style={{
								fontSize: "28px",
								fontWeight: "bold",
								color: "#ffffff",
								margin: "0 0 8px 0",
							}}
						>
							Cruz Remodeling
						</Text>
						<Text
							style={{
								fontSize: "18px",
								color: "#3ACF6E",
								fontWeight: "600",
								margin: "0 0 24px 0",
							}}
						>
							New Consultation Request
						</Text>
					</Section>

					<Hr
						style={{
							border: "none",
							borderTop: "1px solid #C2D6C9",
							margin: "24px 0",
						}}
					/>

					{/* Contact Information */}
					<Section style={{ marginBottom: "24px" }}>
						<Text
							style={{
								fontSize: "16px",
								fontWeight: "600",
								color: "#ffffff",
								margin: "0 0 16px 0",
							}}
						>
							Contact Information
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Name:</strong> {firstName} {lastName}
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Email:</strong> {email}
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Phone:</strong> {phone}
						</Text>
					</Section>

					{/* Project Information */}
					<Section style={{ marginBottom: "24px" }}>
						<Text
							style={{
								fontSize: "16px",
								fontWeight: "600",
								color: "#ffffff",
								margin: "0 0 16px 0",
							}}
						>
							Project Information
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Project Type:</strong> {projectType}
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Rooms Involved:</strong> {roomType}
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Project Size:</strong> {projectSize}
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Timeline:</strong> {timeline}
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								margin: "8px 0",
								lineHeight: "1.5",
							}}
						>
							<strong>Budget:</strong> {budget}
						</Text>
					</Section>

					<Hr
						style={{
							border: "none",
							borderTop: "1px solid #3ACF6E",
							margin: "24px 0",
						}}
					/>

					{/* Message */}
					<Section style={{ marginBottom: "32px" }}>
						<Text
							style={{
								fontSize: "16px",
								fontWeight: "600",
								color: "#ffffff",
								margin: "0 0 16px 0",
							}}
						>
							Project Details
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#C2D6C9",
								lineHeight: "1.6",
								backgroundColor: "#1a3a1a",
								padding: "16px",
								borderRadius: "8px",
								border: "1px solid #3ACF6E",
							}}
						>
							{message}
						</Text>
					</Section>

					{/* Action Buttons */}
					<Section style={{ textAlign: "center" }}>
						<Button
							href={`mailto:${email}?subject=Re: Your Cruz Remodeling Consultation Request`}
							style={{
								backgroundColor: "#3ACF6E",
								color: "#ffffff",
								padding: "12px 24px",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
								fontSize: "14px",
								marginRight: "12px",
								display: "inline-block",
							}}
						>
							Reply to Client
						</Button>
						<Button
							href={`tel:${phone}`}
							style={{
								backgroundColor: "#ffffff",
								color: "#082010",
								padding: "12px 24px",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
								fontSize: "14px",
								display: "inline-block",
							}}
						>
							Call Client
						</Button>
					</Section>

					<Hr
						style={{
							border: "none",
							borderTop: "1px solid #3ACF6E",
							margin: "32px 0 24px 0",
						}}
					/>

					{/* Footer */}
					<Section style={{ textAlign: "center" }}>
						<Text
							style={{
								fontSize: "12px",
								color: "#C2D6C9",
								margin: "0",
							}}
						>
							This custom quote request was submitted through the Cruz
							Remodeling website.
						</Text>
						<Text
							style={{
								fontSize: "12px",
								color: "#C2D6C9",
								margin: "8px 0 0 0",
							}}
						>
							© {new Date().getFullYear()} Cruz Remodeling. All rights
							reserved.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}
