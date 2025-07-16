"use client";
import { useEffect } from "react";

const ButtonExpand = () => {
	useEffect(() => {
		const setSquareLeft = () => {
			const buttons = document.querySelectorAll<HTMLElement>(".btn_expand");

			buttons.forEach((btn) => {
				const parent = btn.parentElement as HTMLElement | null;
				if (parent) {
					const parentWidth = parent.offsetWidth;
					const btnHeight = btn.offsetHeight;

					const leftValue = parentWidth - 2 - btnHeight;
					btn.style.left = `${leftValue}px`;
				}
			});
		};

		// Run on load & resize
		window.addEventListener("load", setSquareLeft);
		window.addEventListener("resize", setSquareLeft);

		// Initial call
		setSquareLeft();

		// Cleanup on unmount
		return () => {
			window.removeEventListener("load", setSquareLeft);
			window.removeEventListener("resize", setSquareLeft);
		};
	}, []);

	return null;
};

export default ButtonExpand;
